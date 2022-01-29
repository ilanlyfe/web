import { Children, useState, FC, useEffect, useContext } from "react";
import { handleSignUp } from "../../../../hooks/AWS";
import { GlobalContext } from "../../../../context/GlobalContext";
import { Formik, Form, FormikConfig, FormikValues } from "formik";
import { object, string, bool } from "yup";
import Step0 from "./step0";
import Step2 from "./step1";
import Step3 from "./step2";

interface FormikStepProps {
  label: string;
}
interface Helpers {
  step: number;
  awsSignUp: (values: FormikValues) => void;
}
interface FormikInitialValues {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  terms: boolean;
}
interface FormikSteperProps extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  helpers?: Helpers;
  validationSchema: unknown;
  initialValues: Partial<FormikInitialValues>;
  step: number;
  onSubmit: (values: any, helpers: any) => Promise<unknown>;
}

const SignUpStepper = () => {
  const { currentUser /* , handleLogIn, handleLogOut*/ } = useContext(GlobalContext); //TODO: Why are we not getting all Auth stuff from context??
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("ready");
  const [errors, setErrors] = useState({
    cognito: null,
    blankfield: false,
    passwordmatch: false,
    terms: false,
  });

  useEffect(() => {
    /*Checks localStorage to see if the user has alread created an account.*/
    let signUpStep = parseInt(localStorage.getItem("signUpStep")!);
    if (signUpStep ?? currentUser) setStep(signUpStep);
    // if (!window.FB) this.createScript();
    // Removed the following code because it seemed to be causing a bug with the club
    // registration form loading on the first load.
    // if (Auth.currentSession()) this.setState({ registered: true });
    // this.setState({ registered: this.props.auth.authStatus });

    // if (this.state.registered) this.setState({ step: 2 });
  }, [step]);

  return (
    <div className="formik-form-wrapper p-4">
      <FormikStepper
        step={step}
        validationSchema={object({
          name: string().required(),
          email: string().email().required(),
          password: string().required(),
          terms: bool().oneOf([true], "Accept Terms & Conditions is required"),
          // confirmpassword: string()
          //   .oneOf([ref("password"), null], "Passwords must match")
          //   .required(),
        })}
        initialValues={{
          name: "",
          email: "",
          password: "",
          terms: false,
          // confirmpassword: "",
        }}
        onSubmit={async (values, helpers) => {
          const { name, email, password } = values;
          if (handleSignUp !== undefined && step === 0) {
            /**TODO: Handle error messages before calling the sign
             * up function
             * i.e.: if (!errors.cognito) {...
             *  // const error = Validate(e, this.state);
                // if (errors) {
                //   setErrors({ ...errors });
                //   return errors;
                // }
             * */
            clearErrorState();
            setStatus("processing");
            try {
              const res = await handleSignUp(name, email, password);

              if (res.userSub) {
                setStep(1);
                localStorage.signUpStep = 1;
              } else {
                console.log(res);
                setStatus("ready");
              }
            } catch (error) {
              setStatus("ready");
            }
          } else {
            console.log("Looks like the handleSignUp function is either undefined or you are not currently on step 0 in the sign up flow.");
          }
        }}
      >
        <FormikStep label="Sign up">
          <Step0 status={status} handleKeyDown={handleKeyDown} />
        </FormikStep>
        <FormikStep label="Confirm membership">
          <Step2 handleStepChange={setStep} />
        </FormikStep>
        <FormikStep label="">
          <Step3 />
        </FormikStep>
      </FormikStepper>
      <div>
        {process.env.NODE_ENV === "development" ? (
          <div className="flex mt-4 justify-around">
            <button
              className="p-2 bg-blue-500 rounded-lg "
              onClick={() => {
                localStorage.signUpStep = 0;
                setStep(0);
              }}
            >
              Start Step
            </button>
            <button
              className="p-2 bg-blue-500 rounded-lg "
              onClick={() => {
                localStorage.signUpStep = 1;
                setStep(1);
              }}
            >
              Payment Step
            </button>
            <button
              className="p-2 bg-blue-500 rounded-lg "
              onClick={() => {
                localStorage.signUpStep = 2;
                setStep(2);
              }}
            >
              Welcome step
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );

  function clearErrorState() {
    //Quick hack to get the signup function to fire on every click. When the following if statement checks for errors
    //its looking at the component's stale state. Changing the cognito property value to null directly goes against
    //React conventions but it allows the sign up function to always get a cleared error state.
    errors.cognito = null;
    setErrors({
      cognito: null,
      blankfield: false,
      passwordmatch: false,
      terms: false,
    });
  }
  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      //handleSignUp(name, email, password)
    }
  }
};

export const FormikStep: FC<FormikStepProps> = ({ children, label }) => {
  return <>{children}</>;
};

export function FormikStepper({ children, step, ...props }: FormikSteperProps) {
  const childrenArray = Children.toArray(children);

  const currentChild = childrenArray[step];

  return <Formik {...props}>{step === 1 ? <div>{currentChild}</div> : <Form autoComplete="off">{currentChild}</Form>}</Formik>;
}
export default SignUpStepper;
