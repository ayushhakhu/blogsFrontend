import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { AuthContext } from "../hooks/AuthContext";
import { useContext } from "react";

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
const CategoryWiseBlogs = lazy(() =>
  import("../components/pages/CategoryWiseBlogs")
);

export const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {!isAuthenticated && <Route path="/login" element={<LoginPage />} />}
      {!isAuthenticated && <Route path="/signup" element={<SignupPage />} />}
      <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
      <Route path="/user/:userName" element={<MyBlogs />} />
      <Route path="/category/:category" element={<CategoryWiseBlogs />} />
      {isAuthenticated && (
        <Route path="/createNewBlog" element={<CreateNewBlogPage />} />
      )}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
