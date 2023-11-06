import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomePage from "./views/WelcomePage/WelcomePage";
import SummaryPage from "./views/SummaryPage/SummaryPage";
import MinifigsPage from "./Views/MinifigsPage/MinifigsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/choose" element={<MinifigsPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
