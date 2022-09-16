import Header from "../../components/header/Header"
import { useEffect, useState } from "react";
import "./home.css"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/sidebar/SideBar"
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts" + search);
      setPosts(res.data)
    };
    fetchPosts();
  }, [search]);
  return (
    <>
    <Header/>
    <div className="home">
        <Posts posts={posts}/>
        <SideBar/>
    </div>
    </>
)
}
