import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

export default function Router() {
  return <RouterProvider router={router} />;
} 