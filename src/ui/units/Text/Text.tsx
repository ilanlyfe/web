import clsx from "clsx";
import styles from "./Text.module.css";
import { FC, Fragment } from "react";
import Link from "next/link";

interface TextProps {
  variant?: "hint" | "error" | "base" | "title" | "link" | "heading" | "main" | "shout";
  weight?: number;
  color?: string;
  clamp?: number;
  className?: string;
  bold?: unknown;
  italic?: unknown;
  underline?: unknown;
  href?: string;
  text?: string; 
  children?: React.ReactNode;
}

const Text: FC<TextProps> = ({ href, text, className, children, variant, color, clamp, underline, bold, italic }) => {
  //TODO: Implement underline, bold, and italic styling.
  return <Fragment>{getText(variant)}</Fragment>;
  function getText(variant: string) {
    switch (variant) {
      case "base":
        return (
          <p className={clsx("font-normal", `line-clamp-${clamp}`, className)} style={{ color: color ? color : "#000345" }}>
            {children}
          </p>
        );
      case "hint":
        return (
          <p style={{ color: "#A9B4CC" }} className="text-sm font-light">
            {children}
          </p>
        );
      case "error":
        return <p className="text-sm font-light text-red-600">{children}</p>;
      case "link":
        return (
          <Fragment>
            {href ? (
              <Link href={href}>
                <span className={clsx("font-normal text-blue-600", className)}> {text !== "" ? text :children}</span>
              </Link>
            ) : null}
          </Fragment>
        );
      case "title":
        return (
          <h5 className={clsx("text-base font-semibold", className)} style={{ color: color ? color : "#000345" }}>
            {children}
          </h5>
        );
      case "heading":
        return (
          <h3 className={clsx("text-3xl font-semibold mb-2", className)} style={{ color: color ? color : "#000345" }}>
            {children}
          </h3>
        );
      case "main":
        return (
          <h1 className={clsx("text-[26px] font-semibold", className)} style={{ color: color ? color : "#000345" }}>
            {children}
          </h1>
        );
      case "shout":
        return (
          <h2 className={clsx(styles.shout, " text-5xl", className)} style={{ color: color ? color : "#000345" }}>
            {children}
          </h2>
        );
        default: 
        return (
          <p className={clsx("font-normal", `line-clamp-${clamp}`, className)} style={{ color: color ? color : "#000345" }}>
            {text !== "" ? text :children}
          </p>
        );
    }
  }
};

export default Text;

/**
 * variant === "base" ? (
        <p className={clsx( "font-extralight", clamp === 4 ? "line-clamp-4" : null, className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </p>
      ) : variant === "wet" ? (
        <p className={clsx( "font-normal", clamp === 4 ? "line-clamp-4" : null, className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </p>
      ) : variant === "bold" ? (
        <p className={clsx( "font-bold", className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </p>
      ) : variant === "title" ? (
        <h3 className={clsx(  " text-lg font-normal", className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </h3>
      ) : variant === "hint" ? (
        <p style={{ color: "#A9B4CC" }} className=" text-base font-light">
          {children}
        </p>
      ) : variant === "heading" ? (
        <h2 className={clsx( styles.heading, className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </h2>
      ) : variant === "shout" ? (
        <h1 className={clsx( styles.shout, " text-7xl", className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </h1>
      ) : null
 */
