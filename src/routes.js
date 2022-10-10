import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AddVideoPage from "./pages/AddVideoPage";
import MyVideosPage from "./pages/MyVideosPage";
import UpdateVideoPage from "./pages/UpdateVideoPage";

import NotFound from "./pages/NotFound";

const routes = [
  {
    ...HomePage,
    path: "/",
    exact: true,
  },
  {
    ...VideoPage,
    path: "/video/:id",
    exact: true,
  },
  {
    ...SignInPage,
    path: "/signin",
    exact: true,
  },
  {
    ...SignUpPage,
    path: "/signup",
    exact: true,
  },
  {
    ...AddVideoPage,
    path: "/add/video",
    exact: true,
  },
  {
    ...MyVideosPage,
    path: "/my/videos",
    exact: true,
  },
  {
    ...UpdateVideoPage,
    path: "/update/video",
    exact: true,
  },
  {
    ...NotFound,
    path: "*",
    exact: true,
  },
];

export default routes;
