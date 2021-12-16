import React from "react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as yup from 'yup';
import ValidationError from "./ValidationError";

const Forms = () => {

  const [entry, setEntry] = useState("");

  const Validate = yup.object({
    name: yup.string().required("Name is Required!"),
    phone: yup.number().min(100000000, "Not a valid Number!").max(9999999999, "Not more than 10 Digit").required("Phone is Required!"),
    password: yup.string().matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/, "Must contain 8 character one letter ,one uppercase,one lowercase, one number").required("Password is compulsory!"),
    gender: yup.string().required("Gender is Required!"),
    date: yup.date().required("Date is Required!"),
    income: yup.string().required("Income is Required!"),
  });

  return (
    <>
      <h1 style={{ textAlign: "center", color:'red' }}>Formik: Better FormHandling And validation </h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{ width: '60%' }}>
          <Formik
            validationSchema={Validate}
            initialValues={{
              name: "",
              phone: "",
              password: "",
              gender: "",
              date: "",
              income: "",
            }}

            onSubmit={(values) => { setEntry(values) }} >

            {({ values }) => (
              <Form className="uses">
                <h1>Forms</h1>
                <hr />
                <label><h4>Name: </h4></label><br />
                <Field name="name" type="text" />
                <br />
                <ValidationError name="name" />
                <br />

                <label><h4>Phone: </h4></label><br />
                <Field name="phone" type="number" />
                <br />
                <ValidationError name="phone" /> <br />

                <label > <h4>Password:</h4></label><br />
                <Field name="password" type="password" />
                <br />  <ValidationError name="password" /> <br />

                <label> <h4>Gender:</h4> </label>
                <br /> <br />
                <label> <h5>Male:</h5> </label>
                <Field name="gender" value="male" type="radio" />
                <label><h5>Female: </h5> </label>
                <Field name="gender" value="female" type="radio" />
                <br /> <ValidationError name="gender" />  <br />

                <label> <h4>Date:</h4> </label><br />
                <Field name="date" type="date" />
                <br />  <ValidationError name="date" /> <br />

                <label><h4>Income: </h4> </label><br />
                <Field name="income" as="select">
                  <option value="0">rs 0</option>
                  <option value="1000">rs 1000</option>
                  <option value="10000">rs 10000</option>
                </Field>

                <br /> <ValidationError name="income" />  <br />
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="uses" style={{ width: '30%',}}>
          <h1>Data collect</h1>
          <hr />
          <h3> Name: </h3>
          <p> {entry.name}</p><br />
          
          <h3> phone:</h3>
          <p> {entry.phone}</p><br />
          
          <h3>Password:</h3>
          <p>{entry.password}</p><br />
          
          <h3>Gender:</h3>
          <p>{entry.gender}</p><br />
          
          <h3>Date:</h3>
          <p>{entry.date}</p><br />
          
          <h3> Income:</h3>
          <p>{entry.income}</p>
        </div>
      </div>

    </>
  );
};

export default Forms;