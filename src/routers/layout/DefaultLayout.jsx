import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../utils/atoms/authAtom";

export default function DefaultLayout() {
  const auth = useRecoilValue(authState);

  return (
    <div>
      {auth?.access ? (
        <Navigate to="/dashboard" />
      ) : (
        <Outlet />
      )}
    </div>
  );
}
