import React, { useState, useEffect } from "react";
import "./css/style.css";
import "./font/dot.ttf";
import face from "./img/face.png";
import minarrow from "./img/min.png";
import hrarrow from "./img/hour.png";
import secarrow from "./img/sec.png";

function Clock(prop) {
  let [sec, setSec] = useState(0);
  let [min, setMin] = useState(0);
  let [hr, setHr] = useState(0);

  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/Asia/${prop.name}`)
      .then((res) => res.json())
      .then((date) => {
        let timestring = date.datetime.slice(0, 19);

        console.log(new Date(timestring).getHours());

        setInterval(() => {
          setSec(new Date().getSeconds());
          setMin(new Date().getMinutes());
          setHr(new Date(timestring).getHours());
          console.log("wamieri");
        }, 1000);
      });
  }, []);

  return (
    <>
      <main>
        <img src={face} alt="sd" />
        <div className="clock">
          <div className="hrarrow">
            <img src={hrarrow} alt="sd" style={{ transform: `rotate(${hr * 30}deg)`, transformOrigin: "50% 84%" }} />
          </div>
          <div className="minarrow">
            <img src={minarrow} alt="sd" style={{ transform: `rotate(${min * 6}deg)`, transformOrigin: "50% 88%" }} />
          </div>
          <div className="secarrow">
            <img src={secarrow} alt="sd" style={{ transform: `rotate(${sec * 6}deg)`, transformOrigin: "50% 82%" }} />
          </div>
        </div>
        <div className="town">{prop.name}</div>
      </main>
    </>
  );
}

export default Clock;
