import React, { FC } from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import BeatPlayer from "./components/BeatPlayer";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <BeatPlayer />
    </>
  );
};
export default App;
