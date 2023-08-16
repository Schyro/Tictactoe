export default function Square(props) {
  const { value, onSquareClick } = props;
  return (
    <button
      onClick={onSquareClick}
      className="flex justify-center items-center text-[48px] w-[122px] h-[122px] bg-[#f4f4f480] hover:bg-[#f4f4f4d4] rounded-lg   ">
      {value}
    </button>
  );
}
