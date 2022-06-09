import { useState, useEffect } from "react";

export default function DateTime() {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <p>
        <img
          className="icons"
          alt="clockIcon"
          src={require("../assets/Clock.png")}
        />
        {date.toDateString()} {date.toLocaleTimeString()}
      </p>
    </>
  );
}
