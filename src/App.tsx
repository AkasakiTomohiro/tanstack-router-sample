import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  context: {
    // getter にすることで再読みされたときに再評価できる
    get auth() {
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      return { isAuthenticated };
    }
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
};

function App() {
  return (<RouterProvider router={router} />);
}


export default App
