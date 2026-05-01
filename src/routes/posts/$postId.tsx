import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()
  return <div className="text-red-800">Hello /posts/{postId}!</div>
}
