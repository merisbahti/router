import * as React from 'react'
import { useLoaderInstance, useMatch } from '@tanstack/react-router'
import { routeConfig } from '../../routes.generated/posts/$postId'
export type PostType = {
  id: string
  title: string
  body: string
}
function Post() {
  const { post } = useLoaderInstance({
    from: routeConfig.id,
  })
  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
    </div>
  )
}
export const component = Post
