import React, { useRef } from "react";
import Control from "./Control";
import Line from "./Line";
import Video from "./Video";
import playLogo from "../img/play.png";
import pauseLogo from "../img/pause.png";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const App = () => {
  const refVideo = useRef(null);
  const refLine = useRef(null);

  function handler(e) {
    if (refVideo.current.paused) {
      refVideo.current.play();
      e.target.style.backgroundImage = `url(${pauseLogo})`;
      refVideo.current.addEventListener("timeupdate", function () {
        console.log(refVideo.current.currentTime / refVideo.current.duration);
        refLine.current.style.width = `${(refVideo.current.currentTime / refVideo.current.duration) * 100}%`;
      });
    } else {
      refVideo.current.pause();
      e.target.style.backgroundImage = `url(${playLogo})`;
    }
  }

  return (
    <>
      <Main>
        <Line refLine={refLine} />
        <Video refVideo={refVideo} />
      </Main>
      <Control handler={handler} />
    </>
  );
};

export default App;
