import { Outlet } from "react-router-dom";
import Navbar from "./NavBar/NavBar";
import Footer from "./footer/Footer";
import "./layout.css";
const Layout = () => {
  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
