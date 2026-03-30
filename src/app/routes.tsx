import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

import { NeloStorePage } from "./pages/nelostore/NeloStorePage";
import { BannersPage } from "./pages/nelostore/BannersPage";
import { NeloStoreColorsPage } from "./pages/nelostore/ColorsPage";
import { NeloStoreComponentsPage } from "./pages/nelostore/ComponentsPage";
import { NeloStoreLPExamplePage } from "./pages/nelostore/LPExamplePage";

import { NelogicaPage } from "./pages/NelogicaPage";
import { NelogicaBannersPage } from "./pages/nelogica/NelogicaBannersPage";
import { BlackArrowPage } from "./pages/BlackArrowPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { 
        path: "nelostore", 
        children: [
          { index: true, Component: NeloStorePage },
          { path: "banners", Component: BannersPage },
          { path: "cores", Component: NeloStoreColorsPage },
          { path: "componentes", Component: NeloStoreComponentsPage },
          { path: "lp-exemplo", Component: NeloStoreLPExamplePage },
        ]
      },
      { 
        path: "nelogica", 
        children: [
          { index: true, Component: NelogicaPage },
          { path: "banners", Component: NelogicaBannersPage },
        ]
      },
      { path: "blackarrow", element: <BlackArrowPage /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});


