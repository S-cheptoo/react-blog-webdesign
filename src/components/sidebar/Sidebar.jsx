import React from 'react';
import "./sidebar.css"

function Sidebar() {
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
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Books</li>
            <li className="sidebarListItem">Cinema</li>
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