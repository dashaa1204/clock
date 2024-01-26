import { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [clock, setClock] = useState("");
  function updateClock() {
    let time = new Date().toLocaleTimeString();
    setClock(time);
  }
  setInterval(updateClock, 1000);
  return <div>{time}</div>;
};

export default Clock;
