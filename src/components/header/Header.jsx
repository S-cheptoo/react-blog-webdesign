import React from 'react';
import "./header.css";

function Header() {
  return (
    <>
        <div className="header">
          <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
          </div>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?cs=srgb&dl=pexels-lumn-298660.jpg&fm=jpg" alt="" />
    </>
  );
}

export default Header;