/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Locations } from './pages/Locations';
import { LocationDetail } from './pages/LocationDetail';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "hakkimizda",
        element: <About />,
      },
      {
        path: "hizmetlerimiz",
        element: <Services />,
      },
      {
        path: "hizmet-bolgeleri",
        element: <Locations />,
      },
      {
        path: "hizmet-bolgeleri/avrupa-yakasi/:ilceSlug",
        element: <LocationDetail />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <BlogPost />,
      },
      {
        path: "iletisim",
        element: <Contact />,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
