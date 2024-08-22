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
import { getAuth,  } from "firebase/auth";
import { useEffect, useState } from "react";

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  
 
useEffect(() => {

    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user) {
        setIsAuthenticated(true);
    } else {
        setIsAuthenticated(false);
    }
}, [])



    if (isAuthenticated === null) {
      // Optionally, you can show a loading spinner here while checking the auth status
      return <div>Loading...</div>;
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