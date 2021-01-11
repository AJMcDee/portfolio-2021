import { useState, useEffect } from "react";
import styled from "styled-components";
import SingleCardCarousel from "./SingleCardCarousel";
import ItemLink from "./elements/ItemLink";
import { HeaderH3 } from "./elements/Headers";

function SocialFeedCard({ title, fetchUrl, process, buttonText }) {
  const placeholder = {
    url: "https://www.youtube.com/watch?v=5o4P8lESTF0",
    social_image: "https://i.ytimg.com/vi/5o4P8lESTF0/mqdefault.jpg",
    title: "Parameter vs Argument",
  };

  const [currentItem, setCurrentItem] = useState({
    item: placeholder,
    index: 0,
  });
  const [itemList, setItemList] = useState([{ item: placeholder, index: 0 }]);
  const [animationDisplay, setAnimationDisplay] = useState("");

  useEffect(() => {
    async function getPosts() {
      try {
        await fetch(fetchUrl)
          .then((response) => response.json())
          .then((data) => process(data))
          .then((allPosts) => {
            setItemList(allPosts);
            setCurrentItem({ item: { ...allPosts[0] }, index: 0 });
          });
      } catch (err) {
        console.error(err.message);
      }
    }

    getPosts();
  }, []);

  function handleClick(e) {
    const currentIndex = currentItem.index;
    const movement = e.target.textContent;
    let newIndex;
    if (movement === "Next") {
      newIndex = (currentIndex + 1) % itemList.length;
    } else {
      newIndex = currentIndex === 0 ? itemList.length - 1 : currentIndex - 1;
    }
    setCurrentItem({ item: { ...itemList[newIndex] }, index: newIndex });
    setAnimationDisplay(animationDisplay === "blink" ? "blink2" : "blink");
  }

  return (
    <FeedContainer>
      <HeaderH3>{title}</HeaderH3>

      <SingleCardCarousel
        currentItem={currentItem}
        handleClick={handleClick}
        animationDisplay={animationDisplay}
      />
      <ItemLink
        currentItem={currentItem}
        animationDisplay={animationDisplay}
        ButtonText={buttonText}
      />
    </FeedContainer>
  );
}

const FeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0px;
`;

export default SocialFeedCard;
