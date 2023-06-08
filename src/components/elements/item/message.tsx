import { MessageProps } from "@/interfaces";
import { FC } from "react";

const Message: FC<MessageProps> = ({ userName, content }) => {
  return (
    <div>
      <p>{userName}</p>
      <p>{content}</p>
    </div>
  );
};

export default Message;
