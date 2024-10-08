import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import DashBoard from "../pages/main/DashBoard";
import Login from "../pages/auth/Login";
import DataEntryOne from "../pages/main/DataEntryOne";
import Main from "../pages/main/Main";
import DataEntryTwo from "../pages/main/DataEntryTwo";
import AllEntry from "../pages/main/AllEntry";
import ApprovedEntry from "../pages/main/ApprovedEntry";
import PendingEntry from "../pages/main/PendingEntry";
import DashboardHome from "../pages/staff/DashboardHome";
import ForgotPassword from "../pages/auth/ForgotPassword";
import PasswordRecovery from "../pages/auth/PasswordRecovery";
// import { authState } from "../utils/atoms/authAtom";

export default function Router() {
  // const auth = useRecoilValue(authState);
  return (
    <div>
      <BrowserRouter>
        {/* {auth?.access ? (
          <Routes>
          </Routes> 
         ) : (  */}
           <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/recover-password" element={<PasswordRecovery />} />
            <Route path="/" element={<Main />}>
              <Route path="Dashboard" element={<DashBoard />} />
              <Route path="AddNewOne" element={<DataEntryOne />} />
              <Route path="AddNewTwo" element={<DataEntryTwo />} />
              <Route path="Entries/AllEntries" element={<AllEntry />} />
              <Route
                path="Entries/ApprovedEntries"
                element={<ApprovedEntry />}
              />
              <Route path="Entries/PendingEntries" element={<PendingEntry />} />
            </Route>
            <Route path="/staff" element={<Main />}>
              <Route path="Dashboard" element={<DashboardHome />} />
              <Route path="AddNewOne" element={<DataEntryOne />} />
              <Route path="AddNewTwo" element={<DataEntryTwo />} />
              <Route path="Entries/AllEntries" element={<AllEntry />} />
              <Route
                path="Entries/ApprovedEntries"
                element={<ApprovedEntry />}
              />
              <Route path="Entries/PendingEntries" element={<PendingEntry />} />
            </Route>
          </Routes>
        {/* )} */}
        {/* <Toaster /> */}
      </BrowserRouter>
    </div>
  );
}
