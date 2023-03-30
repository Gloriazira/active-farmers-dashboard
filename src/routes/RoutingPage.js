import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


//Routes
import LandingPage from '../LandingPage';
import Login from '../onboarding/login/Login';
import Member from '../onboarding/registration/member/Member';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Member />
  },
]);

export default function RoutingPage() {
    return(
        <div>
            <RouterProvider router={router} />
        </div>
    )
}