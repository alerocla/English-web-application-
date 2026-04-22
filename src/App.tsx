import TheHeader from "./components/TheHeader.tsx";
import MainPage from "./pages/MainPage.tsx";
import { Route, Routes } from "react-router";
import GrammarPage from "./pages/GrammarPage.tsx";
import GrammarInfoPage from "./pages/GrammarInfoPage.tsx";
import TrainingPage from "./pages/TrainingPage.tsx";

function App() {
  return (
    <>
      <TheHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/grammar" element={<GrammarPage />} />
        <Route path="/grammar/:ruleId" element={<GrammarInfoPage />} />
        <Route path="/training" element={<TrainingPage />} />
      </Routes>
    </>
  );
}

export default App;
