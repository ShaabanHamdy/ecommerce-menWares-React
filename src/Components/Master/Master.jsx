
import Navbar from "../Navbar/Navbar";
import SideCart from "../Sidecart/Sidecart";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function Master() {
  return (
    <>
    
      <Navbar />
      <SideCart />
      <Outlet />
      <Footer />
    </>
  );
}
