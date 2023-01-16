import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import("../components/pages/HomePage"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
