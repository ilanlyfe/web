import { FC, useState, useEffect } from "react";
import { ExperienceData, JourneyData } from "@/interfaces";
import Preview, { InstanceType } from "@/components/elements/preview";
import {
  addExperienceToJourney,
  createJourney,
  getJourneys,
} from "@/context/journeys";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface JourneyFlowProps {
  currStep?: number;
  experience: ExperienceData;
  toggleModal?: () => void;
}
const JourneyFlow: FC<JourneyFlowProps> = ({
  currStep,
  experience,
  toggleModal,
}) => {
  const [step, setStep] = useState(0);
  const [journeys, setJourneys] = useState<JourneyData[]>([]);
  // When the flow is active the component will then load all the current
  // journeys for the user.
  function loadJourneys() {
    let jns = getJourneys();
    console.debug("current journeys from local storage", jns);
    console.log("experience passed in to the journey flow.", experience);
    if (jns.data?.length !== 0) {
      setJourneys(jns.data!);
    }
  }

  function handleCreateNewJourney() {
    // set step to 1
    setStep(1);
  }

  // If there are no journeys, the user will be prompted
  // to create one. Once they create one, the current experience
  // will be automatically added to that journey.

  // When a journey is clicked this method will add an expereince to that journey
  function handlePriviewClicked(e: any) {
    console.log("printing event data based on what was clicked... ", e);
    // if no journey exists, the guest will be prompted to create one.
    // test experience id "01H24VF0JTY981SJMYXZW7JR0X",
  }

  useEffect(() => {
    loadJourneys();

    console.debug("step changed to step: ", step);
  }, [step]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      {renderStep(step)}
    </div>
  );

  function renderStep(step: number) {
    switch (step) {
      case 0:
        return <Step0 />;
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
    }
  }

  function Step0() {
    return (
      <div className="w-full">
        {journeys.map((j, idx) => (
          <Preview
            key={idx}
            data={j}
            type={InstanceType.JOURNEY}
            onClick={(e: any) => handlePriviewClicked(e)}
          />
        ))}
        <Preview
          type={InstanceType.ADD_NEW_JOURNEY}
          onClick={handleCreateNewJourney}
        />
      </div>
    );
  }

  function Step1() {
    return (
      <div>
        <div>Step1: Create new journey</div>
        {/* add the inputs to get the journey details such as name and date */}
        <Formik
          initialValues={{
            name: "",
            description: "",
            startDate: "",
            endDate: "",
          }}
          validate={(values) => {
            const errors = {
              name: "",
            };
            if (!values.name) {
              console.log("no journey name");
              errors.name = "A Name is required when creating a journey";
              return errors;
            }
            // else if (
            //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
            // ) {
            //   errors.name = "The name provided is no valid";
            //   console.log("invalid dates");
            //   console.log("returning errors", errors, values);
            //   return errors;
            // }
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("submitting values", values);
            handleCreateAndAddToJourney({
              id: "",
              name: values.name,
              description: values.description,
              startDate: new Date(values.startDate),
              endDate: new Date(values.endDate),
              total: 0,
              creator: {
                id: "01H253Q3MEB4TV43Q9ZWXTMWPC",
                userName: "testing_tony_local",
                avatarUrl: "https://i.pravatar.cc/150?img=3",
              },
            });
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
              <Field type="text" name="description" />
              <ErrorMessage name="description" component="div" />
              <Field type="text" name="startDate" />
              <ErrorMessage name="startDate" component="div" />
              <Field type="text" name="endDate" />
              <ErrorMessage name="endDate" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Create
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );

    function handleCreateAndAddToJourney(jData: JourneyData) {
      // add name to journey

      // complete createtion
      let journeyId: string;
      let { data, error: err1 } = createJourney(jData);
      if (data?.id === undefined) {
        console.error(
          "the data returned after creating a journey did not have an id",
        );
        return;
      }
      if (err1) {
        console.error("error creating journey when adding experience");
        return;
      }

      journeyId = data.id;

      let { data: wasAdded, error: err2 } = addExperienceToJourney(
        journeyId,
        experience,
      );
      if (err2) {
        console.error(
          "boolean response from adding experience to journey",
          wasAdded,
          err2,
        );
      }
      loadJourneys();
      if (toggleModal) toggleModal(); // close the modal
    }
  }

  function Step2() {
    return (
      <div>
        <div>Step3</div>
      </div>
    );
  }
};

export default JourneyFlow;
