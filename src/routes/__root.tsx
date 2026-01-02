import { createRootRoute, Outlet, useNavigate } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

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

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
});
