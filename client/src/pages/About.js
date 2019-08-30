import React, { Component } from "react";

class About extends Component {

  render() {

    return (
      <div>

        <div className="container" id="aboutContainer">
          <div className="row">
            <div className="column">
              <img id="bioPic" src={require("../images/selfie.jpg")} alt="Joshua D. Bradley" />

              <p id="bio">Joshua D. Bradley is a Full-Stack Developer specializing in UI/UX, with experience in React, JavaScript, Node, Express, SQL, and Mongo.</p>

              <p id="bio2">As a former laboratory management professional, he brings strong analytical and problem-solving skills to the world of coding, along with the ability to adapt to the ever-changing needs inherent in any situation.</p>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default About;