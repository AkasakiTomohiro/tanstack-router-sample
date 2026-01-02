import { createFileRoute, redirect, useRouter } from '@tanstack/react-router'

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
  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout button clicked");
    localStorage.setItem("isAuthenticated", "false");
    router.navigate({
      to: "/login"
    })
  }
  return (
    <>
      <div>Hello "/_app"!</div>
      <button onClick={handleLogout} >Logout</button>
    </>
  )
}
