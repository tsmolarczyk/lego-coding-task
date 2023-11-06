import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("choose");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black h-screen w-full">
      <h1 className="font-sans text-4xl font-bold text-white mb-12">
        LEGO MINIFIGS MYSTERY BOX
      </h1>
      <Button title="LET'S GO!" onClick={handleButtonClick} />
    </div>
  );
};

export default WelcomePage;
