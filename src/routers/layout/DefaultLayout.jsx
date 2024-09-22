import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../utils/atoms/authAtom";

export default function DefaultLayout() {
  const auth = useRecoilValue(authState);

  console.log('from default layout', auth);

  return (
    <div>
      {auth?.token ? (
        <Navigate to="/Dashboard" />
      ) : (
        <Outlet />
      )}
    </div>
  );
}
