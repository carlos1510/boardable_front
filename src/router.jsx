import { createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login/Login";
import Signup from "./routes/signup/Signup";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />
    }
]);