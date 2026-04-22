import React from "react";
import { Link } from "react-router";

const TheHeader: React.FC = () => {
  return (
    <header className="m-2, p-2 flex items-center justify-around bg-blue-50 border-b shadow-xl">
      <div>
        <h1 className="text-5xl">English web application</h1>
        <p>create by Oleksandr Shevhcenko</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Link to="/">Dictionary</Link>
        <Link to="/training">Training</Link>
        <Link to="/grammar">Grammar</Link>
      </div>
    </header>
  );
};

export default TheHeader;
