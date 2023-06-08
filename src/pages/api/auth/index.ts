export default function handler(req: any, res: any ) {
    console.log("request passed to api route: ", req)
    res.status(200).json({ name: 'John Doe' });
}
  
export async function handleSignUp(name: string, email: string, password: string): Promise<String> {
  //TODO: Add paramater validation before calling the API.
  try {
  
    //TODO: Change from localStorage to sessionStorage.
    // sessionStorage.setItem("traveler", JSON.stringify(traveler));
    localStorage.setItem("guest_credentials", JSON.stringify({"email": email, "password": password}));
    return "mock-success";
  } catch (error) {

      // let message
      // if (error instanceof Error) message = error.message
      // else message = String(error)
      // reportError({message})
      console.log(error);

      return "there was an error";
      // error.message ? alert(error.message) : alert(error);
      // let err = null;
      // !error.message ? (err = { message: error }) : (err = error);
      // alert(!error.message ? error : error.message);
  }
}

export async function resetPassword() {}
