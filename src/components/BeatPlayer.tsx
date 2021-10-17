import React, { useContext, useEffect, useState } from "react";
import BeatGrid from "./BeatGrid";
import contextValue from "../store";
import { FaPlay, FaStop } from "react-icons/fa";
let INSTRUMENTS = ["Drum", "Snare", "Cowbell", "Loudbass", "major"];
export interface IinstrumentNames {
  name: string;
  playerId: number;
}

function BeatPlayer() {
  const context = useContext(contextValue);
  let {
    grid: instrumentGrid,
    setGrid: setInstrumentGrid,
    bpm,
    setBpm,
  } = context;
  // const [bpm, setBpm] = useState(120);
  // const [instrumentGrid, setInstrumentGrid] = useState<number[][]>(() => {
  //   const mat = Array(INSTRUMENTS.length)
  //     .fill(0)
  //     .map((v, i) => {
  //       return Array(20).fill(0);
  //     });
  //   return mat;
  // });
  const [instrumentNames, setInstrumentNames] = useState<IinstrumentNames[]>(
    () => {
      return [
        { name: "Drum", playerId: 0 },
        { name: "Snare", playerId: 1 },
        { name: "Cowbell", playerId: 2 },
        { name: "Loudbass", playerId: 3 },
        { name: "major", playerId: 4 },
      ];
    }
  );
  const [playing, setPlaying] = useState(false);

  const [current, setCurrent] = useState(0);
  const [audioPlayers, setAudioPlayers] = useState<(any | undefined)[]>(() => {
    return INSTRUMENTS.map((i) => {
      try {
        return new Audio("./sounds/" + i + ".wav");
      } catch (e) {
        console.log("error ", e);
      }
    });
  });

  interface IBeatMaker {
    grid?: number[][];
    players?: any[];
    count: number;
    playing?: boolean;
  }
  let count = 0;

  useEffect(() => {
    let interval: any;
    // setCount((_) => 0);
    if (playing) {
      // count = 0;
      interval = setInterval(() => {
        // console.log("time", new Date().getTime());

        if (count >= instrumentGrid[0].length) count = 0;
        for (let i = 0; i < instrumentGrid.length; i++) {
          setCurrent(count);
          // console.log(instrumentGrid[0].length, i, count);
          if (instrumentGrid[i][count]) {
            audioPlayers[instrumentNames[i].playerId]?.play();
          }
        }
        count++;
        // setCount(count + 1);
        // console.log("this happened", count);
      }, 1000 / (bpm / 60));
      // console.log(interval);
      // console.log("render happened");
    }
    // count = 0;
    setCurrent(-1);

    return () => {
      clearInterval(interval);
      // console.log("beat finish");
    };
  }, [playing, bpm]);

  return (
    <div className="player-interface">
      <BeatGrid
        instrumentGrid={instrumentGrid}
        instrumentNames={instrumentNames}
        stateUpdate={setInstrumentGrid}
        count={current}
        playing={playing}
      />
      <div className="player-controls">
        <button onClick={() => setPlaying(!playing)}>
          {playing ? (
            <FaStop size="2rem" color="white" />
          ) : (
            <FaPlay size="2rem" color="white" />
          )}
        </button>
        <input
          type="text"
          value={bpm}
          onChange={(e) =>
            setBpm(parseInt(e.target.value ? e.target.value : "0"))
          }
        />
        bpm
      </div>
    </div>
  );
}

export default BeatPlayer;
