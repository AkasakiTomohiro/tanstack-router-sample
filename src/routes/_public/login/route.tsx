import { createFileRoute, useRouter } from '@tanstack/react-router'
import z from 'zod';

const searchSchema = z.object({
  redirect: z.string().optional(),
});

export const Route = createFileRoute('/_public/login')({
  component: RouteComponent,
  validateSearch: searchSchema
})

function RouteComponent() {
  const router = useRouter();
  const { redirect } = Route.useSearch();

  const handleLogin = async () => {
    // Implement login logic here
    console.log("Login button clicked");
    localStorage.setItem("isAuthenticated", "true");

    // src/App.tsx の context.auth を再評価するために invalidate を呼び出す
    // invalidate を呼び出さないと context.auth は更新されない
    await router.invalidate();
    router.navigate({
      to: redirect || '/',
    });
  }

  return (
    <>
      <div>Hello "/(public)/login"!</div>
      <button onClick={handleLogin} >Login</button>
    </>
  )
}
