import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ColorModeToggle from "@/components/ColorModeToggle";

function App() {
  return (
    <>
      <ColorModeToggle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
