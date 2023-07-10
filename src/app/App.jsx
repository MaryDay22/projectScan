import "./global/styles/global.css";
import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import { TokenProvider } from "./global/providers/TokenProvider";
import { router } from "./global/providers/Router/Routes";

function App() {
  return (
    <TokenProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </TokenProvider>
  );
}
export default App;
