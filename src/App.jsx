import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import WelcomePage from './views/WelcomePage'
import SummaryPage from './views/SummaryPage'
import MinifigsPage from './views/MinifigsPage'
import ChoosedMinifigProvider from './context/ChoosedMinifigProvider'

function App() {
  return (
    <ChoosedMinifigProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/choose" element={<MinifigsPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </ChoosedMinifigProvider>
  )
}

export default App
