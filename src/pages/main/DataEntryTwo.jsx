import React from "react";
import globe from "../../assets/globe.png";
import NewEntryImage from "../../components/NewEntryImage";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { dataValidation2 } from "../../utils/validation/Validation";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataState } from "../../utils/atoms/dataAtom";
import { addData } from "../../utils/api/data";
import { toast } from "react-toastify";

export default function DataEntryTwo() {
  const navigate = useNavigate();
  const dataEntry = useRecoilValue(dataState);
  const [dataEntryValue, setDataEntryValue] = useRecoilState(dataState);

  //   const chk = () => {
  //     console.log(dataEntry);

  //   }

  const onSubmit = async (values) => {
    const data = {
      ...dataEntry,
      continent: values.continent,
      country: values.country,
      state: values.state,
      city: values.city,
      street: values.street,
      postalCode: values.postalCode,
    };
    console.log(data);

    // console.log(values);

    await addData(data)
      .then((res) => {
        console.log(res);
        toast.success("Data added successfully");
        setDataEntryValue("");
        console.log("Add data Completed");
        navigate("/AddNewOne");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const initialValues = {
    continent: "",
    country: "",
    state: "",
    city: "",
    street: "",
    postalCode: "",
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
    validationSchema: dataValidation2,
    onSubmit,
  });

  return (
    <>
      <div className="w-[100%] grid grid-rows-2 lg:grid-cols-[2.5fr,2fr] gap-10 p-10">
        {/* phase1 */}
        <div className="order-2 lg:order-1 mb-5">
          <p className="text-xl font-bold">New Data Entry</p>
          <p className="text-sm text-gray-400">
            The Embassy Of The Kingdom Of Heaven (EKOH)
          </p>

          {/* form */}
          <form onSubmit={handleSubmit} className=" ">
            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Enter continent*</p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="continent"
                    name="continent"
                    placeholder="Continents"
                    value={values.continent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.continent && touched.continent && (
                <p className="error text-sm text-red-400">{errors.continent}</p>
              )}
            </div>

            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Enter Country*</p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="country"
                    name="country"
                    placeholder="Country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.country && touched.country && (
                <p className="error text-sm text-red-400">{errors.country}</p>
              )}
            </div>

            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">
                  Which State is the church located in?*
                </p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="state"
                    name="state"
                    placeholder="State"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.state && touched.state && (
                <p className="error text-sm text-red-400">{errors.state}</p>
              )}
            </div>

            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Which City is the church located in?*</p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.city && touched.city && (
                <p className="error text-sm text-red-400">{errors.city}</p>
              )}
            </div>

            <div className="mt-5">
              <div className=" items-center  my-2 gap-4 bg-white rounded ">
                <p className="text-sm">
                  Provide the exact address of the church (local
                  assembly/branch)*
                </p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="street"
                    name="street"
                    placeholder="Street"
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.street && touched.street && (
                <p className="error text-sm text-red-400">{errors.street}</p>
              )}
            </div>

            <div className="mt-5">
              <div className=" items-center  my-2 gap-4 bg-white rounded ">
                <p className="text-sm">
                  Provide the exact address of the church (local
                  assembly/branch)*
                </p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="street"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={values.postalCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.postalCode && touched.postalCode && (
                <p className="error text-sm text-red-400">
                  {errors.postalCode}
                </p>
              )}
            </div>

            <div className="flex gap-1">
              <p
                className="w-full text-center bg-white text-[#383838] border border-[#383838] rounded-lg py-1 px-3 cursor-pointer"
                onClick={() => navigate("/AddNewOne")}
              >
                Previous
              </p>
              <button
                type="submit"
                className="w-full bg-[#4A3AFF] text-white border rounded-lg py-1 px-3 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* right */}
        {/* <div className="relative bg-[#0B0914] rounded-3xl overflow-hidden text-white p-10 h-[500px] max-w-[400px] ">
                    <div className="">
                        <p className='text-sm'>Create a</p>
                        <p className='text-2xl font-bold my-1'>New Church Data.</p>
                        <p className='text-xs text-gray-400'>The Embassy of the Kingdom of Heaven (EKOH)</p>
                    </div>
                    <div className="text-xs text-gray-400 mt-5">
                        <span className='flex items-center justify-start gap-5'>
                            <p className='p-3 py-2 bg-blue-500 rounded-full'>1</p>
                            <p>Basic church info</p>
                        </span>
                        <div className='h-[20px] border-2 border-[#4A3AFF] mx-3 w-fit my-3'>

                        </div>
                        <span className='flex items-center justify-start gap-5'>
                            <p className='p-3 py-2 bg-blue-500 rounded-full'>2</p>
                            <p>More Church Info </p>
                        </span>
                    </div>
                    <img src={globe} className='absolute bottom-0 right-0 w-[300px]' alt="" />
                </div> */}
        <NewEntryImage />
      </div>
    </>
  );
}
