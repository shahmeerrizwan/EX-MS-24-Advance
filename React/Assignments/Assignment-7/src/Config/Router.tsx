import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Products from "../Screens/Products";
import MainScreen from "../Screens/MainScreen";
import Layout from "./Layout";
import NotFound from "../Screens/NotFound";
import CheckOut from "../Screens/CheckOut";
import ProductDetail from "../Screens/ProductDetail";



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
            
                <CheckOut/>
            
        ),
    },
    {
        path: "/product/:id",
        element: (
            
                <ProductDetail/>
            
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