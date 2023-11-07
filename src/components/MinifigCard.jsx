const MinifigCard = ({ imgUrl, alt, name, onClick, isActive }) => {
  return (
    <div
      className={`cursor-pointer p-4 ${
        isActive ? "border-4 border-orange-500" : "border"
      }`}
      onClick={onClick}
    >
      <img className="max-h-[400px]" src={imgUrl} alt={alt} />
      <p className="text-white text-center">{name}</p>
    </div>
  );
};

export default MinifigCard;
