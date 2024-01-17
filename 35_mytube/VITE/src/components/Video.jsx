import styled from "styled-components";

const Video = ({ refVideo }) => {
  return (
    <>
      <VideoStyled ref={refVideo} poster="img/poster.jpg">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </VideoStyled>
    </>
  );
};

export default Video;

const VideoStyled = styled.video`
  max-width: 640px;
  width: 100%;
  height: auto;
  border-radius: 6px;
  background-color: transparent;
  border: 2px black solid;
`;