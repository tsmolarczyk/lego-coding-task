import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const WelcomePage: FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/choose");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-lego-pattern bg-cover h-screen w-full">
      <h1 className=" text-4xl font-bold text-white m-4 mb-12 text-center">
        LEGO MINIFIGS MYSTERY BOX
      </h1>
      <Button title="LET'S GO!" onClick={handleButtonClick} />
    </div>
  );
};

export default WelcomePage;
