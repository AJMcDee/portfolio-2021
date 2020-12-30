import { useState, useEffect } from "react";
import styled from "styled-components";
import SingleCardCarousel from "./SingleCardCarousel";
import ItemLink from "./elements/ItemLink";

function BlogFeed({ HeaderH3 }) {
  const placeholder = {
    url: "https://dev.to/annajmcdougall/5-tips-for-learning-grid-46l2",
    social_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--dClSjJwe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/0ohoamphlfxut67om02l.png",
    title: "5 Tips for Learning Grid",
  };

  const [currentItem, setCurrentItem] = useState({
    item: { ...placeholder },
    index: 0,
  });
  const [itemList, setItemList] = useState([currentItem]);

  const getPosts = async () => {
    try {
      await fetch("https://dev.to/api/articles?username=annajmcdougall")
        .then((response) => response.json())

        // Code to filter posts to more technical subjects
        .then((data) => {
          return data
            .filter(
              (post) =>
                post.tags.includes("javascript") ||
                post.tags.includes("html") ||
                post.tags.includes("css")
            )
            .map((post) => {
              return {
                url: post.url,
                title: post.title,
                social_image: post.social_image,
              };
            });
        })
        .then((allPosts) => {
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
    setCurrentItem({
      item: { ...itemList[newIndex] },
      index: newIndex,
    });
  }

  function handlePrev() {
    const currentIndex = currentItem.index;
    const newIndex =
      currentIndex === 0 ? itemList.length - 1 : currentIndex - 1;
    setCurrentItem({
      item: { ...itemList[newIndex] },
      index: newIndex,
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <BlogFeedContainer>
      <HeaderH3>Blog Feed</HeaderH3>

      <SingleCardCarousel
        currentItem={currentItem}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <ItemLink currentItem={currentItem} ButtonText="Read Post" />
    </BlogFeedContainer>
  );
}

const BlogFeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0px;
`;

export default BlogFeed;
