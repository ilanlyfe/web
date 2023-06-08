import { MessageProps } from "@/interfaces";

export default function Message({ userName, content }: MessageProps) {
  return (
    <div>
      <p>{userName}</p>
      <p>{content}</p>
    </div>
  );
}
