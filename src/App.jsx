import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./pages/About";
import Heritage from "./pages/Heritage";
import Events from "./pages/Events";
import Notices from "./pages/Notices";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
