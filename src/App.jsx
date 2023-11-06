import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CombineLego from "./components/CombineLego";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/choose" element={<CombineLego />} />
        {/* <CombineLego /> */}
      </Routes>
    </Router>
  );
}

export default App;
