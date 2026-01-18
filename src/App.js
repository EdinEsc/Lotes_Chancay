import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton"; 
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Conocenos/Nosotros";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App pt-20 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conocenos" element={<Nosotros />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
