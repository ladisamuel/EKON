import { Navigate, Outlet } from "react-router-dom";
import { authState } from "../../utils/atoms/authAtom";
import { useRecoilValue } from "recoil";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useState } from "react";

export default function LoggedInLayout() {
  const auth = useRecoilValue(authState);

  const [displaySide, setDisplaySide] = useState(false)

  const handleSideBar = () => {
      setDisplaySide(!displaySide)
  }
  return (
    <div>
      {auth ?(
        
        <div className=''>

            <div className='relative lg:grid grid-cols-[200px,1fr] '>
                <div className={`${displaySide ? 'fixed': 'hidden'} shadow-2xl lg:shadow-none w-[80%] h-[90vh] lg:w-[200px] lg:h-[100vh] bg-white z-50 lg:block`}>
                    <Sidebar />
                </div>
                <div className=" ">
                    <div className="top-0 right-0 fixed w-full lg:w-[calc(100%-200px)] z-50">
                        <div className="relative border-b items-center justify-between flex bg-white ">
                            <Topbar />
                            <div className="lg:hidden">
                                {displaySide ?
                                    <i onClick={handleSideBar} className="absolute top-1/2 -translate-y-1/2 right-5 text-black text-2xl pi pi-times "></i>
                                    :
                                    <i onClick={handleSideBar} className="absolute top-1/2 -translate-y-1/2 right-5 text-black text-4xl pi pi-bars "></i>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="mt-[10vh]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
      ) : (
        
        <div className="">
          <Navigate to="/" />
        </div>
        

        
      )}
    </div>
  );
}
