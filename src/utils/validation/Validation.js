import * as yup from "yup";

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;



const loginuserValidation = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().required("Required"),
});

const forgotpassword = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
});

const recoverpassword = yup.object().shape({
    password: yup
      .string()
      .min(5)
      .max(25)
      .matches(passwordRule, { message: "Please create a stronger password" })
      .required("Password is Required"),
    password2: yup
      .string()
      .oneOf([yup.ref("password")], "Password fields must match")
      .required("Required"),
});


  // fullName, phone, email, password, role

const userValidation = yup.object().shape({
    fullName: yup.string().required("Name is Required"),
    // role: yup.string().required("Role is Required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is Required"),
    password: yup
      .string()
      .min(5)
      .max(25)
      .matches(passwordRule, { message: "Please create a stronger password" })
      .required("Password is Required"),
    password2: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Required"),
    phone: yup.string().required("Phone Number is Required"),
  });


  const dataValidation1 = yup.object().shape({
    nameOfGO: yup.string().required("Name of GO is Required"),
    nameOfChurch: yup.string().required("Church name is Required"),
    yearOfEstablishment: yup.string(),
    churchURL: yup.string().required("Church URL is Required"),
    socialMediaPage: yup.string().required("Social media is Required"),
  });
  
  const dataValidation2 = yup.object().shape({
    continent: yup.string().required("Continent is Required"),
    country: yup.string().required("Country name is Required"),
    state: yup.string().required("Country state is Required"),
    city: yup.string().required("City is Required"),
    street: yup.string().required("Street is Required"),
    postalCode: yup.string().required("PostalCode is Required"),
  });
   


export {
    loginuserValidation,
    forgotpassword,
    recoverpassword,
    userValidation,
    dataValidation1,
    dataValidation2,
};
