import React, { useState } from "react";
import LogoImg from "../../assets/Logo.png";
import { recoverpassword } from "../../utils/validation/Validation";
// import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
export default function PasswordRecovery() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setLoading(true);

    const data = {
      password: values.password,
      password2: values.password2,
    };
    console.log(data);

    await loginUser(data)
      .then((res) => {
        setAuth(res.data);
        setUser(res.data.user);
        toast.success(" Login successful");
        console.log(res);
        setLoading(false);
        console.log(res);
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
    password: "",
    password2: "",
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
    validationSchema: recoverpassword,
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
            <p className="mb-12 font-semibold">Change your password here</p>
            <form onSubmit={handleSubmit} action="">


              <div className="">
                <div className="flex items-center h-[60px] my-2 gap-4 bg-white rounded-lg p-">
                  <span className="p-float-label w-full">
                    <InputText
                      className="w-full p-3 rounded-lg shadow !bg-white"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </span>
                </div>
                {errors.password && touched.password && (
                  <p className="error text-sm text-red-400">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="">
                <div className="flex items-center h-[60px] my-2 gap-4 bg-white rounded-lg p-">
                  <span className="p-float-label w-full">
                    <InputText
                      className="w-full p-3 rounded-lg shadow !bg-white"
                      id="password2"
                      type="password"
                      name="password2"
                      placeholder="Confirm Password"
                      value={values.password2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </span>
                </div>
                {errors.password2 && touched.password2 && (
                  <p className="error text-sm text-red-400">
                    {errors.password2}
                  </p>
                )}
              </div>
              {/* <div className="relative mb-5">
              <i className="absolute top-1/2 left-1 -translate-y-1/2 pi pi-lock p-3 bg-blue50"></i>
              <input
                type="password"
                className="pl-12 p-3 px-4 border rounded "
                placeholder="Password"
              />
            </div>
            <div className="relative mb-5">
              <i className="absolute top-1/2 left-1 -translate-y-1/2 pi pi-lock p-3 bg-blue50"></i>
              <input
                type="password"
                className="pl-12 p-3 px-4 border rounded "
                placeholder="Password2"
              />
            </div> */}
              <div>
                {/* <input type="submit" onClick={()=>navigate('/dashboard')} value="Login" className=' text-white bg-[#4A3AFF] rounded py-2 text-center w-full block' /> */}
                <div
                  onClick={handleSubmit}
                  className=" text-white bg-[#4A3AFF] rounded py-2 text-center w-full block cursor-pointer"
                >
                  Change password
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
