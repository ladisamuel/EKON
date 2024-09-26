import React, { useEffect, useState } from "react";
import NewEntryImage from "../../components/NewEntryImage";
import { useNavigate, useParams } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useFormik } from "formik";
import { getSingleData } from "../../utils/api/data";
import { Checkbox } from "primereact/checkbox";
import { useRecoilValue } from "recoil";
import { userState } from "../../utils/atoms/userAtom";

export default function DataPage() {
  const user = useRecoilValue(userState)
  const navigate = useNavigate();
  const id = useParams();

  const [checked, setChecked] = useState(false);

  const [selectedDenomination, setSelectedDenomination] = useState(null);
  const [edit, setEdit] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const denomination = [
    { name: "Catholic", code: "Catholic" },
    { name: "Pentecostal", code: "Pentecostal" },
    { name: "Baptist", code: "Baptist" },
    { name: "Orthodox", code: "Orthodox" },
    { name: "Presbyterian", code: "Presbyterian" },
  ];

  const getData = async () => {
    
    await getSingleData(id.id).then((res) => {
      setChecked(res.data.payload.isApproved)
      setInitialValues(res.data.payload)
    });


    
  };

  const onSubmit = async (values) => {
    const data = {
      ...values,
      isApproved: checked,
      id: id.id     // id from useParams
    };
    console.log(data); // to check data before submitting

    await addData(data)
      .then((res) => {
        toast.success("Data edited successfully");
        navigate(`/Entries/single/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
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
    validationSchema: "",
    onSubmit,
  });

  useEffect(() => {
    getData();
    
      console.log(initialValues, 'initial values'); // 
    }, []);

  return (
    <>
      <div className="w-[100%] grid grid-rows-2 lg:grid-cols-[2.5fr,2fr] gap-10 p-10">
        {/* left */}
        <div className="mb-5">
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
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
                    id="yearOfEstablishment"
                    name="yearOfEstablishment"
                    placeholder={values.yearOfEstablishment}
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
                <p className="text-sm">Church Website URL</p>
                <span className="p-float-label w-full">
                  <InputText
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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
                <p className="error text-sm text-red-400">{errors.churchURL}</p>
              )}
            </div>

            <div className="my-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">
                  Social Media Pages (Facebook,Instagram and X)
                </p>
                <span className="p-float-label w-full">
                  <InputText
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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

            {/* <form onSubmit={handleSubmit} className=" "> */}
            <div className="mt-5">
              <div className=" items-center h-[60px] my-2 gap-4 bg-white rounded ">
                <p className="text-sm">Enter continent*</p>
                <span className="p-float-label w-full">
                  <InputText
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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
                    disabled={!edit}
                    className={`w-full  p-2 rounded shadow !bg-white ${edit? '':'cursor-not-allowed'}`}
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

            <div className="">
              
        <div className="card flex items-center gap-10 my-5 justify-content-center">
          
          Approved
            <Checkbox disabled={!edit} className="border" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
            </div>

            {user.role.toLowerCase() === 'super admin' ?
            (
            <div className="flex gap-1">
              {edit ? (
                <button
                  type="submit"
                  className="w-full bg-[#4A3AFF] text-white border rounded-lg py-1 px-3 cursor-pointer"
                >
                  Submit
                </button>
              ) : (
                <p
                onClick={()=>setEdit(true)}
                  className="w-fit bg-[#4A3AFF] text-white border rounded-lg py-1 px-3 cursor-pointer"
                >
                  Click here to edit data
                </p>
              )}
            </div>
            )
             : ('')}
            {/* </form> */}
          </form>
        </div>
      </div>
    </>
  );
}
