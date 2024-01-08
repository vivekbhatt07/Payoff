import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
