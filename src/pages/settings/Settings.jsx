import React from 'react'
import "./settings.css";
// import Sidebar from './../../components/sidebar/Sidebar';

function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDelete">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                    className="prof"
                    src="https://images.pexels.com/photos/12576758/pexels-photo-12576758.jpeg?cs=srgb&dl=pexels-edgar-santana-12576758.jpg&fm=jpg"
                    alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label >Username:</label>
                <input type="text" placeholder="Sandra"/>
                <label >Email:</label>
                <input type="text" placeholder="sandra@gmail.com"/>
                <label >Password:</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
    </div>
  )
}

export default Settings;