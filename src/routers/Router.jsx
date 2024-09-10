import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/app/dashboard/Dashboard";
import Landing from "../pages/main/Landing";
import Login from "../pages/main/Login";
import Register from "../pages/main/Register";
import DefaultLayout from "./layout/DefaultLayout";
import LoggedInLayout from "./layout/LoggedInLayout";
import GiftCard from "../pages/app/dashboard/GiftCard";
import Wallet from "../pages/app/dashboard/Wallet";
import Transaction from "../pages/app/dashboard/Transaction";
import Referral from "../pages/app/dashboard/Referral";
import Rates from "../pages/app/dashboard/Rates";
import WalletTwo from "../pages/app/dashboard/WalletTwo";
import GiftCardTwo from "../pages/app/dashboard/GiftCardTwo";

const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/sign-in",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
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
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
            path: "gift_cards",
            element: <GiftCard />
        },
        {
            path: "/gift_cards/:id/opentrade",
            element: <GiftCardTwo />
        },
        {
            path: "wallet",
            element: <Wallet />
        },
        {
            path: "/wallet/:id/opentrade",
            element: <WalletTwo />
        },
        {
            path: "transactions",
            element: <Transaction />
        },
        {
            path: "refferals",
            element: <Referral />
        },
        {
            path: "rates",
            element: <Rates />
        },
      ],
    },
  ]);
  
  export default router;
  