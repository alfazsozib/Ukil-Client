import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AdvocateRegister from "../pages/login-register/AdvocateRegister";
import Login from "../pages/login-register/Login";
import UserRegister from "../pages/login-register/UserRegister";
import AdvocateProfile from "../pages/profile/AdvocateProfile";
import UserProfile from "../pages/profile/UserProfile";
import Advocate from "../pages/advocate/Advocate";
import AdvocateDetails from "../pages/advocate-details/AdvocateDetails";
import ArticlesPage from "../pages/articles/ArticlesPage";

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
            path: '/advocates',
            element: <Advocate/>
        },
        {
            path: '/articles',
            element: <ArticlesPage/>
        },
        {
            path: '/advocate/:id',
            element: <AdvocateDetails/>
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
        {
            path: `/advocate-profile/:userName`,
            element: <AdvocateProfile/>
        },
        {
            path: `/user-profile/:userName`,
            element: <UserProfile/>
        },
      ]
    },
  ]);