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
