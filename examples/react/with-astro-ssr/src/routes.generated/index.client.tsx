import { lazy } from '@tanstack/react-router';
import { routeConfig as parentRouteConfig } from "./__root.client";
const new Route({ getParentRoute: () => routeConfig = parentRouteConfig,
  path: "/",
  component: lazy(() => import('./index-component').then(d => ({
    default: d.component
  })))
});
export { routeConfig, routeConfig as indexRoute };