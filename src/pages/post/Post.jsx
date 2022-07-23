import React from 'react';
import "./post.css";

function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg"
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Books</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
    </div>
  )
}

export default Post;