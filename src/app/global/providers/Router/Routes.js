import Main from "../../../../pages/Main/main";
import Login from "../../../../pages/Login/login";
import Search from "../../../../pages/Search/search";
import Result from "../../../../pages/Result/result";
import NotFound from "../../../../pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);