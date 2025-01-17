import Button from "./Button";

export default function TicTacToe() {
  return (
    <div className="bg-stone-900 w-full h-screen flex justify-center items-center">
      <div className="mt-6 max-w-md p-6 rounded-md bg-lime-200">
        <div className="flex">
          <Button />
          <Button />
          <Button />
        </div>
        <div className="flex">
          <Button />
          <Button />
          <Button />
        </div>
        <div className="flex">
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}
