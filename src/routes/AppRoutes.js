import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import("../components/pages/HomePage"));
const BlogDetailsPage = lazy(() =>
  import("../components/pages/BlogDetailsPage")
);
const CreateNewBlogPage = lazy(() =>
  import("../components/pages/CreateNewBlogPage")
);
const LoginPage = lazy(() => import("../components/pages/LoginPage"));
const SignupPage = lazy(() => import("../components/pages/SignupPage"));
const MyBlogs = lazy(() => import("../components/pages/MyBlogs"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
      <Route path="/user/:userName" element={<MyBlogs />} />
      <Route path="/createNewBlog" element={<CreateNewBlogPage />} />
    </Routes>
  );
};
