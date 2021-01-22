import React from 'react';
import type { IRouteComponentProps } from 'umi';
import { Route } from 'umi';
import arrayUtils from '@/utils/array';

const Guard: React.FC<IRouteComponentProps> = (props) => {
  const {
    location: { pathname },
    route: { routes = [] },
  } = props;

  const flattenRoutes = arrayUtils.deepFlatten(routes, 'routes');
  if (flattenRoutes.find((item) => item.path === pathname)) {
    return <>{props.children}</>;
  }
  const notFoundRoute = flattenRoutes.find((item) => item.path === '/*')!;
  return <Route {...notFoundRoute} />;
};

export default Guard;
