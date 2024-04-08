import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const router = useRouter();

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "") return;
    router.push(`/search?q=${value.toLowerCase()}`);
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="w-full flex justify-center items-center px-4 mb-4"
    >
      <input
        type="text"
        placeholder="Search your products"
        value={value}
        onChange={changeValueHandler}
        className="w-full max-w-xl px-4 py-2 shadow-lg border border-gray-400 rounded-tl-md rounded-bl-md focus:outline-none"
      />
      <button className="border border-gray-400 rounded-tr-md rounded-br-md p-2 border-l-0">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
      </button>
    </form>
  );
}
