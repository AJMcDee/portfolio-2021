export function processYouTubeFeed(data) {
  return data.items
    .filter((item) => item.snippet.title !== "Private video")
    .map((item) => {
      const url = `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`;
      const image = item.snippet.thumbnails.medium.url;
      const title = item.snippet.title.split("|")[0];

      return { url: url, social_image: image, title: title };
    });
}

export const fetchYouTube =
  "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL6Xx4b2dsNzwAeTJ6QnlmYhvRlMgvxRNZ&key=AIzaSyCrsJw42t8ug4-LzAHGIHICbtbA1RLkS9g&part=snippet&maxResults=10";
