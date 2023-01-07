import { Routes, Route, Navigate } from "react-router-dom";

import FormPage from "./pages/form";
import ResultsPage from "./pages/results";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={"/form"} />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
