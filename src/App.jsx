import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './userSite/pages/HomePage';
import { SearchCandidatePage } from './userSite/pages/searchCandidatePage';
import { CompareCandidate } from './userSite/pages/CompareCandidate';
import { OldElectionPage } from './userSite/pages/oldElectionPage';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/search-candidates"
          element={<SearchCandidatePage />}
        ></Route>
        <Route
          path="/compare-candidates"
          element={<CompareCandidate />}
        ></Route>
        <Route path="/view-election/:year" element={<OldElectionPage />} />
      </Routes>
    </Router>
  );
}

export default App
