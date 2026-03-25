import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Chatbot from "./pages/chatbot";
import Projects from "./pages/portfolio";
import CV from "./pages/CV";
import Contact from "./pages/contact";
import Technologies from "./pages/technologies";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
