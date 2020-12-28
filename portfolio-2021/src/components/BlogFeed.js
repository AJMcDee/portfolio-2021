
import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

 function BlogFeed({HeaderH3, LinkBoxLink}) {

 const [itemList, setItemList] = useState([])
const getPosts = async () => {
    try {
     await fetch(
       "https://dev.to/api/articles?username=annajmcdougall"
     )
     .then(response => response.json())
    // Code to filter posts to more technical subjects, should the volume of posts ever warrant it
    //
    //  .then(data => {

    //      return data.filter(
    //        (post) =>
    //          post.tags.includes("javascript") ||
    //          post.tags.includes("html") ||
    //          post.tags.includes("css")
    //      );
    //  })
     .then(allPosts => {
        let finalPosts = []
        for (let i = 0; i < 9; i++) {
            finalPosts.push(allPosts[i])
        }
         setItemList(finalPosts);})
    } catch (err) {
        console.error(err.message)
    }

}

function trimDescription(fullText) {
    if (fullText.includes("AnnaJMcDougall")) {
        let sliceIndex = fullText.indexOf("AnnaJMcDougall") + "AnnaJMcDougall".length
        return fullText.slice(sliceIndex) 
    }
    if (fullText.includes("Twitter")) {
        let sliceIndex = fullText.indexOf("Twitter") + "Twitter".length
        return fullText.slice(sliceIndex)
    } else {
        return fullText
    }
}

useEffect(() => {
    getPosts()
}, [])

    return (
      <BlogFeedContainer>
        <HeaderH3>Blog Feed</HeaderH3>
        <BlogFeedCardContainer id="BlogFeed">
          {itemList.map((item, index) => {
              console.log(item)
            return (
              <Card>
                <Card.Img variant="top" src={item.social_image} />
                <Card.Body>
                  <Card.Title>{item.Title}</Card.Title>
                  <Card.Text>{trimDescription(item.description)}</Card.Text>

                    <LinkBoxLink href={item.url}>Read Post</LinkBoxLink>

                </Card.Body>
              </Card>
            );
          })}
        </BlogFeedCardContainer>
      </BlogFeedContainer>
    );

}

const BlogFeedContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw
`

const BlogFeedCardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 60vw;
* {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
    flex-basis: 30%;
    color: black;
}

img {
    width: 90%;
}
`


export default BlogFeed