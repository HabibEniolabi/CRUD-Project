import * as Yup from "yup";

const passwordRules = /[!@#$%^&*(),.?":{}|<>]/;
export const basicSchema = Yup.object().shape({
  address: Yup.string().required("Filled is required"),
  suite: Yup.string().required("Filled is required"),
  city: Yup.string().required("Filled is required"),
  code: Yup.number()
    .positive()
    .integer()
    .required("Please enter your room code"),
  country: Yup.string().required("Filled is required"),
  email: Yup.string().required("Please enter a valid email"),
  password: Yup.string()
    .required("Filled is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      passwordRules,
      "Password must contain at least one special character"
    )
    .matches(/\d/, "Password must contain at least one number"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "password must match")
    .required("Filled is required"),
});
