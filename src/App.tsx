import { lazy, Suspense, type ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const Locations = lazy(() => import("./pages/Locations").then((m) => ({ default: m.Locations })));
const LocationDetail = lazy(() =>
  import("./pages/LocationDetail").then((m) => ({ default: m.LocationDetail }))
);
const Blog = lazy(() => import("./pages/Blog").then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import("./pages/BlogPost").then((m) => ({ default: m.BlogPost })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));

function PageLoader() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-slate-50"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-slate-200 border-t-red-600" />
      <span className="sr-only">Sayfa yükleniyor</span>
    </div>
  );
}

function withSuspense(element: ReactElement) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "hakkimizda", element: withSuspense(<About />) },
      { path: "hizmetlerimiz", element: withSuspense(<Services />) },
      { path: "hizmet-bolgeleri", element: withSuspense(<Locations />) },
      {
        path: "hizmet-bolgeleri/avrupa-yakasi/:ilceSlug",
        element: withSuspense(<LocationDetail />),
      },
      { path: "blog", element: withSuspense(<Blog />) },
      { path: "blog/:slug", element: withSuspense(<BlogPost />) },
      { path: "iletisim", element: withSuspense(<Contact />) },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
