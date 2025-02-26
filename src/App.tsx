
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import {Inicio} from "./pages/Inicio"; 
import Usuarios from "./pages/Usuarios"; // 
import {Productos} from "./pages/Productos";
import {Inventario} from "./pages/Inventario";
import Movimientos from "./pages/Movimientos";
import {Pedidos} from "./pages/Pedidos";
import {Proveedores} from "./pages/Proveedores";
import AcercaDe from "./pages/AcercaDe";
import {Register} from "./pages/Register";
import Login from "./pages/Login"

import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/movimientos" element={<Movimientos />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

