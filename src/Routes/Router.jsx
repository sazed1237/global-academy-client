import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Enroll from "../Pages/Enroll";
import Login from "../Pages/Login";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import ManageEnrollments from "../Pages/Dashboard/ManageEnrollments";
import ManageUsers from "../Pages/Dashboard/Manageusers";
import AdminRoute from "./AdminRoute";
import RejectedEnroll from "../Pages/Dashboard/RejectedEnroll";
import ConfirmEnroll from "../Pages/Dashboard/ConfirmEnroll";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'enroll',
                element: <Enroll />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },

    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: 'home',
                element: <DashboardHome />
            },
            {
                path: 'enrollments',
                element: <ManageEnrollments />
            },
            {
                path: 'confirm',
                element: <ConfirmEnroll />
            },
            {
                path: 'rejected',
                element: <RejectedEnroll />
            },
            {
                path: 'users',
                element: <ManageUsers />
            },
        ]
    }
]);