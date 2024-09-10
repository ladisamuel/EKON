import { Navigate, Outlet } from "react-router-dom";
import { authState } from "../../utils/atoms/authAtom";
import { useRecoilValue } from "recoil";
import Sidebar from "../../pages/app/Sidebar";
import MobileNav from "../../pages/app/MobileNav";
import Topbar from "../../pages/app/Topbar";

export default function LoggedInLayout() {
  const auth = useRecoilValue(authState);

  return (
    <div>
      {auth?.access ? (
        
        <div className="">
          <div className="lg:flex mb-28 lg:mb-0 items-start justify-start  h-full bg-gray-300">
            <div className="hidden lg:block lg:w-[17%] h-[100vh]">
              <Sidebar />
            </div>
            <MobileNav />
            <div className="ml-auto h-full lg:h-[100vh] w-full lg:w-[83%]  ">
                <div className="lg:fixed top-0 w-full lg:w-[83%] h-[10vh] ">
                  <Topbar />
                </div>
                <div className="lg:fixed lg:top-[10%] border-red-500 w-full lg:w-[83%] h-full lg:h-[90vh]">
                  {/* <Dashboard /> */}
                  <Outlet />
                </div>
            </div>
            {/* show */}
          </div>
        </div>
      ) : (
        
        <div className="">
          <Navigate to="/sign-in" />
        </div>
        

        
      )}
    </div>
  );
}
