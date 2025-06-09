export function Button({ children, onClick }) {
  return (
    <button
      className="text-xl bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline title"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
