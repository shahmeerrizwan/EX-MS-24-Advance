import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Products from "../Screens/Products";
import MainScreen from "../Screens/MainScreen";
import Layout from "./Layout";



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
]);

export default function Router() {
    return <RouterProvider router={router} />
}