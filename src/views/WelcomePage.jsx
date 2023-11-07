import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Lottie from "lottie-react";
import legoAnimation from "../assets/lottie-lego.json";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/choose");
    }, 1000);
  };
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center bg-lego-pattern bg-cover h-screen w-full">
        <Lottie
          animationData={legoAnimation}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40vw",
            height: "40vh"
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-lego-pattern bg-cover h-screen w-full">
      <h1 className="text-4xl font-bold text-white mb-12">
        LEGO MINIFIGS MYSTERY BOX
      </h1>
      <Button title="LET'S GO!" onClick={handleButtonClick} />
    </div>
  );
};

export default WelcomePage;
