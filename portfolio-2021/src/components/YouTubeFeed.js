import { useState, useEffect } from "react";
import styled from "styled-components";
import SingleCardCarousel from "./SingleCardCarousel";
import ItemLink from "./elements/ItemLink";

function YouTubeFeed({ HeaderH3 }) {
  const placeholder = {
    url: "https://www.youtube.com/watch?v=5o4P8lESTF0",
    social_image: "https://i.ytimg.com/vi/5o4P8lESTF0/mqdefault.jpg",
    title: "Parameter vs Argument",
  };

  const [currentItem, setCurrentItem] = useState({
    item: { ...placeholder },
    index: 0,
  });
  const [itemList, setItemList] = useState([currentItem]);

  const getPosts = async () => {
    try {
      await fetch(
        "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL6Xx4b2dsNzwAeTJ6QnlmYhvRlMgvxRNZ&key=AIzaSyCrsJw42t8ug4-LzAHGIHICbtbA1RLkS9g&part=snippet&maxResults=10"
      )
        .then((response) => response.json())
        .then((dataOriginal) => {
          console.log(dataOriginal.items[2]);
          return dataOriginal;
        })
        .then((data) =>
          data.items
            .filter((item) => item.snippet.title !== "Private video")
            .map((item) => {
              console.log(item);
              const url = `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`;
              const image = item.snippet.thumbnails.medium.url;
              const title = item.snippet.title.split("|")[0];
              console.log(url, image, title);
              return { url: url, social_image: image, title: title };
            })
        )
        .then((allPosts) => {
          console.log(allPosts);
          setItemList(allPosts);
          setCurrentItem({ item: itemList[0], index: 0 });
        });
    } catch (err) {
      console.error(err.message);
    }
  };

  function handleNext() {
    const currentIndex = currentItem.index;
    const newIndex = (currentIndex + 1) % itemList.length;

    setCurrentItem({ item: { ...itemList[newIndex] }, index: newIndex });
  }

  function handlePrev() {
    const currentIndex = currentItem.index;
    const newIndex =
      currentIndex === 0 ? itemList.length - 1 : currentIndex - 1;
    setCurrentItem({ item: { ...itemList[newIndex] }, index: newIndex });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <BlogFeedContainer>
      <HeaderH3>YouTube Feed</HeaderH3>

      <SingleCardCarousel
        currentItem={currentItem}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <ItemLink currentItem={currentItem} ButtonText="Watch Video" />
    </BlogFeedContainer>
  );
}

const BlogFeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0px;
`;

export default YouTubeFeed;
