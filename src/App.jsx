import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import PrivacyPolicy from "./pages/Privacy-policy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
