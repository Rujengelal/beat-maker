import { count } from "console";
import React from "react";
import { IinstrumentNames } from "./BeatPlayer";

interface IProps {
  instrumentGrid: number[][];
  instrumentNames: IinstrumentNames[];
  stateUpdate: any;
  count: number;
  playing: boolean;
}

function BeatGrid({
  instrumentGrid,
  instrumentNames,
  stateUpdate,
  count,
  playing,
}: IProps) {
  function beatOn(a: number, b: number) {
    let _gridCopy = [...instrumentGrid];
    _gridCopy[a][b] = _gridCopy[a][b] ? 0 : 1;
    stateUpdate(_gridCopy);
  }
  return (
    <div className="beat-grid-container">
      <table className="beat-grid">
        <tbody>
          {instrumentGrid.map((val: number[], idx: number) => {
            // console.log(val);
            return (
              <tr key={idx}>
                <td key={`${idx}-0`}>{instrumentNames[idx].name}</td>
                {val.map((val1, idx1) => {
                  let _class = val1 ? "beat-active" : "beat-inactive";
                  _class += count == idx1 && playing ? " active" : " ";
                  // console.log(_class);
                  return (
                    <td
                      key={`${idx}-${idx1 + 1}`}
                      className={_class}
                      onClick={() => beatOn(idx, idx1)}
                    >
                      {/* {val1} */}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BeatGrid;
