import "../styles/globals.css";
import NavBar from "../ui/elements/NavBar";

const links = [
  {
    text: "stories",
    url: "/",
  },
  {
    text: "experiences",
    url: "/experiences",
  },
  {
    text: "trips",
    url: "/trips",
  },
  {
    text: "messages",
    url: "/messages",
  },
];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar navLinks={links} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
