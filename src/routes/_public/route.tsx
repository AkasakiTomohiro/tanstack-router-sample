import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  component: RouteComponent,
    beforeLoad: ({ context }) => {
      // 認証済みの場合はホーム画面に遷移を強制する
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
