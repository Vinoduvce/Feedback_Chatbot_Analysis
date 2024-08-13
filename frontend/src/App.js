import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chatbot from "./component/Chatbot"; // Ensure the import is present
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Keep Navbar outside the Routes for consistency across pages */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/chat" element={<Chatbot />} />  {/* Ensure the route for Chatbot */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;

