import { FC } from "react";
import { Link }  from "../../../props";
import Text from "../../units/Text";

interface NavGroupProps {
  variation?: "primary" | "secondary" | "menu"; 
  links: Link[];
}



 const NavGroup: FC<NavGroupProps> = ({ links }) => {
  return (
    <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0   md:pb-0">
      <ul className="flex">
        {links.map((link: Link, idx) => (
          <Text key={idx} href={link.url} text={link.text} variant={"link"} />
        ))}
      </ul>
    </nav>
  );
};


export default NavGroup;