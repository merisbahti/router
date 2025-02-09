import { lazy } from '@tanstack/react-router'
import { routeConfig as parentRouteConfig } from '../posts.client'
import { useMatch } from '@tanstack/react-router'
export type PostType = {
  id: string
  title: string
  body: string
}
export const tanner = 'foo'
const new Route({ getParentRoute: () => routeConfig = parentRouteConfig,
  path: '$postId',
  component: lazy(() =>
    import('./$postId-component').then((d) => ({
      default: d.component,
    })),
  ),
  onLoad: true as any,
})
export { routeConfig, routeConfig as postspostIdRoute }
