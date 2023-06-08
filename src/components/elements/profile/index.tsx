import useUser from "../../../utils/useUser";
import Loading from "../../groups/loading";
const Grest = () => {
  // Fetch the user client-side
  const { user } = useUser({ redirectTo: "/login" });

  // Server-render loading state
  if (!user || user.isLoggedIn === false) {
    return <Loading />;
  }

  // Once the user request finishes, show the user
  return (
    <>
      <h1>Your Grest</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Grest;
