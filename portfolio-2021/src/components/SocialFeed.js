import styled from "styled-components";
import BlogFeed from "./BlogFeed";
import YouTubeFeed from "./YouTubeFeed";
import React from "react";
import { Timeline } from "react-twitter-widgets";
import { HeaderH2, HeaderH3 } from "./elements/Headers";

function SocialFeed() {
  let timelineHeight = window.matchMedia("(min-width: 768px)").matches
    ? 200
    : 300;

  return (
    <SocialFeedContainer id="SocialFeed">
      <HeaderH2>Social Media</HeaderH2>
      <SocialFeedBox>
        <BlogFeed />
        <YouTubeFeed />
        <TwitterFeed>
          <HeaderH3>Twitter Feed</HeaderH3>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "AnnaJMcDougall",
            }}
            options={{
              theme: "dark",
              height: timelineHeight,
            }}
          />
        </TwitterFeed>
      </SocialFeedBox>
    </SocialFeedContainer>
  );
}

const SocialFeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;

const SocialFeedBox = styled.div`
  min-height: 200px;
  width: clamp(50vw, 80vw, 95vw);
  border: 5px solid white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  background: black;
  padding: 2rem 2rem 4rem 2rem;

  @media (min-width: 1200) {
    max-width: 80vw;
    flex-direction: row;
  }
`;

const TwitterFeed = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 300px;
  width: 270px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
    height: unset;
  }
`;
export default SocialFeed;
