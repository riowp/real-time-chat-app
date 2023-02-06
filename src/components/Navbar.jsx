import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">My Chat App</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1629196753813-8b4827ddc7c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        <span>Rio</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
