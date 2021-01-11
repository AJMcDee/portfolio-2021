import styled from "styled-components";
import React from "react";
import { Timeline } from "react-twitter-widgets";
import { HeaderH2, HeaderH3 } from "./elements/Headers";
import SocialFeedCard from "./SocialFeedCard";
import {
  processYouTubeFeed,
  fetchYouTube,
} from "./functions/processYouTubeFeed.js";
import { processBlogFeed, fetchDevTo } from "./functions/processBlogFeed.js";

function SocialFeed() {
  let timelineHeight = window.matchMedia("(min-width: 768px)").matches
    ? 200
    : 300;

  return (
    <SocialFeedContainer id="SocialFeed">
      <HeaderH2>Social Media</HeaderH2>
      <SocialFeedBox>
        <SocialFeedCard
          title="YouTube Feed"
          process={processYouTubeFeed}
          fetchUrl={fetchYouTube}
          buttonText="Watch Video"
        />
        <SocialFeedCard
          title="Blog Feed"
          process={processBlogFeed}
          fetchUrl={fetchDevTo}
          buttonText="Read Post"
        />
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
  box-shadow: 0px 0px 5px fuchsia;

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

  @media (min-width: 1200px) {
    max-width: 80vw;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const TwitterFeed = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  @media (min-width: 360px) {
    height: 300px;
    width: 270px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
    height: unset;
  }
`;
export default SocialFeed;
