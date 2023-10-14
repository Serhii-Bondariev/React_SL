import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "fdvsdvvb", body: "zescription" },
    { id: 2, title: "zzdddzd", body: "Description" },
    { id: 3, title: "aaaadd", body: "sescription" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }}></hr>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by..."
          options={[
            { value: "title", name: "By name" },
            { value: "body", name: "By descr." },
          ]}
        ></MySelect>
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Bracking News" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Nothing new happened.</h1>
      )}
    </div>
  );
}

export default App;
