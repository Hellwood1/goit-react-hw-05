import css from './SearchForm.module.css'
import { Field, Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";

export default function SearchForm({ onSearch }) {
  const [params] = useSearchParams();

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ query: params.get("query") ?? "" }}
        onSubmit={(val) => {
          onSearch(val.query);
        }}
      >
        <Form className={css.form}>
          <Field name="query"
            className={css.input}
            placeholder="Search movies"/>
          <button className={css.button} type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}