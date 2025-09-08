import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <div
          style={{ width: "260px" }}
          className="h-screen overflow-y-auto bg-white shadow-sm fixed top-0 left-0"
        >
          <Sidebar />
        </div>
        <div
          style={{ width: "calc(100% - 260px)", marginLeft: "260px" }}
          className="sticky top-0 p-4"
        >
          <Header />
        </div>
        <div
          style={{ width: "calc(100% - 260px)", marginLeft: "260px" }}
          className="p-4"
        >
          <div className="flex items-center gap-2 p-4 bg-white rounded mb-5">
            <Link to="/">
              <i className="ri-home-8-line"></i> Home
            </Link>{" "}
            <span>{location.pathname}</span>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
