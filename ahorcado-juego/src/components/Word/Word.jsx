export function Word({ letter }) {
  return (
    <span className="inline-block w-8 h-8 mx-1 text-center text-2xl font-bold border-b-2 border-blue-500">
      {letter}
    </span>
  );
}
