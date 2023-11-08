const Button = ({ title, onClick, isDisabled }) => {
  return (
    <button
      style={{
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      className={`font-sans bg-gradient-to-r from-blue-500 via-blue-450 to-blue-500 drop-shadow-xl text-white font-bold py-2 px-4 rounded-full flex items-center justify-center w-48 h-10 text-xs mx-auto  ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
