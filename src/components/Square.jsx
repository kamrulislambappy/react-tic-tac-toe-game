export default function Square({ value, onSquareClick }) {
  let squareValues;

  if (value === "X") {
    squareValues = (
      <span className="text-red-500">{!value ? value : "💰"}</span>
    );
  } else {
    squareValues = (
      <span className="text-yellow-500">{!value ? value : "❤"}</span>
    );
  }

  return (
    <button
      className="m-3 w-20 h-20 ring-1 text-4xl font-extrabold ring-lime-500 hover:bg-lime-700 hover:text-yellow-300 duration-200"
      onClick={onSquareClick}
    >
      {squareValues}
    </button>
  );
}
