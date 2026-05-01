import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
console.log('hi there')
  return <div className="text-red-800">Hello "/posts/"!</div>
}
