import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import("../components/pages/HomePage"));
const BlogDetailsPage = lazy(() =>
  import("../components/pages/BlogDetailsPage")
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:blogId" element={<BlogDetailsPage />} />
    </Routes>
  );
};
