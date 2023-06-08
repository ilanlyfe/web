import { Guest } from "@/interfaces";
export async function handleSignUp(
  name: string,
  email: string,
  password: string,
): Promise<string> {
  // Change to Promise<Guest | null>
  //TODO: Add paramater validation before calling the API.
  try {
    // make a call to the api and use the returned guest object to set the local storage
    const guest = {
      id: "01H24X6TTNQ7M0X6SF69TEC70S",
      userName: "tony",
      avatarUrl:
        "https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-19/28151834_2038383136440655_6873251973563416576_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=cZ8nkzHKG98AX_Gj5DO&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCOOvoRSTzU8BxuoOHcsj8L_lmAX3bH3ElPRI9E5X905w&oe=64824B21&_nc_sid=f70a57",
    };
    //TODO: Change from localStorage to sessionStorage.
    // sessionStorage.setItem("traveler", JSON.stringify(traveler));
    localStorage.setItem(`guest_${guest.id}`, JSON.stringify(guest));
    return "";
  } catch (error) {
    console.error(error);
    return "there was an error signing up";
    // let err = null;
    // !error.message ? (err = { message: error }) : (err = error);
    // alert(!error.message ? error : error.message);
  }
}

export async function resetPassword() {}
