import { createFileRoute, Outlet, redirect, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {

    // 未認証の場合はログイン画面に遷移を強制する
    if(!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href
        }
      });
    }
  },
  loader: () => ({
    loaderData: 'This data was loaded in the /_app/ route loader',
  })
})

function RouteComponent() {
  const router = useRouter();
  const handleLogout = async () => {
    // Implement logout logic here
    console.log("Logout button clicked");
    localStorage.setItem("isAuthenticated", "false");

    // src/App.tsx の context.auth を再評価するために invalidate を呼び出す
    // invalidate を呼び出さないと context.auth は更新されない
    await router.invalidate();
    router.navigate({
      to: "/login"
    })
  }
  return (
    <>
      <button onClick={handleLogout} >Logout</button>
      <Outlet />
    </>
  )
}
