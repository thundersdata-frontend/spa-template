## 使用 plugin-initial-state、plugin-model、plugin-access 来配置登录用户路由、菜单和权限

### 1. plugin-initial-state 使用

在`src/app.ts`中，导出`getInitialState`方法，需要配合`plugin-model`一起使用。

```tsx
// app.ts
export async function getInitialState() {
  const data = await fetchXXX(); // 请求后端接口，比如拿到菜单、路由、权限、个人信息等数据
  return data;
}

// 其他页面根据useModel('@@initialState')拿到初始值
export default () => {
  const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');

  // 参数释义参见：https://umijs.org/zh-CN/plugins/plugin-initial-state#initialstate
};
```

### 2. plugin-access 使用

在`src/access.ts`里面默认导出一个方法，该方法返回一个对象，对象的每一个值就对应一条权限。

```tsx
// src/access.ts
export default initialState => {
  // initialState是通过上面的`plugin-initial-state`返回的数据
  const { userId, role } = initialState;

  return {
    canRead: true,
    canUpdate: role === 'admin',
    canDelete: foo => foo.ownerId === userId,
    // ...
  };
};
// 在其他页面，可以通过`umi`内置的`userAccess`来获取权限相关信息
export default () => {
  const access = useAccess();

  if (access.canRead) {
    // do something
  }

  return <>xxx</>;
};
```

同时，`umi`还给我们暴露了一个`<Access>`组件，我们可以用它来对应用进行细粒度的权限控制，比如可以精确地控制某个按钮、某个菜单、某个超链接是否显示。 `<Access>`组件的属性有：

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
      <Access accessible={access.canRead} fallback={<div>Cannot read content</div>}>
        Read Content
      </Access>
      <Access accessible={access.canUpdate} fallback={<div>Cannot update content</div>}>
        Update Content
      </Access>
      <Access accessible={access.canDelete} fallback={<div>Cannot delete content</div>}>
        Delete Content
      </Access>
    </div>
  );
}

return IndexPage;
```

## pont 生成工具与 umi 的 useRequest 结合使用

### pont 配置

1. 在 pont-config.json 文件中配置 origins，一个 swagger 地址对应一个 name 和 originUrl，name 的命名没有约束，但是会在接口调用的时候用到，例如 authorization（权限中心），originUrl 就是 api-docs 的地址，例如'http://xxxx/v2/api-docs'，可以支持配置多个swagger地址，但是注意：除了origins之外的配置项不要改动
2. server.config.js 文件是用于从 pont-config.json 文件中读取后端接口地址的，不需要进行改动（如果随意的更改可能会引起调用接口的时候 nameSpace 对应不上）
3. pontTemplate.ts 文件是定义生成代码的模板文件，不需要进行改动
4. 在项目的入口文件，即 src 目录下的 global.ts 文件中加入一句'import '@/services';'，把 API 引入进来

### pont 使用

1. 在 vscode 中安装 vscode 插件 td-pont，使用方法参考'https://github.com/nefe/vscode-pont'
2. 当 vscode-pont 检测到项目中含有合法的 pont-config.json 之后，插件会马上启动生成 services 文件夹
3. 如果后端接口发生了更新，那么需要手动的点击 VS code 左下方的 sync 按钮，这样才会去比较线上和线下的差异实现和服务端同步变更，但是这个变更是存在于内存中的，all/mod/bo 都是把对应内容更新到 api.lock 中，generate 是根据 lock 生成最后的代码
4. 当重新打开项目时，会自动调用一次 sync，获取和服务端的差异
5. 目前 API 已经配置为全局变量，当需要调用接口时，我们不需要再进行 import 操作，只需要 API.[nameSpace].[mod].[方法的文件名].fetch()，nameSpace 即在 pont-config.json 文件中配置的 origins 的 name，mod 即是 module，例如：API.authorization.role.resourceSave.fetch()
6. 更多细节：'https://github.com/alibaba/pont'

### pont 的 mock 功能

我们自己基于 pont 的代码进行了改动，实现了多数据源 mock 以及生成的 mock 文件与 umi 的 request 的 mock 功能相结合，具体使用方式如下：

1. 卸载 VS code 中的 pont 插件，并搜索 td-pont，进行安装，使用方式相同
2. 在 pont-config.json 文件中的 mocks 字段中配置 containDataSources，格式为 string[]，注意：containDataSources 中的字段名必须是 origins 中的 name 字段，否则识别不到哪些数据源要走 mock 功能
3. homepage 中有调用的例子，不管是否走 mock 功能，调用方式不变，都为 API.xxx.xxx.xxx.fetch 的形式，就是说只有在 containDataSources 中配置的数据源名称才是走 mock，否则就是正常接口请求

### pont 最佳实践

基于我们自定义的 pontTemplate，pont 已经帮我们生成了我们需要的 TypeScript 类型声明文件，以及对应的调用后端接口的胶水代码，同时也为我们生成好了初始值。那么我们使用 pont 的最佳实践应该是什么样的呢？我在这里大致总结一下：

1. 不要自己定义初始值，直接使用 pont 生成的 init 值作为 useState 或者 store 里面的初始值。例如：

```typescript
const [detail, setDetail] = useState<defs.gazelle.CompanyFinancialIndicatorDTO>(
  API.gazelle.companyFinancialIndicator.getById.init,
);
```

2. 与 umi 的 useRequest 结合使用

我们自定义生成的请求方法的格式如下：当接口请求的 success 为 false 时，我们会把错误 throw 出去，在 useRequest 的 onError 中进行处理，此时返回的 data 是接口数据的默认值

```typescript
export async function fetch(params = {}) {
  const result = await request.get(backEndUrl + '/interview/getInterviewerDetail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
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
  },
});
```

3. 如果前端需要的数据格式和后端返回的格式有区别（最常见的就是日期和文件），那么你需要自己构造一个类型来对这些特殊属性进行处理。这个时候最好是使用 typescript 提供的`Utility Types(工具类型)`来尽可能复用已有的类型。例如：

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
