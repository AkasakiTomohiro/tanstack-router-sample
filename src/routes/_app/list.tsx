import { createFileRoute } from '@tanstack/react-router'
import z from 'zod';

const searchSchema = z.object({
  search: z.string().optional().catch(undefined), // 無効なパラメータの場合は undefined にフォールバックすることで、クエリパラメータから削除される
});

export const Route = createFileRoute('/_app/list')({
  component: RouteComponent,
  validateSearch: searchSchema,
})

function RouteComponent() {
  const { search } = Route.useSearch();
  return <div>Hello "/_app/list"![{search}]</div>
}
