import { Session } from "@/interfaces";

export async function handleSignUp(
  email: string,
  password: string,
): Promise<Session | void> {
  //TODO: Add paramater validation before calling the API.
  try {
    let session = {
      token: "1234567890",
      guest: {
        id: "01H24X6TTNQ7M0X6SF69TEC70S", //TODO: get from context or something
        userName: "tony",
        avatarUrl: "https://www.gravatar.com/avatar/00",
      },
    };
    //TODO: Change from localStorage to sessionStorage.
    // sessionStorage.setItem("traveler", JSON.stringify(traveler));
    localStorage.setItem("juvae_guest_session", JSON.stringify(session));
    return session;
  } catch (error: any) {
    console.log(error);
    return error;
    // let err = null;
    // !error.message ? (err = { message: error }) : (err = error);
    // alert(!error.message ? error : error.message);
  }
}

export async function handleSignIn(
  email: string,
  password: string,
): Promise<Session | void> {
  //TODO: Add paramater validation before calling the API.
  try {
    let session = {
      token: "1234567890",
      guest: {
        id: "01H24X6TTNQ7M0X6SF69TEC70S", //TODO: get from context or something
        userName: "tony",
        avatarUrl: "https://www.gravatar.com/avatar/00",
      },
    };
    //TODO: Change from localStorage to sessionStorage.
    // sessionStorage.setItem("traveler", JSON.stringify(traveler));
    localStorage.setItem("juvae_guest_session", JSON.stringify(session));
    return session;
  } catch (error: any) {
    console.log(error);
    return error;
    // let err = null;
    // !error.message ? (err = { message: error }) : (err = error);
    // alert(!error.message ? error : error.message);
  }
}

export async function handleSignOut(): Promise<void> {
  try {
    localStorage.removeItem("juvae_guest_session");
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

export function getSession(): Session {
  if (typeof window !== "undefined") {
    let s = localStorage.getItem("juvae_guest_session");
    if (s) {
      let sessionObj = JSON.parse(s);
      let session = {
        token: sessionObj.token,
        guest: {
          id: sessionObj.guest.id,
          userName: sessionObj.user.name,
          avatarUrl: sessionObj.user.avatarUrl,
        },
      };
      return session;
    }
    return {
      token: "",
      guest: {
        id: "",
        userName: "",
        avatarUrl: "",
      },
    };
  } else {
    return {
      token: "",
      guest: {
        id: "",
        userName: "",
        avatarUrl: "",
      },
    };
  }
}
