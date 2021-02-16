import styled from "styled-components";

function AboutVideo() {
  return (
    <StyledVideo>
      <iframe
        title="aboutVideo"
        src="https://www.youtube.com/embed/FWpXa9sVFzw"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </StyledVideo>
  );
}

const StyledVideo = styled.div`
  text-align: center;

  iframe {
    width: 200px;
    height: 120px;
    @media (min-width: 360px) {
      width: 290px;
      height: 180px;
    }
    @media (min-width: 768px) {
      width: 500px;
      height: 360px;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

export default AboutVideo;
