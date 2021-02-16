export function processBlogFeed(data) {
  return (
    data
      // .filter(
      //   (post) =>
      //     post.tags.includes("javascript") ||
      //     post.tags.includes("html") ||
      //     post.tags.includes("css") ||
      //     post.tags.includes("node")
      // )
      .map((post) => {
        return {
          url: post.url,
          title: post.title,
          social_image: post.social_image,
        };
      })
  );
}

export const fetchDevTo = "https://dev.to/api/articles?username=annajmcdougall";
