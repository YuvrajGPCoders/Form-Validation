import * as Yup from "yup";
export const signUpSchema = Yup.object({
  name: Yup.string().min(4).max(10).required(" please enter your name"),
  Father: Yup.string().min(4).max(15).required(" please enter your name"),
  Mother: Yup.string().min(4).max(15).required(" please enter your name"),
  telephone: Yup.number().min(10).max(10).required("please enter your number"),
});
