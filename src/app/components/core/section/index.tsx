import { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}
const Section: FC<SectionProps> = ({ children }) => {
  return <section className="pt-2 mx-auto">{children}</section>;
};
export default Section;

/*** Notes ***
 * Notes go here.
 */
