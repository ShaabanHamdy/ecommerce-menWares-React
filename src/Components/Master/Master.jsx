import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import SideCart from "../SideCart/SideCart";

export default function Master() {
  return (
    <>
      <Navbar />
      <SideCart/>
      <Outlet />
      <Footer />
    </>
  );
}
