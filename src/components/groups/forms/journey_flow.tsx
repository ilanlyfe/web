import { FC, useState, useEffect } from "react";
import { Experience, Journey } from "@/interfaces";
import Preview, { InstanceType } from "@/components/elements/preview";
import {
  addExperienceToJourney,
  createJourney,
  getJourneys,
} from "@/context/journeys";

interface JourneyFlowProps {
  currStep?: number;
  experience: Experience;
  toggleModal?: () => void;
}
const JourneyFlow: FC<JourneyFlowProps> = ({
  currStep,
  experience,
  toggleModal,
}) => {
  const [step, setStep] = useState(0);
  const [journeys, setJourneys] = useState<Journey[]>([]);
  // When the flow is active the component will then load all the current
  // journeys for the user.
  function loadJourneys() {
    let jns = getJourneys();
    console.debug("journeys", jns);
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
    let journeyId = "hello";
    // TODO: this should be done once the user has logged in.
    if (journeys.length === 0) {
      console.debug("no journeys found in state, loading...");
      // create new journey
    }

    let resp = addExperienceToJourney(journeyId, experience);
    console.debug("response from adding experience to journey", resp);
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
        <div onClick={handleCreateAndAddToJourney}>
          this will create and add the experience to the newly created journey
        </div>
      </div>
    );

    function handleCreateAndAddToJourney() {
      // add name to journey

      // complete createtion
      let journeyId: string;
      let { data, error: err1 } = createJourney({
        id: "", // blank so that we don't have a ts error. The id is created internally
        name: "test journey",
        description: "this is a test journey",
        creator: {
          id: "01H253Q3MEB4TV43Q9ZWXTMWPC",
          userName: "tony_local",
          avatarUrl: "https://i.pravatar.cc/150?img=3",
        },
      });
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
      console.log("data response from creating journey", data);
      journeyId = data.id;

      let { data: did, error: err2 } = addExperienceToJourney(
        journeyId,
        experience,
      );
      if (err2) {
        console.error(
          "boolean response from adding experience to journey",
          did,
          err2,
        );
      }
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
