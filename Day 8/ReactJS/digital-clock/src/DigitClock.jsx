import { useState } from "react";

const DigitalClock = () => {
  const date = new Date(); // for date and time

  const [time, setTime] = useState(date.toLocaleTimeString());

  // console.log(date);// current date and time

  // console.log(date.toLocaleTimeString());

  // setTimeout(()=>{},1000)

  // setInterval will run on every 1000ms of interval
  setInterval(() => {
    let newTime = new Date().toLocaleTimeString();// new current time
    setTime(newTime);
  }, 1000);// 1sec

  return (
    <div className="digit-clock">
        <h2>Digital Clock</h2>
      <p>{time}</p>
    </div>
  );
};

export default DigitalClock;
