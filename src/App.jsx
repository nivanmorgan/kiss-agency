import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Bot } from "./pages";
import { CallUs } from "./components";
import { AI } from "./containers";
import "./App.css";
import PrivacyPolicy from "./pages/Privacy-policy";

function App() {
  useEffect(() => {
    window.addEventListener("wheel", (e) => e.preventDefault(), {
      passive: false,
    });

    return () =>
      window.removeEventListener("wheel", (e) => e.preventDefault(), {
        passive: false,
      });
  }, []);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route exact path="/bot" element={<Bot />} /> */}
      </Routes>
      {/* <CallUs /> */}
      {/* <AI /> */}
    </>
  );
}

export default App;
