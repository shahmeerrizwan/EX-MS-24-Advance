import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../Screens/Home";
import Products from "../Screens/Products";
import Detailed from "../Screens/Detailed";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/details/:id",
        element: <Detailed />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />
}