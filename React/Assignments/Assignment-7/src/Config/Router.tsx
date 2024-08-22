import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Products from "../Screens/Products";
import MainScreen from "../Screens/MainScreen";
import Layout from "./Layout";
import NotFound from "../Screens/NotFound";
import CheckOut from "../Screens/CheckOut";
import ProductDetail from "../Screens/ProductDetail";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="loading">
        <img
          src="https://superstorefinder.net/support/wp-content/uploads/2018/01/grey_style.gif"
          alt="Loading..."
        />
      </div>
    );
  }
  return isAuthenticated ? <>{element}</> : <Navigate to="/" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <MainScreen />
      </Layout>
    ),
  },
  {
    path: "/products",
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },
  {
    path: "/checkout",
    element: <ProtectedRoute element={<CheckOut />} />,
  },
  {
    path: "/product/:id",
    element: <ProtectedRoute element={<ProductDetail />} />,
  },
  {
    path: "/*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
