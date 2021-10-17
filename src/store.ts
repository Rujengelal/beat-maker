import { Context, createContext, useState } from "react";
// import { Store } from "redux";
// import { Context } from "vm";
interface IStore {
  grid: number[][];
  bpm: number;
  setBpm?: any;
  setGrid?: any;
}

// import React from 'react'
const Store = createContext<IStore>({ grid: [[1]], bpm: 120 });

//   export  function store({children}) {

//     return (
//       <Store.Provider>
//       {children}
//       </Store.Provider>
//     )
// }
export default Store;

// export let bpm = 120;
// export
