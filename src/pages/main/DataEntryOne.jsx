import React, { useState } from "react";
import NewEntryImage from "../../components/NewEntryImage";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { dataValidation1 } from "../../utils/validation/Validation";
import { Dropdown } from "primereact/dropdown";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { dataState } from "../../utils/atoms/dataAtom";



export default function DataEntryOne() {
  const [atomData, setAtomData] = useRecoilState(dataState);
  const navigate = useNavigate();
  const [selectedDenomination, setSelectedDenomination] = useState(null);
  const denomination = [
    { name: "Catholic", code: "Catholic" },
    { name: "Pentecostal", code: "Pentecostal" },
    { name: "Baptist", code: "Baptist" },
    { name: "Orthodox", code: "Orthodox" },
    { name: "Presbyterian", code: "Presbyterian" },
  ];


  const onSubmit = async (values) => {
    const data = {
        churchURL: values.churchURL,
        nameOfChurch: values.nameOfChurch,
        nameOfGO: values.nameOfGO,
        socialMediaPage: values.socialMediaPage,
        yearOfEstablishment: values.yearOfEstablishment,
        denomination: selectedDenomination.name

    };
    console.log(data);
    setAtomData(data)
    console.log('done setting');

    navigate('/AddNewTwo')
    console.log('no route');
    
    // await addData(data).then((res)=>{
    //     console.log(res);
    //     toast.success('D')
        

    // }).catch((err)=>{
    //     console.log(err);
        
    // })
  };

  const initialValues = {
    nameOfGO: "",
    nameOfChurch: "",
    yearOfEstablishment: "",
    churchURL: "",
    socialMediaPage: "",
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
    validationSchema: dataValidation1,
    onSubmit,
  });
  // console.log('');

  return (
    <>
      <div className="w-[100%] grid grid-rows-2 lg:grid-cols-[2.5fr,2fr] gap-10 p-10">
        {/* left */}
        <div className="order-2 lg:order-1 mb-5">
          <p className="text-xl font-bold">New Data Entry</p>
          <p className="text-sm text-gray-400">
            The Embassy Of The Kingdom Of Heaven (EKOH)
          </p>

          {/* form */}
          <form onSubmit={handleSubmit} className=" ">
            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Name of church (Headquarter)*</p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="nameOfChurch"
                    name="nameOfChurch"
                    placeholder="Enter church name"
                    value={values.nameOfChurch}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.nameOfChurch && touched.nameOfChurch && (
                <p className="error text-sm text-red-400">
                  {errors.nameOfChurch}
                </p>
              )}
            </div>

            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Name of general overseer or founder*</p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="nameOfGO"
                    name="nameOfGO"
                    placeholder="Founder name"
                    value={values.nameOfGO}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.nameOfGO && touched.nameOfGO && (
                <p className="error text-sm text-red-400">{errors.nameOfGO}</p>
              )}
            </div>

            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">What year was this church founded?</p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="yearOfEstablishment"
                    name="yearOfEstablishment"
                    placeholder="Year Founded"
                    value={values.yearOfEstablishment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.yearOfEstablishment && touched.yearOfEstablishment && (
                <p className="error text-sm text-red-400">
                  {errors.yearOfEstablishment}
                </p>
              )}
            </div>

            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Domination*  </p>
                <span className="p-float-label w-full">
                  <Dropdown
                    value={selectedDenomination}
                    onChange={(e) => setSelectedDenomination(e.value)}
                    options={denomination}
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


            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Church Website URL</p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="churchURL"
                    name="churchURL"
                    placeholder="Church URL"
                    value={values.churchURL}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.churchURL && touched.churchURL && (
                <p className="error text-sm text-red-400">
                  {errors.churchURL}
                </p>
              )}
            </div>

            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Social Media Pages (Facebook,Instagram and X)</p>
                <span className="p-float-label w-full">
                  <InputText
                    className="w-full p-2 rounded shadow !bg-white"
                    id="socialMediaPage"
                    name="socialMediaPage"
                    placeholder="Social Media"
                    value={values.socialMediaPage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </span>
              </div>
              {errors.socialMediaPage && touched.socialMediaPage && (
                <p className="error text-sm text-red-400">
                  {errors.socialMediaPage}
                </p>
              )}
            </div>


            <div className="">
              <button
                type="submit"
                className="w-full bg-[blue] text-white border rounded-lg text-xs py-2 px-3 cursor-pointer"
                value=""
              >Next</button>
            </div>
          </form>
        </div>
        {/* right */}
        <NewEntryImage />
      </div>
    </>
  );
}
