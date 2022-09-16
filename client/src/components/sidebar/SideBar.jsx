import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function SideBar() {
  const [tags,setTags]= useState([]);

  useEffect(()=>{
    const getTags=async ()=>{
      const res= await axios.get("/api/tags/")
      setTags(res.data)
    };
    getTags()
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">Tags</span>
          <ul className="sidebarList">
            {tags.map((t)=>(
              <Link to={`/?tag={t.name}`} className="link`">
              <li className="sidebarListItem">{t.name}</li>
              </Link>
              ))}
          </ul>
        </div>
    </div>
  )
}
