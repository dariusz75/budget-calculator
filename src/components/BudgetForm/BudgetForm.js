import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./budget-form.css";

const initialValues = {
  id: "",
  transactionType: "",
  transactionName: "",
  amount: "",
  category: ""
};

const validationSchema = Yup.object({
  transactionType: Yup.string().required("Please select transaction type"),
  transactionName: Yup.string().required("Please provide transaction name"),
  amount: Yup.string().required("Please enter the amount"),
  category: Yup.string().required("Please select a category")
});

const categories = [
  { id: 1, name: "Please select", value: "" },
  { id: 2, name: "Bills", value: "bills" },
  { id: 3, name: "Car", value: "car" },
  { id: 4, name: "Food", value: "food" },
  { id: 5, name: "Children", value: "children" },
  { id: 6, name: "Education", value: "education" },
  { id: 7, name: "Basic Salary", value: "basicSalary" },
  { id: 8, name: "Extra Income", value: "extraIncome" }
];

const BudgetForm = ({ addItem }) => {
  const onSubmit = (values, onSubmitProps) => {
    console.log("Submited values are:", values);
    //console.log("onSubmitProps are", onSubmitProps);
    addItem(values);
    onSubmitProps.resetForm();
  };

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label style={{ display: "block" }}>Transaction type</label>
            <Field
              type="radio"
              id="income"
              name="transactionType"
              value="income"
            />
            <label htmlFor="income">Income</label>
            <Field
              type="radio"
              id="expense"
              name="transactionType"
              value="expense"
            />
            <label htmlFor="expense">Expense</label>
            <div className="error-message">
              <ErrorMessage name="transactionType" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Transaction name</label>
            <Field
              className="form-control"
              type="text"
              id="transactionName"
              name="transactionName"
            />
            <div className="error-message">
              <ErrorMessage name="transactionName" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Amount</label>
            <Field
              className="form-control"
              type="number"
              id="amount"
              name="amount"
              min="0"
            />
            <div className="error-message">
              <ErrorMessage name="amount" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Category</label>
            <Field
              className="form-control"
              as="select"
              id="category"
              name="category"
            >
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.value}>
                    {category.name}
                  </option>
                );
              })}
            </Field>
            <div className="error-message">
              <ErrorMessage name="category" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BudgetForm;
