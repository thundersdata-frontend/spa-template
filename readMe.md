## 使用plugin-initial-state、plugin-model、plugin-access来配置登录用户路由、菜单和权限

### 1. plugin-initial-state使用
在`src/app.ts`中，导出`getInitialState`方法，需要配合`plugin-model`一起使用。

```tsx
// app.ts
export async function getInitialState() {
  const data = await fetchXXX(); // 请求后端接口，比如拿到菜单、路由、权限、个人信息等数据
  return data;
}

// 其他页面根据useModel('@@initialState')拿到初始值
export default () => {
  const {
    initialState,
    loading,
    error,
    refresh,
    setInitialState,
  } = useModel('@@initialState');

  // 参数释义参见：https://umijs.org/zh-CN/plugins/plugin-initial-state#initialstate
}

```

### 2. plugin-access使用
在`src/access.ts`里面默认导出一个方法，该方法返回一个对象，对象的每一个值就对应一条权限。

```tsx
// src/access.ts
export default (initialState) => {
  // initialState是通过上面的`plugin-initial-state`返回的数据
  const { userId, role } = initialState;

  return {
    canRead: true,
    canUpdate: role === 'admin',
    canDelete: foo => foo.ownerId === userId,
    // ...
  };
}
// 在其他页面，可以通过`umi`内置的`userAccess`来获取权限相关信息
export default () => {
  const access = useAccess();

  if (access.canRead) {
    // do something
  }

  return (
    <>xxx</>
  );
}
```
同时，`umi`还给我们暴露了一个`<Access>`组件，我们可以用它来对应用进行细粒度的权限控制，比如可以精确地控制某个按钮、某个菜单、某个超链接是否显示。
`<Access>`组件的属性有：
- `accessible`: 是否有权限，通常通过`useAccess`获取后传进来
- `fallback`: 无权限时的显示，默认无权限不显示任何内容
- `children`: 有权限时显示的内容

```tsx
import React from 'react';
import { useAccess, Access } from 'umi';

function IndexPage() {
  const access = useAccess();

  if (access.canRead) {
    // Do something
  }

  return (
    <div>
      <Access
        accessible={access.canRead}
        fallback={<div>Cannot read content</div>}
      >
        Read Content
      </Access>
      <Access
        accessible={access.canUpdate}
        fallback={<div>Cannot update content</div>}
      >
        Update Content
      </Access>
      <Access
        accessible={access.canDelete}
        fallback={<div>Cannot delete content</div>}
      >
        Delete Content
      </Access>
    </div>
  );
}

return IndexPage;

```

## pont生成工具与umi的useRequest结合使用

### pont配置
1. 在pont-config.json文件中配置origins，一个swagger地址对应一个name和originUrl，name的命名没有约束，但是会在接口调用的时候用到，例如authorization（权限中心），originUrl就是api-docs的地址，例如'http://xxxx/v2/api-docs'，可以支持配置多个swagger地址，但是注意：除了origins之外的配置项不要改动
2. server.config.js文件是用于从pont-config.json文件中读取后端接口地址的，不需要进行改动（如果随意的更改可能会引起调用接口的时候nameSpace对应不上）
3. pontTemplate.ts文件是定义生成代码的模板文件，不需要进行改动
4. 在项目的入口文件，即src目录下的global.ts文件中加入一句'import '@/services';'，把API引入进来

### pont使用
1. 在 vscode 中安装 vscode 插件 pont，使用方法参考'https://github.com/nefe/vscode-pont'
2. 当vscode-pont检测到项目中含有合法的pont-config.json之后，插件会马上启动生成services文件夹
3. 如果后端接口发生了更新，那么需要手动的点击VS code左下方的sync按钮，这样才会去比较线上和线下的差异实现和服务端同步变更，但是这个变更是存在于内存中的，all/mod/bo都是把对应内容更新到api.lock中，generate是根据lock生成最后的代码
4. 当重新打开项目时，会自动调用一次sync，获取和服务端的差异
5. 目前API已经配置为全局变量，当需要调用接口时，我们不需要再进行import操作，只需要API.[nameSpace].[mod].[方法的文件名].fetch()，nameSpace即在pont-config.json文件中配置的origins的name，mod即是module，例如：API.authorization.role.resourceSave.fetch()
6. 更多细节：'https://github.com/alibaba/pont'

### pont最佳实践
基于我们自定义的pontTemplate，pont已经帮我们生成了我们需要的TypeScript类型声明文件，以及对应的调用后端接口的胶水代码，同时也为我们生成好了初始值。那么我们使用pont的最佳实践应该是什么样的呢？我在这里大致总结一下：
1. 不要自己定义初始值，直接使用pont生成的init值作为useState或者store里面的初始值。例如：
```typescript
const [detail, setDetail] = useState<defs.gazelle.CompanyFinancialIndicatorDTO>(API.gazelle.companyFinancialIndicator.getById.init);
```
2. 与umi的useRequest结合使用

我们自定义生成的请求方法的格式如下：当接口请求的success为false时，我们会把错误throw出去，在useRequest的onError中进行处理，此时返回的data是接口数据的默认值
```typescript
export async function fetch(params = {}) {
  const result = await request.get(
    backEndUrl + '/interview/getInterviewerDetail',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (!result.success) throw new Error(result.message);
  return result.data || new defs.recruitment.HrmInterviewDTO();
}
```

```typescript
useRequest(() => API.recruitment.dict.getAllDict.fetch(), {
  onSuccess: data => {
    setEnums(data);
  },
  onError: error => {
    console.log(error.message);
  }
});
```
3. 如果前端需要的数据格式和后端返回的格式有区别（最常见的就是日期和文件），那么你需要自己构造一个类型来对这些特殊属性进行处理。这个时候最好是使用typescript提供的`Utility Types(工具类型)`来尽可能复用已有的类型。例如：
```typescript
export type PolicyDetailDTO = Pick<
  defs.gazelle.PolicyDTO,
  | 'policyId'
  | 'policyType'
  | 'title'
  | 'indexCode'
  | 'issueNumber'
  | 'issueOrg'
  | 'subjectType'
  | 'subjectWord'
  | 'tenantCode'
> & {
  issueDate: moment.Moment;
  finalDate: moment.Moment;
  attachment?: UploadFile[];
};
```