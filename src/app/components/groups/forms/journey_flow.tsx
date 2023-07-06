import { FC, useState, useEffect } from "react";
import { ExperienceData, JourneyData } from "@/interfaces";
import Preview, { InstanceType } from "@/components/elements/preview";
import Input from "@/components/core/input";
import { addExperienceToJourney } from "@/handlers";
import { createJourney, getJourneys } from "@/handlers/apis";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface JourneyFlowProps {
  currStep?: number;
  experience: ExperienceData;
  toggleModal?: () => void;
}
const JourneyFlow: FC<JourneyFlowProps> = async ({
  currStep,
  experience,
  toggleModal,
}) => {
  const [step, setStep] = useState(0);
  const [journeys, setJourneys] = useState<JourneyData[]>([]);
  // When the flow is active the component will then load all the current
  // journeys for the user.
  let jns = await getJourneys({});
  function loadJourneys() {
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

  function handleBack() {
    setStep(step - 1);
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
        <Preview
          type={InstanceType.ADD_NEW_JOURNEY}
          onClick={handleCreateNewJourney}
        />
        {journeys !== undefined
          ? journeys.map((j, idx) => (
              <Preview
                key={idx}
                data={j}
                type={InstanceType.JOURNEY}
                onClick={(e: any) => handlePriviewClicked(e)}
              />
            ))
          : null}
      </div>
    );
  }

  function Step1() {
    return (
      <div className="w-full">
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
              console.log("no journey name", values);
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
              <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Field
                    placeholder="name your journey"
                    type="text"
                    name="name"
                    as={Input}
                  />
                  <ErrorMessage name="name" component="div" />
                </div>

                <div className="sm:col-span-3">
                  <Field
                    type="text"
                    name="description"
                    placeholder="Write an optional description"
                    as={Input}
                  />
                  <ErrorMessage name="description" component="div" />
                </div>
                <div className="sm:col-span-3">
                  <Field
                    type="date"
                    name="startDate"
                    placeholder="start date"
                    as={Input}
                  />
                  <ErrorMessage name="startDate" component="div" />
                </div>
                <div className="sm:col-span-3">
                  <Field
                    type="date"
                    name="endDate"
                    placeholder="end date"
                    as={Input}
                  />
                  <ErrorMessage name="endDate" component="div" />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  className="inline-flex mr-3 min-w-[80px] items-center gap-x-2 rounded-md px-3.5 py-2.5 
                text-sm font-semibold shadow-sm hover:bg-gray-300 focus-visible:outline 
                border border-gray-100 text-center justify-center
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  onClick={handleBack}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Back
                </button>
                <button
                  className="inline-flex items-center gap-x-2 rounded-md bg-blue-400 
                px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );

    function handleCreateAndAddToJourney(jData: JourneyData) {
      // add name to journey

      // complete createtion
      let journeyId = "";
      let createResp = createJourney(jData);
      createResp
        .then((r) => {
          if (r.data !== undefined) {
            journeyId = r.data.id;
          }
        })
        .catch((err: TypeError) => {
          console.error("error creating journey", err);
          return;
        });

      if (journeyId === "") {
        console.error(
          "the data returned after creating a journey did not have an id",
        );
        return;
      }

      let addResp = addExperienceToJourney({
        journeyId,
        experience,
      });

      addResp
        .then((r) => {})
        .catch((err: TypeError) => {
          console.error(
            "boolean response from adding experience to journey",
            err,
          );
        });

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
