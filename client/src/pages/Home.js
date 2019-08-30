import React, { Component } from "react";

class Home extends Component {


  render() {

    return (
      <div>

        <div className="container d-flex justify-content-center" id="taglineContainer">
          <div className="row">
            <div className="column">
              <div id="tagline1">Analyze.</div>
              <div id="tagline1">Adapt.</div>
              <div id="tagline1">Resolve.</div>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center" id="repeatContainer">
          <div className="row">
            <div className="column">
              <div id="repeat">Repeat.</div>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center" id="introContainer">
          <div className="row">
            <div className="column">
              <div id="intro1">My name is </div>
              <div id="name">Joshua Bradley</div>
              <div id="intro2"> and I solve problems.</div>
            </div>
          </div>
        </div>

      </div >

    )
  }
}

export default Home;