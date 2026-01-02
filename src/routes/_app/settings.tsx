import { createFileRoute, getRouteApi, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/settings')({
  component: RouteComponent,
})


function RouteComponent() {

  // 上位のルートの loader データを取得する例
  const routeApi = getRouteApi('/_app');
  const data = routeApi.useLoaderData();
  console.log(data);

  // ルーターコンテキストを取得する例
  const { auth } = Route.useRouteContext();
  console.log('Auth context in /_app/settings:', auth);

  return (
    <>
      <div>Hello "/_app/settings"!</div>
      <Link to="/">Go to /</Link>
    </>
  )
}
