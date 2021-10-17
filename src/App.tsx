import React, { FC, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import BeatPlayer from "./components/BeatPlayer";
import { Howl } from "howler";
import context from "./store";

let INSTRUMENTS = ["Drum", "Snare", "Cowbell", "Loudbass", "major"];

const App: FC = () => {
  const [bpm, setBpm] = useState(120);
  const [instrumentGrid, setInstrumentGrid] = useState<number[][]>(() => {
    const mat = Array(INSTRUMENTS.length)
      .fill(0)
      .map((v, i) => {
        return Array(20).fill(0);
      });
    return mat;
  });
  useEffect(() => {
    let values = localStorage.getItem("project");

    let data = JSON.parse(values ? values : "");
    if (data.grid) setInstrumentGrid(data.grid);
    if (data.bpm) setBpm(data.bpm);
    console.log("APP loaded once");
    return () => {
      console.log("APP closed once");
    };
  }, []);

  return (
    <>
      <context.Provider
        value={{
          grid: instrumentGrid,
          bpm,
          setBpm,
          setGrid: setInstrumentGrid,
        }}
      >
        <Navbar />
        <BeatPlayer />
      </context.Provider>
    </>
  );
};
export default App;
