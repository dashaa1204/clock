export const Clock = (currentTime) => {
  setInterval(showTime, 1000);
  function showTime() {
    let time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();

    let currentTime = hh + mm + ss;
  }
  return <div>{currentTime}</div>;
};
