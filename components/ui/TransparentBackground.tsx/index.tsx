interface TransparentBackgroundProps {
  hiddenAfterStreching: boolean;
}

export default function TransparentBackground({
  hiddenAfterStreching,
}: TransparentBackgroundProps) {
  return (
    <div
      className={`fixed z-10 top-0 left-0 h-screen w-screen bg-blue-600/30 ${
        hiddenAfterStreching ? "xlg:hidden" : ""
      }`}
    ></div>
  );
}
