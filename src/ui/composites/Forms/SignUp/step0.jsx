import { Field, ErrorMessage } from "formik";
import Button from "../../../elements/Button";
import { FormikInput } from "../../../elements/Input";
import Section from "../../../elements/Section";
import Type from "../../../elements/Type";

const Step0 = ({ handleKeyDown, status }) => {
  return (
    <div className="isaform">
      <Section space={4}>
        <div className="mb-11">
          <Type variant="heading">Let's start by creating your account.</Type>
        </div>
      </Section>
      <Section space={4}>
        <Field
          type="text"
          name="name"
          label="Name"
          placeholder="Name"
          component={FormikInput}
          onKeyDown={handleKeyDown}
          // onChange={handleInputChange} ?? Is this needed?
        ></Field>
        <div className="mt-1">
          <ErrorMessage name="name">{(msg) => <Type variant="error">You will need to enter your name before you can sign up. </Type>}</ErrorMessage>
        </div>
      </Section>
      <Section space={4}>
        <Field
          type="text"
          name="email"
          placeholder="you@enjoytony.com"
          component={FormikInput}
          label="Email"
          onKeyDown={handleKeyDown}
          // InputProps={{
          //   onKeyUp: (e) => {
          //     onInputChange(e);
          //   },
          // }}
        ></Field>
        <div className="mt-1">
          <ErrorMessage name="email">{(msg) => <Type variant="error">{msg}</Type>}</ErrorMessage>
        </div>
      </Section>
      <Section space={4}>
        <Field name="password" type="password" placeholder="Make sure it is secure" component={FormikInput} label="Password" onKeyDown={handleKeyDown}></Field>
        <div className="mt-1">
          <ErrorMessage name="password">{(msg) => <Type variant="error">{msg}</Type>}</ErrorMessage>
        </div>
      </Section>
      {/* <Section>
        <div>
          <Field fullWidth name="confirmpassword" placeholder="Copy and paste from your brain" component={FormikInput} label="Confirm password"></Field>
        </div>
      </Section> */}
      <Section>
        <div className="ml-2 flex items-center">
          <Field className="mr-2 rounded border-gray-300" id="terms-n-privacy" name="terms" type="checkbox" />
          <label htmlFor="terms" className="ml-2 block text-sm text-blue-900">
            <span>By clicking join you agree to enjoythevi’s </span>
            <a href="/help/privacy" className="text-blue-600" target="_blank">
              Privacy
            </a>
            <span> + </span>

            <a href="/help/terms" className="text-blue-600" target="_blank">
              Terms and Conditions
            </a>
            <span>.</span>
          </label>
        </div>
        <div className="mt-1">
          <ErrorMessage name="terms">{(msg) => <Type variant="error">{msg}</Type>}</ErrorMessage>
        </div>
      </Section>
      <Section space={4}>
        <div>
          <Button variant="primary" type="submit" fullWidth text="Create account" status={status} />
        </div>
        <div className="flex mt-4 justify-center">
          <div>
            <a href="/club">Learn more</a>
          </div>
        </div>
      </Section>
    </div>
  );
  //  function handleInputChange(e) {
  //     if (e.target.name === "name") setName(e.target.value);
  //     if (e.target.name === "email") setEmail(e.target.value);
  //     if (e.target.name === "password") setPassword(e.target.value);
  //     // const element = document.getElementById(e.target.id);
  //     // if (e.target.value) element.classList.remove("is-danger");
  //     // else element.className += " is-danger";
  //   }
};

export default Step0;
