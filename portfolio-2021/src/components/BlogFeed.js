import xmlBlogFeed from "../xmlBlogFeed"
import {useState, useEffect} from 'react'
import { render } from "react-dom"


 function BlogFeed() {

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
     .then(finalPosts => setItemList(finalPosts))

    } catch (err) {
        console.error(err.message)
    }

}

useEffect(() => {
    getPosts()
}, [])

    return (
      <div>
{itemList.map(item => {
    return <p>{item.title}</p>
})}
      </div>
    );




}

export default BlogFeed