import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Error from "./pages/Error";
import { useState, useEffect } from "react";
import { getAccommodations } from "./utils/api";

function App() {
  const [error, setError] = useState();
  const [accommodations, setAccommodations] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadAccommodations() {
      setIsLoading(true);
      try {
        const accommodations = await getAccommodations();
        setAccommodations(accommodations);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    }

    loadAccommodations();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={accommodations} loading={isLoading} error={error} />} />
        <Route path="/logement/:id" element={<Accommodation data={accommodations} loading={isLoading} error={error} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
