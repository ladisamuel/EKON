import React, { useState } from "react";
import LogoImg from "../../assets/Logo.png";
import { loginuserValidation } from "../../utils/validation/Validation";
// import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { loginUser } from "../../utils/api/api";
import { toast } from "react-toastify";
import { authState } from "../../utils/atoms/authAtom";
import { useRecoilState } from "recoil";
import { userState } from "../../utils/atoms/userAtom";
export default function Login() {
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setLoading(true);

    const data = {
      email: values.email,
      password: values.password
    };
    console.log(data);

    await loginUser(data)
      .then((res) => {
          console.log(res);
          console.log(res.data);
          console.log(res.data.payload);
          console.log(res.data.payload.token);    

          setAuth(res.data.payload);
          setUser(res.data.payload);
          if (res.data.payload.role.toLowerCase() === 'admin') {
            navigate('/Dashboard')
          } else if (res.data.payload.role.toUpperCase() === 'super admin') {
            navigate('/adminDashboard')
          }
          toast.success(" Login successful");
        })
      .catch((err) => {
        // console.log(err);

        if (err) {
          console.log(err);
        }
      });
    setLoading(false);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    values,
    errors,
    isValid,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    validateOnMount: true,
    initialValues: initialValues,
    validationSchema: loginuserValidation,
    onSubmit,
  });
  // console.log('');

  return (
    <>
      {/* general div */}
      <div className="relative w-[100%] p-10 grid grid-col-1 h-[100vh] lg:flex">
        {/* left */}
        <div className="hidden relative lg:w-[60%] lg:h-[90vh] rounded-3xl bg-gradient-to-b from-[#0070FF] to-[#021B79] lg:flex justify-center items-center overflow-hidden">
          <div className="absolute w-[638px] h-[638px] border border-[#4A3AFF] rounded-full -z-0 -bottom-40 left-32 translate-y-1/2 -translate-x-1/2 "></div>
          <div className="absolute w-[638px] h-[638px] border border-[#4A3AFF] rounded-full -z-0 -bottom-32 left-10 translate-y-1/2 -translate-x-1/2 "></div>

          <div className="">
            <div className="">
              <img src={LogoImg} className="w-[170px]" alt="" />
              <p className="text-white text-sm my-5">
                The Embassy of the Kingdom of Heaven (EKOH){" "}
              </p>

              <p className="bg-[#4A3AFF] w-full rounded-full py-1 text-center text-xs text-white">
                Search of the churches all around the Globe
              </p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=" lg:w-[40%] flex justify-center place-items-center">
          <div className=" ">
            <p className="font-bold text-2xl mb-2">Hello Again!</p>
            <p className="mb-12 font-semibold">Welcome Back</p>

            <form onSubmit={handleSubmit} action="">
              {/* <div className="flex border justify-start items-center h-[60px] gap-4 bg-white rounded-lg p-2 px-4">
                                <i className="pi pi-envelope p-3 bg-orange-50"></i>
                                <span className="p-float-lbel w-full">
                                    <InputText 
                                        id="user"
                                        name="user"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        size={""}
                                    />
                                    <label htmlFor="user">Email address</label>
                                </span>
                            </div>
                            {errors.user && touched.user && (
                                <p className="error">{errors.user}</p>
                            )} */}


              <div className="">
                <div className="relative flex items-center h-[60px] my-2 gap-4 bg-white rounded ">
                  <i className="absolute top-1/2 left-1 -translate-y-1/2 z-50 pi pi-envelope p-3 bg-blue50"></i>
                  <span className="p-float-label w-full">
                    <InputText
                      className="w-full pl-12 p-3 rounded shadow !bg-white"
                      id="email"
                      name="email"
                      placeholder="Enter Email Address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </span>
                </div>
                {errors.email && touched.email && (
                  <p className="error text-sm text-red-400">{errors.email}</p>
                )}
              </div>


              <div className="">
                <div className="relative flex items-center h-[60px] my-2 gap-4 bg-white rounded-lg p-">
                  <i className="absolute top-1/2 left-1 -translate-y-1/2 z-50 pi pi-lock p-3 bg-blue50"></i>
                  <span className="p-float-label w-full">
                    <InputText
                      className="w-full pl-12 p-3 rounded shadow !bg-white"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </span>
                </div>
                {errors.password && touched.password && (
                  <p className="error text-sm text-red-400">{errors.password}</p>
                )}
              </div>

              <div>
                {/* <input type="submit" onClick={()=>navigate('/dashboard')} value="Login" className=' text-white bg-[#4A3AFF] rounded py-2 text-center w-full block' /> */}
                <button
                  onClick={handleSubmit}
                  className=" text-white bg-[#4A3AFF] rounded py-2 text-center w-full block cursor-pointer"
                >
                  Login
                </button>
              </div>
              <div>
                <p
                  className="text-center my-3 text-xs font-bold w-full text-[#4A3AFF] "
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
