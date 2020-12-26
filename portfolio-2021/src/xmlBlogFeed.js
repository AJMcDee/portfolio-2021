function xmlBlogFeed(url) {
let latest5 = []
fetch(url)
  .then((response) => response.json())
  .then((data) => {
      for (let i = 0; i < 5; i++) {
          latest5.push(data[i])
      }
  })

  return latest5
}




export default xmlBlogFeed