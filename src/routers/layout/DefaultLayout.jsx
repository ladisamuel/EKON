import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../utils/atoms/authAtom";
import { userState } from "../../utils/atoms/userAtom";

export default function DefaultLayout() {
  const auth = useRecoilValue(authState);
  const user = useRecoilValue(userState)

  console.log('from default layout', auth);
  
  return (
    <div>
      {auth?.token && user.role === 'super admin' ? (

        <Navigate to="/adminDashboard" />
      ) :
      auth?.token && user.role === 'admin' ? 
      (
        <Navigate to="/Dashboard" />

      ) :
      (
        <Outlet />
      )}
    </div>
  );
}

