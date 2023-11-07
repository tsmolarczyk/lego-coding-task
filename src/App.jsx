import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomePage from "./views/WelcomePage";
import SummaryPage from "./views/SummaryPage";
import MinifigsPage from "./Views/MinifigsPage";
import ActiveIdProvider from "./context/ActiveIdProvider";

function App() {
  return (
    <ActiveIdProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/choose" element={<MinifigsPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </ActiveIdProvider>
  );
}

export default App;
