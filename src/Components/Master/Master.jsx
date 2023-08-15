
import Navbar from "../Navbar/Navbar";
import SideCart from "../SideCart/SideCart";
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
