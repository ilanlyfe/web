import "../styles/globals.css";
import NavBar from "../ui/elements/NavBar";

const links = [
  {
    text: "studio",
    url: "/",
  },
  {
    text: "style",
    url: "/style",
  },
  {
    text: "746",
    url: "/746",
  },
];navLinks={links} 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar navLinks={links} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
