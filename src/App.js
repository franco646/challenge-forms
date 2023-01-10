import { Routes, Route, Navigate } from "react-router-dom";

import FormPage from "./pages/form/form";
import ResultsPage from "./pages/results/results";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={"/form"} />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/results/:userId" element={<ResultsPage />} />
        <Route path="*" element={<Navigate to="/form" replace />} />
      </Routes>
    </div>
  );
}

export default App;
