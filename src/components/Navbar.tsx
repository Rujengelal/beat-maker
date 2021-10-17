// import { cleanup } from "@testing-library/react";
import React, { useContext, useEffect, useState } from "react";
import contextValue from "../store";
let INSTRUMENTS = ["Drum", "Snare", "Cowbell", "Loudbass", "major"];

function Navbar() {
  const context = useContext(contextValue);
  // useEffect(() => {}, []);
  const [fileName, setFileName] = useState(() => {
    let values = localStorage.getItem("project");

    let data = JSON.parse(values ? values : "");
    if (data.name) return data.name;
    return "Untitled";
  });
  return (
    <div className="navbar">
      <input
        className="file-name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value ? e.target.value : "")}
      />
      <div className="navbar-nav">
        <ul className="nav-list">
          <li
            className="nav-item "
            onClick={() => {
              localStorage.removeItem("project");
              context.setGrid(
                Array(INSTRUMENTS.length)
                  .fill(0)
                  .map((v, i) => {
                    return Array(20).fill(0);
                  })
              );
              context.setBpm(120);
              setFileName("Untitled");
            }}
          >
            New
          </li>
          {/* <li className="nav-item">Open</li> */}
          <li
            className="nav-item"
            onClick={() => {
              localStorage.setItem(
                "project",
                JSON.stringify({
                  name: fileName,
                  grid: context.grid,
                  bpm: context.bpm,
                })
              );
            }}
          >
            Save
          </li>
          {/* <li className="nav-item">About</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
