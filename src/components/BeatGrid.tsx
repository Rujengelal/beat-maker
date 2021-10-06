import React from "react";
import { IinstrumentNames } from "./BeatPlayer";

interface IProps {
  instrumentGrid: number[][];
  instrumentNames: IinstrumentNames[];
}

function BeatGrid({ instrumentGrid, instrumentNames }: IProps) {
  return (
    <>
      <table>
        <tbody>
          {instrumentGrid.map((val: number[], idx: number) => {
            console.log(val);
            return (
              <tr key={idx}>
                <td key={`${idx}-0`}>{instrumentNames[idx].name}</td>
                {val.map((val1, idx1) => {
                  return (
                    <td
                      key={`${idx}-${idx1 + 1}`}
                      className={val1 ? "beat-active" : "beat-inactive"}
                    >
                      abc
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BeatGrid;
