import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ padding: "10px", textAlign: "center", background: "#ddd" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/quiz" style={{ margin: "10px" }}>Quiz</Link>
      <Link to="/monopoly" style={{ margin: "10px" }}>Monopoly</Link>
    </nav>
  );
};

export default Header;
