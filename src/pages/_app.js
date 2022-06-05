import "../styles/globals.css";
import NavBar from "../ui/composites/NavBar";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

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
