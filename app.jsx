import React from "react"; // Add this import
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";  // Your homepage component
import Finance from "./pages/finance";

export default function App() {
  return (
    <div className="app" style={{ display: "flex" }}>
      {/* Sidebar with navigation */}
      <Sidebar />
      
      {/* Main content area */}
      <main className="content" style={{ padding: "20px", flex: 1 }}>
        <Routes>
          {/* Set the Dashboard component as the homepage */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/Finance" element={<Finance />} />
        </Routes>
      </main>
    </div>
  );
}
