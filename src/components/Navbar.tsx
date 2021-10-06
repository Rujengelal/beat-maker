import React, { useState } from "react";

function Navbar() {
  const [fileName, setFileName] = useState("Untitled");
  return (
    <div className="navbar">
      <input
        className="file-name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <div className="navbar-nav">
        <ul className="nav-list">
          <li className="nav-item">Create</li>
          <li className="nav-item">Open</li>
          <li className="nav-item">Save</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
