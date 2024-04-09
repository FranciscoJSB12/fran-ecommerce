import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  type?: string;
  placeHolder: string;
  autoComplete?: string;
  value: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInput(props: InputProps) {
  const renderTitle = (title: string): string => {
    let capitalizedTitle: string = title.replace(
      /[A-Z]/g,
      (l) => " " + l.toLowerCase()
    );
    capitalizedTitle = capitalizedTitle.replace(/\b\w/, (l) => l.toUpperCase());
    return capitalizedTitle;
  };

  return (
    <div className="w-full">
      <label htmlFor={props.name} className="block">
        {renderTitle(props.name)}:
      </label>
      <input
        id={props.name}
        type={props.type || "text"}
        name={props.name}
        className="w-full border border-gray-400 rounded-md py-2 px-4 focus:outline-blue-700"
        placeholder={props.placeHolder}
        autoComplete={props.autoComplete || "off"}
        onChange={props.changeHandler}
        value={props.value || ""}
      />
    </div>
  );
}
