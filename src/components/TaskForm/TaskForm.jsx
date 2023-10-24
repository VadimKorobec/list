import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from 'react-bootstrap/Button';

import css from "./TaskForm.module.css";



let schema = yup.object().shape({
  title: yup.string().required(),
  desc: yup.string().required(),
});

const initialValues = {
  title: "",
  desc: "",
};

export const TaskForm = ({ onSubmit }) => {

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="title"
            placeholder="Enter task title..."
          />
          <ErrorMessage name="title" component="div" />
          <Field
            className={css.field}
            type="text"
            name="desc"
            placeholder="Enter task description..."
          />
          <ErrorMessage name="desc" component="div" />
          <Button variant="primary" type="submit">add Task</Button>        </Form>
      </Formik>
    </>
  );
};
