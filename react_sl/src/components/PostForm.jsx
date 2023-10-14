import React from "react";
import { useState } from "react";
import Myinput from "./UI/Input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});


    const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost);
    setPost({title: '', body: ''});
  }

    return (
        <form className="postForm">
        <Myinput value={post.title} onChange={e => setPost( {...post, title: e.target.value})} type="text" placeholder="Post Title" />
        <Myinput value={post.body} onChange={e => setPost( {...post, body: e.target.value})} type="text" placeholder="Post Description" />
        <MyButton onClick={addNewPost}>Add Post</MyButton>
      </form>
    );
};

export default PostForm;