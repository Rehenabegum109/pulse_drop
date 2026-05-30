
import { Outlet } from "react-router-dom";
import Navbar from "../landingPage.tsx/navbar";
import Footer from "../landingPage.tsx/footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}