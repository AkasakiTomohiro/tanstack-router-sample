import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)')({
  component: RouteComponent,
    beforeLoad: ({ context }) => {
      if(context.auth.isAuthenticated) {
        throw redirect({
          to: "/"
        });
      }
    }
})

function RouteComponent() {
  return <Outlet />
}
