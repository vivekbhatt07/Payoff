import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/orders" element={<Dashboard />} />
        <Route path="/products" element={<Dashboard />} />
        <Route path="/delivery" element={<Dashboard />} />
        <Route path="/marketing" element={<Dashboard />} />
        <Route path="/analytics" element={<Dashboard />} />
        <Route path="/tools" element={<Dashboard />} />
        <Route path="/discounts" element={<Dashboard />} />
        <Route path="/audience" element={<Dashboard />} />
        <Route path="/appearance" element={<Dashboard />} />
        <Route path="/plugins" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
