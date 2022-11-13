import clsx from "clsx";
import { Fragment, FC } from "react";
// import Icon from "../Icons";
import Text from "../Text";
import s from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  text?: string;
  function: "primary" | "simple";
  variant?: "primary" | "secondary" | "nav" | "goBack" | "social" | "save" | "filter" | "close" | "new-button";
  width?: number;
  bgcolor?: string;
  icon?: JSX.Element;
  iconR?: JSX.Element;
  // fullWidth?: boolean;
  status?: "ready" | "processing" | "success" | "fail";
  children?: React.ReactNode;
}
const Button: FC<ButtonProps> = ({ onClick,text, type, variant, icon, iconR, bgcolor, status }) => {
  //TODO: Remove hard coded variables that should be handled in the site's theme such as bgcolor.
  switch (variant) {
    case "primary":
      return (
        <button
          className={clsx(
            "shadow-md h-12 bg-blue-400 flex px-6 items-center outline-none focus:outline-none rounded-xl w-full",
            bgcolor ? "border-gray-50 border-2 border-solid" : null
          )}
          type={type}
          style={{ transition: "all .15s ease", backgroundColor: bgcolor }}
          onClick={onClick}
        >
          <div className={clsx("flex flex-row m-auto items-center justify-center  ", icon || iconR ? null : "px-2")}>{renderButtonText(status)}</div>
        </button>
      );
    case "secondary":
      return (
        <button
          className={clsx(
            "shadow-md bg-white h-12 flex items-center w-full px-6 outline-none focus:outline-none rounded-xl",
            bgcolor ? "border-gray-50 border-2 border-solid" : null
          )}
          type={type}
          style={{ transition: "all .15s ease", backgroundColor: bgcolor }}
          onClick={onClick}
        >
          <div className={clsx("flex flex-row m-auto items-center justify-center ", icon || iconR ? null : "px-2")}>
            <div>{icon}</div>
            <div>
              <Text color={bgcolor ? "#fff" : "#000345"} variant="title">
                {text}
              </Text>
            </div>
            <div>{iconR}</div>
          </div>
        </button>
      );
    case "filter":
      return (
        <button
          className={clsx(
            "shadow-md bg-white h-12 w-12 rounded-full flex px-3 py-3  outline-none focus:outline-none ",
            bgcolor ? "border-gray-50 border-2 border-solid" : null
          )}
          type={type}
          style={{ transition: "all .15s ease", backgroundColor: bgcolor }}
          onClick={onClick}
        >
          <div className={clsx("flex flex-row m-auto items-center justify-center ", icon || iconR ? null : "px-2")}>
            <div>{icon}</div>
          </div>
        </button>
      );
    case "close":
      return (
        <button
          className={clsx(
            "shadow-md bg-white h-11 w-11 rounded-full flex px-3 py-3  outline-none focus:outline-none ",
            bgcolor ? "border-gray-50 border-2 border-solid" : null
          )}
          type={type}
          style={{ transition: "all .15s ease", backgroundColor: bgcolor }}
          onClick={onClick}
        >
          <div className={clsx("flex flex-row m-auto items-center justify-center ", icon || iconR ? null : "px-2")}>
            <div>{icon}</div>
          </div>
        </button>
      );
    default:
      return <div></div>;
  }
  function renderButtonText(status: ButtonProps["status"]) {
    switch (status) {
      case "processing":
        return <div className={s.spinner} id="spinner"></div>;
      default:
        return (
          <Fragment>
            <div>{icon}</div>
            <div>
              <Text color={variant === "primary" ? "#fff" : "#000345"} variant="title">
                {text}
              </Text>
            </div>
            <div>{iconR}</div>
          </Fragment>
        );
    }
  }
};
export default Button;

//inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700
//
