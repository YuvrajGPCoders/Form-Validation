import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import { signUpSchema } from "../Schema/Ind";

const initialValues = {
  Studentimage: " ",
  name: " ",
  Father: " ",
  Mother: " ",
  gender: " ",
  date: " ",
  levels: " ",
  dept: " ",
  telephone: " ",
};
const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
     
    });

  return (
    <>
      <form className="  form shadow-lg bg-white" onSubmit={handleSubmit}>
        <div className="headings">
          <marquee className=" mrqe" direction="right">
          
            GP CODERS
          </marquee>
          <h1> XYZ College / School</h1>
          <h2>Student registration Form</h2>
        </div>
        <div className=" ">
          <span className="stimg">
            <label for="Studentimage" className="">
              Student image :
            </label>
            <input
              className=""
              name="Studentimage"
              autoComplete="off"
              type="file"
            />
          </span>
          <br />
          <label for="name"> Student Name :</label>
          <input
            type="text"
            name="name"
            placeholder="full name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <marquee className=" mrqe" direction="right">
            {errors.name && touched.name ? (
              <p className="">{errors.name} </p>
            ) : null}
          </marquee>
          <br />
          <label for="Father"> Father's Name :</label>
          <input
            type="text"
            name="Father"
            placeholder="father's Full Name"
            autoComplete="off"
            value={values.Father}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <marquee className=" mrqe" direction="right">
            {" "}
            {errors.Father && touched.Father ? (
              <p className="">{errors.Father} </p>
            ) : null}
          </marquee>
          <br />
          <label for="Mother"> Mother's Name :</label>
          <input
            type="text"
            name="Mother"
            placeholder=" Mother's Full Name"
            autoComplete="off"
            value={values.Mother}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <marquee className=" mrqe" direction="right">
            {" "}
            {errors.Mother && touched.Mother ? (
              <p className="">{errors.Mother} </p>
            ) : null}
          </marquee>
          <br />
          <label for="gender" className="rdo"></label>
          Male <input type="radio" name="gender" />
          Female <input type="radio" name="gender" />
          other <input type="radio" name="gender" />
          <br />
          <label for="date"> Date of Birth </label>
          <input
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            required
          />
          <br />
          <label for="levels"> Level </label>
          <select>
            <option name="levels"> High school</option>
            <option name="levels"> College</option>
            <option name="levels"> Job</option>
          </select>
          <br />
          <label for="dept"> Department : </label>
          <select>
            <option name="dept">Electrical Engineering</option>
            <option name="dept"> other</option>
            <option name="dept"> other</option>
          </select>
          <br />
          <level for="telephone"> Tel/ Mobile : </level>
          <input
            type="tel"
            name="telephone"
            autoComplete="off"
            value={values.telephone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <marquee className=" mrqe" direction="right">
            
            {errors.telephone && touched.telephone ? (
              <p className="">{errors.telephone} </p>
            ) : null}
          </marquee>
        </div>
        <button type="submit" className="  submit shadow-lg bg-white">
          Submit
        </button>
        <marquee className=" mrqe" direction="right">
          
          Fill this form properly
        </marquee>
      </form>
    </>
  );
};

export default Form;
