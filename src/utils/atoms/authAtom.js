import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: sessionStorage,
});

export const authState = atom({
  key: "auth",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const attachToken = selector({
  key: "useToken",
  get: ({ get }) => {
    const authData = get(authState);
    
    if (authData && authData.token) {
      console.log(`From the Atom ---------${authData}`);

      return axios.interceptors.request.use(function (config) {
        const token = authData.token;
        const decodedToken = jwtDecode(token);
        const dateNow = new Date();
        // console.log(decodedToken.exp);

        if (decodedToken.exp * 1000 < dateNow.getTime()) {
          setAuth(null);
        }
        // console.log(config.headers);
        
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
    }
    return null;
  },
});
