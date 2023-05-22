// unmounted

import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("unmounted");
      clearInterval(timer);
    };
  }, []);

  return <p>Current time: {time}</p>;
}
