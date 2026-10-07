import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ContactPage } from "@/pages/ContactPage";
import { EPKPage } from "@/pages/EPKPage";
import { HomePage } from "@/pages/HomePage";
import { MediaPage } from "@/pages/MediaPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ShowsPage } from "@/pages/ShowsPage";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "shows", element: <ShowsPage /> },
        { path: "media", element: <MediaPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "epk", element: <EPKPage /> },
        { path: "about", element: <Navigate to="/" replace /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
);
