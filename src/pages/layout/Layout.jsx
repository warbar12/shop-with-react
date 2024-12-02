import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./../../components/header";
import HeaderSpecialForOrder from "../../components/header/HeaderSpecialForOrder";
import Footer from "./../../components/footer";

import "./layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/order" ? <HeaderSpecialForOrder /> : <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
