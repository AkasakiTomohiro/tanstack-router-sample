import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <>
      <div>Hello "/_app/"!</div>
      <Link to="/settings">Go to /_app/settings</Link>
    </>
  )
}
