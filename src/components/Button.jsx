const Button = ({ title, onClick }) => {
  return (
    <button
      className="font-sans bg-gradient-to-r from-blue-400 via-blue-350 to-blue-400 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center w-48 h-8 text-xs drop-shadow-md "
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
