import React from 'react'
import { useLocation } from 'react-router-dom';
import "./singlepost.css";

function SinglePost() {
    const location =useLocation()
  return (
    <div className="singlepost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?cs=srgb&dl=pexels-chevanon-photography-302899.jpg&fm=jpg"
            alt="" 
            className="singlePostImg" 
            />
            <h1 className="singlePostTitle">Lorem ipsum dolor.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuth">
                    Author: <b>Sandra</b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Saepe, officiis at debitis repudiandae sint dolorum aliquid, culpa esse minus exercitationem minima totam quisquam
                    deserunt a cum mollitia omnis expedita nam?
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Saepe, officiis at debitis repudiandae sint dolorum aliquid, culpa esse minus exercitationem minima totam quisquam
                    deserunt a cum mollitia omnis expedita nam?
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Saepe, officiis at debitis repudiandae sint dolorum aliquid, culpa esse minus exercitationem minima totam quisquam
                    deserunt a cum mollitia omnis expedita nam?
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Saepe, officiis at debitis repudiandae sint dolorum aliquid, culpa esse minus exercitationem minima totam quisquam
                    deserunt a cum mollitia omnis expedita nam?
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Saepe, officiis at debitis repudiandae sint dolorum aliquid, culpa esse minus exercitationem minima totam quisquam
                    deserunt a cum mollitia omnis expedita nam?
            </p>
        </div>
    </div>
  )
}

export default SinglePost;