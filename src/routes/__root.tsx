import { createRootRouteWithContext, Outlet, useNavigate } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { RouterContext } from '../routerContext';

const RootComponent = () => {
    return (
          <>
            <Outlet />
            <TanStackRouterDevtools initialIsOpen={false} />
        </> 
    )
}

const NotFoundComponent = () => {
    const navigate = useNavigate();
    navigate({ to: "/" });
    return "";
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
});
