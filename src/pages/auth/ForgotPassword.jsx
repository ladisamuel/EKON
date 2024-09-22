import React, { useState } from "react";
import LogoImg from "../../assets/Logo.png";
import { forgotpassword } from "../../utils/validation/Validation";
// import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const onSubmit = async (values) => {
    setLoading(true);

    const data = {
      email: values.email
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
    email: "",
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
    validationSchema: forgotpassword,
    onSubmit,
  });

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
            <p className="font-bold text-2xl mb-2">Ooops!</p>
            <p className="mb-12 font-semibold">
              Huh, You forgot your password?
            </p>

            <form onSubmit={handleSubmit} action="">
              
              <div className="">
                <div className="flex items-center h-[60px] my-2 gap-4 bg-white rounded-lg p-">
                  <span className="p-float-label w-full">
                    <InputText
                      className="w-full p-3 rounded-lg shadow !bg-white"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </span>
                </div>
                {errors.email && touched.email && (
                  <p className="error text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <div
                  onClick={handleSubmit}
                  className=" text-white bg-[#4A3AFF] rounded py-2 text-center w-full block cursor-pointer"
                >
                  Submit
                </div>
              </div>
              <div className="text-center my-3 text-xs text-[#4A3AFF]">
                <p>Proceed to your email after you submit</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
