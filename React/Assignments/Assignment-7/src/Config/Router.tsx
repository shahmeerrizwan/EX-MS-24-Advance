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

const isUserLoggedIn = (): boolean => {
    const auth = getAuth();
    let loggedIn = false;
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        loggedIn = true;
      } else {
        loggedIn = false;
      }
    });
  
    return loggedIn;
  };
  
  const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    return isUserLoggedIn() ? <>{element}</> : <Navigate to="/" />;
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
        element: (
            
            <ProtectedRoute element={<CheckOut />} />
            
        ),
    },
    {
        path: "/product/:id",
        element: (
            
            <ProtectedRoute element={<ProductDetail />}/>
            
        ),
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
    return <RouterProvider router={router} />
}