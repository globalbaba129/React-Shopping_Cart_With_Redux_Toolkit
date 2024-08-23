import "./App.css";
import Card from "./shop/Card";
import Cartdata from "./shop/Cartdata";
import Ceckout from "./shop/Ceckout";
import Navbar from "./shop/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Cartdata" element={<Cartdata />} />
          <Route path="/Ceckout" element={<Ceckout />} />
          <Route path="/" element={<Card />} /> {/* Default route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
