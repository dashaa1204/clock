import { useState } from "react";

const Stopwatch = () => {
  let [ms, setMs] = useState("0");
  let [ss, setSs] = useState("0");
  let [mm, setMm] = useState("0");
  let [hh, setHh] = useState("0");

  let stopwatch = `${hh}` + ":" + `${mm}` + ":" + `${ss}` + ":" + `${ms}`;

  return (
    <div>
      <div>{stopwatch}</div>
      <button>start</button>
      <button>stop</button>
      <button>reset</button>
    </div>
  );
};

export default Stopwatch;
