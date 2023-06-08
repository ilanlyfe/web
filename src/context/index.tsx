import {
  useState,
  useEffect,
  createContext,
  FC,
  MouseEvent,
  ReactNode,
} from "react";
import { AuthSession, Journey } from "@/interfaces";
import { handleSignUp } from "@/context/auth";

interface GlobalContextProps {
  session: AuthSession | null;
  journeys: Journey[];
  handleSignIn: (e: MouseEvent) => Promise<void>;
  handleLogOut: (e: MouseEvent) => Promise<void>;
  handleSignUp: typeof handleSignUp;
}

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<Partial<GlobalContextProps>>({});

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  /**
   * TODO: This will be used for updating the current location of the user
   * Instead of useing only a string an object instead may be better so that
   * additional info can be passed as well.
   */
  // const [currPageLocation, setCurrPageLocation] = useState("");

  // const [errors, setErrors] = useState({
  //   cognito: null,
  //   blankfield: false,
  //   passwordmatch: false,
  //   terms: false,
  // });

  const [currentAuthState, setCurrentAuthState] = useState<AuthSession | null>(
    null,
  );
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    // (async () => {
    //   if (!currentAuthState) {
    //     await checkAuthSession();
    //   }
    // })();
  }, [currentAuthState, journeys]);
  let session: AuthSession = {
    token: "some-mock-token",
  };
  return (
    <GlobalContext.Provider
      value={{ session, journeys, handleLogOut, handleSignIn, handleSignUp }}
    >
      {children}
    </GlobalContext.Provider>
  );

  // function toggleModal() {
  //   setModalState(!isModalOpen);
  // }
  // async function handleSignIn() {
  //   setModalState(true);
  // }
  async function handleLogOut(e: MouseEvent) {
    e.preventDefault();
    try {
      // await Auth.signOut();
      setCurrentAuthState(null);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSignIn(e: MouseEvent) {
    e.preventDefault();
    try {
      // const session = await Auth.signIn({
      //   //TODO: Remove the folloing values. They are for testing only.
      //   username: process.env.NEXT_PUBLIC_TEST_USERNAME!,
      //   password: process.env.NEXT_PUBLIC_TEST_PASSWORD!,
      // });
      setCurrentAuthState(null);
    } catch (err) {
      console.error("error when calling the 'handleSignIn' method", err);
    }
  }

  async function checkAuthSession() {
    try {
      // const session = await Auth.currentAuthenticatedUser();

      if (null) {
        setCurrentAuthState(null);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  }

  function updateJourneys(journey: Journey) {
    setJourneys([...journeys, journey]);
  }
  function loadJourneysFromLocal(): Journey[] {
    return journeys;
  }
};
