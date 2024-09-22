import React, { useState } from "react";
import NewEntryImage from "../../components/NewEntryImage";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { userValidation } from "../../utils/validation/Validation";
import { Dropdown } from "primereact/dropdown";
import { toast } from "react-toastify";
import { registerUser } from "../../utils/api/api";
export default function AddUser() {
  const navigate = useNavigate();
  // fullName, phone, email, password, role

  const chk = () => {
    console.log("show done");
  };

  const [selectedRole, setSelectedRole] = useState(null);
  const role = [
    { name: "admin", code: "admin" },
    { name: "super admin", code: "super admin" },
  ];

  const onSubmit = async (values) => {
    // setLoading(true);

    const data = {
      role: selectedRole.name,
      ...values,
    };

    console.log(data, "data sent");

    await registerUser(data).then((res) => {
      //     setAuth(res.data);
      //     setUser(res.data.user);

      toast.success("User Added successful");
      console.log(res);

      console.log("User add successfully");
      navigate("/user/alluser");
    });
    //   .catch((err) => {
    //     // console.log(err);

    //     if (err) {
    //       console.log(err);
    //     }
    //   });
    // setLoading(false);
  };

  const initialValues = {
    fullName: "",
    phone: "",
    email: "",
    password: "",
    // role: "",
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
    validationSchema: userValidation,
    onSubmit,
  });

  return (
    <>
      <div className="w-[100%] grid grid-rows-2 lg:grid-cols-[2.5fr,2fr] gap-10 p-10">
        {/* left */}
        <div className="order-2 lg:order-1 mb-5">
          <p className="text-xl font-bold">Add New User</p>
          <p className="text-sm text-gray-400">
            The Embassy Of The Kingdom Of Heaven (EKOH)
          </p>

          {/* form */}
          <form onSubmit={handleSubmit} className=" ">
            <div className="">
              <div className="items-center h-[60px] my-2 gap-4 bg-white rounded-lg p-">
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-3 rounded-lg shadow !bg-white"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.fullName && touched.fullName && (
                <p className="error mt-2 text-sm text-red-400">
                  {errors.fullName}
                </p>
              )}
            </div>
            <div className="">
              <div className="items-center h-[60px] my-2 gap-4 bg-white rounded-lg p-">
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-3 rounded-lg shadow !bg-white"
                    id="phone"
                    // type="number"
                    name="phone"
                    placeholder="Enter phone number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.phone && touched.phone && (
                <p className="error mt-2 text-sm text-red-400">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="">
              <div className="items-center h-[60px] my-2 gap-4 bg-white rounded-lg p-">
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-3 rounded-lg shadow !bg-white"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.email && touched.email && (
                <p className="error mt-2 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="">
              <div className="items-center h-[60px] my-2 gap-4 bg-white rounded-lg p-">
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

                  {/* <Password
                  className=""
                  id="password"
                  name="password"
                  toggleMask
                  feedback={false}
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                /> */}
                </span>
              </div>
              {errors.password && touched.password && (
                <p className="error mt-2 text-sm text-red-400">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="">
              <div className="items-center h-[60px] my-2 gap-4 bg-white rounded-lg p-">
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
                <p className="error mt-2 text-sm text-red-400">
                  {errors.password2}
                </p>
              )}
            </div>

            <div className="my-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Domination* </p>
                <span className="p-float-label w-full">
                  <Dropdown
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.value)}
                    options={role}
                    optionLabel="name"
                    required
                    placeholder="Select a Denomination"
                    className="w-full shadow"
                  />
                </span>
              </div>
              {/* {errors.nameOfGO && touched.nameOfGO && (
                <p className="error text-sm text-red-400">{errors.nameOfGO}</p>
              )} */}
            </div>

            <div className="">
              <button
                type="submit"
                className=" text-white bg-[#4A3AFF] rounded py-2 text-center w-full block cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* right */}
      </div>
    </>
  );
}
