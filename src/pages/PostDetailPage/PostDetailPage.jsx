import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './PostDetailPage.css';
import * as postsAPI from '../../utilities/posts-api';


export default function PostDetailPage(){
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id);
    const [onePost, setOnePost] = useState();

    async function deletePost(){
      navigate(-1);
      await postsAPI.deletePost(id);
    }

    useEffect (() => {
        async function getPost(){
          const post = await postsAPI.getOne(id);
          console.log(post)
          setOnePost(post);
        }
        getPost();
      }, [])

    return (
      <div className='postCell'>
        <div id='postText'>
          <h1>{onePost ? onePost.body : null}</h1>
          <h4>{onePost ? `${onePost.location.city}, ${onePost.location.state}` : null}</h4>
        </div>
        <Link to={`/post/${id}/update`} className='updateLink'>Update</Link>
        <button onClick={deletePost}>Delete</button>
      </div>
    )
}