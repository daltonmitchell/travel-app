import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './PostDetailPage.css';
import * as postsAPI from '../../utilities/posts-api';


export default function PostDetailPage(){
    const {id} = useParams()
    console.log(id)
    const [onePost, setOnePost] = useState();

    useEffect (() => {
        async function getPost(){
          const post = await postsAPI.getOne(id);
          console.log(post)
          setOnePost(post);
        }
        getPost();
      }, [])

    return (
      <div class='postCell'>
        <h1>{onePost ? onePost.body : null}</h1>
        <h2>{onePost ? `${onePost.location.city}, ${onePost.location.state}` : null}</h2>
        <Link to={`/post/${id}/update`}>Update</Link>
      </div>
    )
}