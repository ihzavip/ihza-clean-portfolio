import Home from "../src/pages/Home";
import Story from "../src/pages/Story";
import ExpertisePage from "./pages/ExpertisePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/story" element={<Story />} />
        <Route exact path="/expertisepage" element={<ExpertisePage />} />
      </Routes>
    </>
  );
}

export default App;
