import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/style.css";
import "./font/dot.ttf";

function Clock(prop) {
  let [sec, setSec] = useState(0);
  let [min, setMin] = useState(0);
  let [hr, setHr] = useState(0);

  useEffect(() => {
    axios.get(`https://worldtimeapi.org/api/timezone/Asia/${prop.name}`).then((date) => {
      let timestring = date.data.datetime.slice(0, 19);
      setInterval(() => {
        setSec(new Date().getSeconds());
        setMin(new Date().getMinutes());
        setHr(new Date(timestring).getHours());
      }, 1000);
    });
  }, []);

  return (
    <>
      <main>
        <img src="./img/face.png" alt="sd" />
        <div className="clock">
          <div className="hrarrow">
            <img src="./img/hour.png" alt="hour" style={{ transform: `rotate(${hr * 30 + (30 / 60) * min}deg)`, transformOrigin: "50% 84%" }} />
          </div>
          <div className="minarrow">
            <img src="./img/min.png" alt="minute" style={{ transform: `rotate(${min * 6}deg)`, transformOrigin: "50% 88%" }} />
          </div>
          <div className="secarrow">
            <img src="./img/sec.png" alt="second" style={{ transform: `rotate(${sec * 6}deg)`, transformOrigin: "50% 82%" }} />
          </div>
        </div>
        <div className="town">{prop.name}</div>
      </main>
    </>
  );
}

export default Clock;
