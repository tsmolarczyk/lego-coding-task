import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("choose");
  };

  return (
    <>
      <h1>LEGO MINIFIGS MYSTERY BOX</h1>
      <button onClick={handleButtonClick}>LET'S GO!</button>
    </>
  );
};

export default WelcomePage;
