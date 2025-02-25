import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import Congratulations from "./components/pages/Congratulations";
import Monopoly from "./components/pages/Monopoly"; // Ensure this file exists

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/monopoly" element={<Monopoly />} /> 
        <Route path="/congratulations" element={<Congratulations />} />
      </Routes>
    </Router>
  );
}

export default App;
