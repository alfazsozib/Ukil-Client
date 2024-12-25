import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AdvocateRegister from "../pages/login-register/AdvocateRegister";
import Login from "../pages/login-register/Login";
import UserRegister from "../pages/login-register/UserRegister";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/advocate-register',
            element: <AdvocateRegister/>
        },
        {
            path: '/user-register',
            element: <UserRegister/>
        },
        {
            path: '/login',
            element: <Login/>
        },
      ]
    },
  ]);