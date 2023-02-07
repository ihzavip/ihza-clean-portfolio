import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Story from "../src/pages/Story";
import ExpertisePage from "./pages/ExpertisePage";
import { useSmoothScroll } from "./utils/useSmoothScroll";

function App() {
  useSmoothScroll();
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
