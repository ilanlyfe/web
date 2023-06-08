import { FC } from "react";

interface TemplateProps {
  string: string;
}
const Template: FC<TemplateProps> = ({ string }) => {
  return (
    <div>
      <div>Template</div>
    </div>
  );
};

export default Template;
