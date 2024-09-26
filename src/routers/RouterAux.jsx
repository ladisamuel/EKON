import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import LoggedInLayout from "./layout/LoggedInLayout";
import ForgotPassword from "../pages/auth/ForgotPassword";
import PasswordRecovery from "../pages/auth/PasswordRecovery";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/main/Dashboard";
import AllEntry from "../pages/main/AllEntry";
import ApprovedEntry from "../pages/main/ApprovedEntry";
import PendingEntry from "../pages/main/PendingEntry";
import DataEntryOne from "../pages/main/DataEntryOne";
import DataEntryTwo from "../pages/main/DataEntryTwo";
import AddUser from "../pages/main/AddUser";
import AllUser from "../pages/main/AllUser";
import AdminUser from "../pages/main/AdminUser";
import SuperAdminUser from "../pages/main/SuperAdminUser";
import DataPage from "../pages/main/DataPage";


const RouterAux = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "/recover-password",
          element: <PasswordRecovery />,
        },
        
        
        // {
        //   path: "*",
        //   element: '<NotFound  />
        // }
     
      ],
    },
    {
      path: "/",
      element: <LoggedInLayout />,
      children: [
        {
          path: "/Dashboard",
          element: <Dashboard />,
        },
        {
          path: "/AddNewOne",
          element: <DataEntryOne />,
        },
        {
          path: "/AddNewTwo",
          element: <DataEntryTwo />,
        },
        {
          path: "/Entries/AllEntries",
          element: <AllEntry />,
        },
        {
          path: "/Entries/ApprovedEntries",
          element: <ApprovedEntry />,
        },
        {
          path: "/Entries/PendingEntries",
          element: <PendingEntry />,
        },
        {
          path: "/Entries/single/:id",
          element: <DataPage />,
        },
        {
          path: "/user/alluser",
          element: <AllUser />,
        },
        {
          path: "/user/admin",
          element: <AdminUser />,
        },
        {
          path: "/user/super admin",
          element: <SuperAdminUser />,
        },
        {
          path: "/user/addnewuser",
          element: <AddUser />,
        },
        
      ],
    },
  ]);
  
  export default RouterAux;
  