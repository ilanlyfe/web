import { FC } from "react";

interface InputProps {
  id?: string;
  placeholder?: string;
  type: "email" | "password" | "text" | "date" | "search";
  name: string;
  label?: string;
  handler?: () => void;
  onChange?: () => void;
}

const Input: FC<InputProps> = (props) => renderInput(props);
export default Input;

function renderInput(props: InputProps) {
  switch (props.type) {
    // case "date":
    //   return <DateInput {...props} />;
    default:
      return <DefaultInput {...props} />;
  }
}

function DefaultInput(props: InputProps) {
  return (
    <div className="w-full">
      {props.label !== undefined ? (
        <label htmlFor="email" className="sr-only">
          {props.label}
        </label>
      ) : null}
      <input
        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
        {...props}
      />
    </div>
  );
}

function DateInput(props: InputProps) {
  return (
    <div date-rangepicker="" className="flex items-center">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          name="start"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date start"
        />
      </div>
    </div>
  );
}

function QueryInput(props: InputProps) {
  return (
    <div className="w-full max-w-lg m-auto lg:max-w-xs">
      <label htmlFor="search" className="sr-only">
        {props.label}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {/* <Icon variant={IconVariant.SEARCH} aria-hidden="true" /> */}
        </div>
        <input
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 
          text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
          focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...props}
        />
      </div>
    </div>
  );
}
