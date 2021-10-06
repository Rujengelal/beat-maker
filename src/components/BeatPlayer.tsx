import React, { useEffect, useState } from "react";
import BeatGrid from "./BeatGrid";

let INSTRUMENTS = ["Drum", "Snare"];

export interface IinstrumentNames {
  name: string;
  playerId: number;
}

function BeatPlayer() {
  const [bpm, setBpm] = useState(120);
  const [instrumentGrid, setInstrumentGrid] = useState<number[][]>(() => {
    const mat = Array(3)
      .fill(0)
      .map((v, i) => {
        return Array(10).fill(0);
      });
    return mat;
  });
  const [instrumentNames, setInstrumentNames] = useState<IinstrumentNames[]>(
    () => {
      return [
        { name: "Drum", playerId: 1 },
        { name: "Snare", playerId: 2 },
        { name: "Drum", playerId: 1 },
      ];
    }
  );
  const [playing, setPlaying] = useState(false);
  const [audioPlayers, setAudioPlayers] = useState<HTMLAudioElement[]>(() => {
    return INSTRUMENTS.map((i) => new Audio("./sounds" + i + ".wav"));
  });

  // useEffect(() => {
  //   let players = instrumentGrid.map((val: number[], idx: number) => {
  //     return val.map((val1, idx1) => {
  //       return new Audio(instrumentNames[idx] + ".wav");
  //     });
  //   });
  //   setAudioPlayers(players);
  //   con
  //   return () => {
  //     // cleanup
  //   };
  // }, [instrumentGrid]);

  return (
    <>
      <BeatGrid
        instrumentGrid={instrumentGrid}
        instrumentNames={instrumentNames}
      />
      <div className="player-controls">
        <button onClick={() => setPlaying(!playing)}>
          {playing ? "Stop" : "Play"}
        </button>
        <input
          type="text"
          value={bpm}
          onChange={(e) => setBpm(parseInt(e.target.value))}
        />
      </div>
    </>
  );
}

export default BeatPlayer;
