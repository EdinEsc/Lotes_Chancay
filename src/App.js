import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton"; 

// Páginas
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Conocenos/Nosotros";
import Contacto from "./pages/Contacto/Contacto";
import MapaLotes from "./pages/MapaLotes/MapaLotes";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App pt-20 flex flex-col min-h-screen">
        {/* 🔹 Header fijo arriba */}
        <Header />

        {/* 🔹 Contenido principal */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conocenos" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/mapa-lotes" element={<MapaLotes />} />
          </Routes>
        </div>

        {/* 🔹 Footer en todas las páginas */}
        <Footer />
      </div>

      {/* 🟢 Botón flotante de WhatsApp visible en TODAS las páginas */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;
