import styled from "styled-components";
import BlogFeed from "./BlogFeed";
import YouTubeFeed from "./YouTubeFeed";
import React from "react";
import { Timeline } from "react-twitter-widgets";
import { HeaderH2, HeaderH3 } from "./elements/Headers";

function SocialFeed() {
  return (
    <SocialFeedContainer>
      <HeaderH2>Social Media</HeaderH2>
      <SocialFeedBox>
        <BlogFeed />
        <YouTubeFeed />
        <section>
          <HeaderH3>Twitter Feed</HeaderH3>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "AnnaJMcDougall",
            }}
            options={{
              theme: "dark",
              height: 200,
            }}
          />
        </section>
      </SocialFeedBox>
    </SocialFeedContainer>
  );
}

const SocialFeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialFeedBox = styled.div`
  min-height: 200px;
  min-width: 50vw;
  max-width: 80vw;
  min-width: 200px;
  border: 5px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: black;
  padding: 2rem;
  & > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    border: 2px solid white;
    padding: 2rem;
    margin: 1rem;
    height: 360px;
    width: 360px;
  }
  @media (max-width: 1000px) {
    max-width: 90vw;
  }
`;
export default SocialFeed;
