import { useState } from "react";

export default function Button() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }
  return (
    <button
      className="m-3 w-20 h-20 ring-1 text-4xl font-extrabold ring-lime-500 text-red-500 hover:bg-lime-700 hover:text-yellow-300 duration-200"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
