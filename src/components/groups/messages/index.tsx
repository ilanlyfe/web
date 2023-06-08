import Message from "@/components/elements/item/message";
import { MessageProps } from "@/interfaces";

export default function Messages() {
  const data: MessageProps[] = [
    {
      userName: "Message 1",
      id: "1",
      content: "This is a message",
    },
    {
      userName: "Message 2",
      id: "2",
      content: "This is a message",
    },
    {
      userName: "Message 3",
      id: "3",
      content: "This is a message",
    },
    {
      userName: "Message 4",
      id: "4",
      content: "This is a message",
    },
    {
      userName: "Message 5",
      id: "5",
      content: "This is a message",
    },
  ];
  return (
    <div className="bg-white py-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-4 space-y-20 lg:mt-20 lg:space-y-20">
            {data.map((data) => (
              <Message
                key={data.id}
                id={data.id}
                userName={data.userName}
                content={data.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
