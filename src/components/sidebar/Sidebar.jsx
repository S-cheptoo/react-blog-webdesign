import "./sidebar.css";
import {useState} from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats = (res.data);
    };
    getCats();
  },[]);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="sidebarImg"src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?cs=srgb&dl=pexels-chevanon-photography-302899.jpg&fm=jpg" alt=""/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map(c=>(
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sideBarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-facebook-square"></i>
              <i className="sidebarIcon fa-brands fa-twitter-square"></i>
              <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
              <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;