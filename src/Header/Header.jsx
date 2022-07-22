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
        <img className="headerImg" src="https://www.pexels.com/photo/brown-wooden-shelf-and-beige-fabric-sofa-1125130/" alt="" />
    </>
  );
}

export default Header;