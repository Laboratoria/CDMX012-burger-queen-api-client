
import React, { useState, useEffect } from "react";


export default function DateTime() {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>

    
        {date.toDateString()} {date.toLocaleTimeString()}
      
    </div>
  );
}

