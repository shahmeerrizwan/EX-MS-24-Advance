import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../Screens/Home";
import Products from "../Screens/Products";



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
        path: "/detail:id",
        element: <Products />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />
}