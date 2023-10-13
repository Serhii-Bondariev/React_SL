// import React, { useState } from "react";
import "./styles/App.css";
// import Counter from "./components/Counter";
// // import ClassCounter from "./components/ClassCounter";
// import PostItem from "./components/PostItem";
import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Hello1", body: "Description" },
    { id: 2, title: "Hello2", body: "Description" },
    { id: 3, title: "Hello3", body: "Description" },
    { id: 4, title: "Hello4", body: "Description" },
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post Title" />
        <input type="text" placeholder="Post Description" />
        <MyButton>Add Post</MyButton>
      </form>
      <PostList posts={posts} title="Bracking News HOT 1" />
    </div>
  );
}

export default App;
