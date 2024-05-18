// Navbar2.js

import React from "react";

const Navbarnew = () => {
  return (
    <nav
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <a
          href="#platform"
          style={{ color: "black", textDecoration: "none", margin: "0 10px" }}
        >
          THE PLATFORM
        </a>
        <a
          href="#company"
          style={{ color: "black", textDecoration: "none", margin: "0 10px" }}
        >
          COMPANY
        </a>
        <a
          href="#demo"
          style={{ color: "black", textDecoration: "none", margin: "0 10px" }}
        >
          Book a demo
        </a>
      </div>
    </nav>
  );
};

export default Navbarnew;
