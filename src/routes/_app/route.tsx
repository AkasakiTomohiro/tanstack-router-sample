import { createFileRoute, Outlet, redirect, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    if(!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href
        }
      });
    }
  }
})

function RouteComponent() {
  const router = useRouter();
  const handleLogout = async () => {
    // Implement logout logic here
    console.log("Logout button clicked");
    localStorage.setItem("isAuthenticated", "false");
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
