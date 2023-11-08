import React from "react";

interface MinifigCardProps {
  imgUrl: string;
  alt: string;
  name: string;
  details: string;
  onClick: () => void;
  isActive: boolean;
}

const MinifigCard: React.FC<MinifigCardProps> = ({
  imgUrl,
  alt,
  name,
  details,
  onClick,
  isActive
}) => {
  const shadowStyle = isActive
    ? "0 0 15px 5px rgba(255, 165, 0, 1)"
    : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";

  return (
    <div
      className={`m-4 p-2 bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer rounded-lg overflow-hidden w-[290px] h-[340px] ${shadowStyle}`}
      onClick={onClick}
      style={{ boxShadow: shadowStyle }}
    >
      <div className="w-full h-[270px] flex justify-center items-center overflow-hidden">
        <img
          className="object-contain max-w-full max-h-full"
          src={imgUrl}
          alt={alt}
        />
      </div>
      <p className="font-sans font-bold text-center ext-center my-2">{name}</p>
      <p
        className="font-sans font-bold text-orange-400 hover:text-orange-600 z-10"
        onClick={() => {
          window.open(details, "_blank");
        }}
      >
        Show Details
      </p>
    </div>
  );
};

export default MinifigCard;
