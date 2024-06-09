import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home"
import Shop from "../Shop/Shop"
import About from "../components/About"
import Blog from "../components/Blog"
import SingleBook from "../Shop/SingleBook";
import DashBoardLayout from "../DashBoard/DashBoardLayout"
import DashBoard from "../DashBoard/DashBoard"
import Upload from "../DashBoard/Upload"
import ManageBooks from "../DashBoard/ManageBooks"
import EditBooks from "../DashBoard/EditBooks"
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LogOut from "../components/LogOut";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/shop',
          element:<Shop/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'book/:id',
          element:<SingleBook/>,
          loader: async ({ params }) => {
            const response = await fetch(`http://localhost:5000/book/${params.id}`);
            return response
          }
        } 
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashBoardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><DashBoard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<Upload/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader: async ({ params }) => {
            const response = await fetch(`http://localhost:5000/book/${params.id}`);
            return response
          }
        },
      ]
    },
    {
      path:"sign-up",
      element:<SignUp/>
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"/logout",
      element:<LogOut/>
    }
  ]);

export default router;  