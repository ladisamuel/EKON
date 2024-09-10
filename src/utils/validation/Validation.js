import * as yup from "yup";

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;



const loginuserValidation = yup.object().shape({
    user: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().required("Required"),
});



export {
    loginuserValidation,
};
