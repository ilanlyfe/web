import { FC } from "react";
import Type from "../../../elements/Type";
import { Formik, Form, FormikConfig, FormikValues } from "formik";
import { object, string, bool } from "yup";
import Input from "../../../elements/Input";

interface ExperienceBarProps {
  currentUser?: any;
}
const ExperienceBar: FC<ExperienceBarProps> = ({ currentUser }) => {
  return (
    <div className="flex items-center justify-center w-full max-w-5xl h-16 shadow-md bg-white rounded-xl m-auto">
      <Formik
        initialValues={{
          place: "",
          guests: 1,
          checkIn: "",
          checkOut: "",
          // confirmpassword: "",
        }}
        onSubmit={async (values) => {
          console.log("values from formik...", values);
        }}
        // onSubmit={async (values, helpers) => {
        // const { name, email, password } = values;
        // if (handleSignUp !== undefined && step === 0) {
        /**TODO: Handle error messages before calling the sign
           * up function
           * i.e.: if (!errors.cognito) {...
           *  // const error = Validate(e, this.state);
              // if (errors) {
              //   setErrors({ ...errors });
              //   return errors;
              // }
           * */
        //     clearErrorState();
        //     setStatus("processing");
        //     try {
        //       const res = await handleSignUp(name, email, password);

        //       if (res.userSub) {
        //         setStep(1);
        //         localStorage.signUpStep = 1;
        //       } else {
        //         console.log(res);
        //         setStatus("ready");
        //       }
        //     } catch (error) {
        //       setStatus("ready");
        //     }
        //   } else {
        //     console.log("Looks like the handleSignUp function is either undefined or you are not currently on step 0 in the sign up flow.");
        //   }
        // }}
      ></Formik>
      <div className="flex flex-row">
        <Input variant="dropdown" className={"input"} onChange={console.log} placeholder="Start date" />
        <Input variant="dropdown" className={"input"} onChange={console.log} placeholder="Start date" />
        <Input variant="dropdown" className={"input"} onChange={console.log} placeholder="Start date" />
      </div>
      
    </div>
  );
};

export default ExperienceBar;
