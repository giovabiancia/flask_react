import React from "react";

import { useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

function HomePage() {
  // new line start
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  function getData() {
    setLoading(true);
    axios({
      method: "GET",
      url: "/profile",
    })
      .then((response) => {
        setLoading(false);
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  //end of new line

  return (
    <div className="HomePage">
      <header className="HomePage-header">
        {loading ? (
          <p>Loading</p>
        ) : (
          <div>
            <p>To get your profile details: </p>
            <button onClick={getData}>Click me</button>
            {profileData && (
              <div>
                <p>Profile name: {profileData.profile_name}</p>
                <p>About me: {profileData.about_me}</p>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default HomePage;
