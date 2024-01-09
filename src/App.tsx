import Layout from "./components/layout";
import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={"/payment"} />} />
        {routes.map((route) => {
          return <Route path={route.link} Component={route.Component} />;
        })}
        <Route path="*" element={<Navigate to={"/payment"} />} />
      </Routes>
    </Layout>
  );
}
