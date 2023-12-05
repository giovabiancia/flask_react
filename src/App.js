import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
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
    <div className="App">
      <header className="App-header">
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

export default App;
