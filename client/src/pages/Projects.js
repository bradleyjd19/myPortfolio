import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel"

class Projects extends Component {

  render() {

    const imageBlock = {
      width: "225px",
      height: "225px",
      margin: "0 auto"
    }

    const infoBlock = {
      color: "white",
      fontSize: "1.2rem",
      backgroundColor: "#577284",
      margin: "0 auto",
      padding: "0.8rem",
      width: "70%",
      border: "2px solid white"
    }

    const spacing = {
      paddingTop: "14rem",
      margin: "0 auto"
    }

    return (
      <div>

        <div className="container" id="projectsContainer">

          <Carousel
            style={{ width: "85%", margin: "0 auto" }}
            interval="8000">
            <Carousel.Item>
              <img
                className="d-block"
                src={require("../images/labaid.jpg")}
                alt="LabAid"
                style={imageBlock}
              />
              <Carousel.Caption style={infoBlock}>
                <h2>LabAid</h2>
                <p>A daily management system for the laboratory</p>
                <p><a id="codeLink" href="http://www.labaid.co" target="_blank" rel="noopener noreferrer">Demo</a></p>
                <p><a id="codeLink" href="https://bradleyjd19.github.io/labaid-info/" target="_blank" rel="noopener noreferrer">Info</a></p>
              </Carousel.Caption>
              <h1 style={spacing}> </h1>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={require("../images/letterkenny.jpg")}
                alt="Letterkenny Click"
                style={imageBlock}
              />
              <Carousel.Caption style={infoBlock}>
                <h2>Letterkenny Click Game</h2>
                <p>A Letterkenny-themed memory game</p>
                <p><a id="codeLink" href="https://letterkennyclick.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a></p>
                <p><a id="codeLink" href="https://github.com/bradleyjd19/clicky-game" target="_blank" rel="noopener noreferrer">Code</a></p>
              </Carousel.Caption>
              <h1 style={spacing}> </h1>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={require("../images/complement.jpg")}
                alt="Complement"
                style={imageBlock}
              />
              <Carousel.Caption style={infoBlock}>
                <h2>Complement</h2>
                <p>A food and beer pairing app</p>
                <p><a id="codeLink" href="https://bradleyjd19.github.io/Complement/" target="_blank" rel="noopener noreferrer">Demo</a></p>
                <p><a id="codeLink" href="https://github.com/bradleyjd19/Complement" target="_blank" rel="noopener noreferrer">Code</a></p>
              </Carousel.Caption>
              <h1 style={spacing}> </h1>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={require("../images/giftastic.jpg")}
                alt="NCAA Giftastic"
                style={imageBlock}
              />
              <Carousel.Caption style={infoBlock}>
                <h2>NCAA Giftastic</h2>
                <p>Gifs and fun for college basketball fans</p>
                <p><a id="codeLink" href="https://bradleyjd19.github.io/GifTastic/" target="_blank" rel="noopener noreferrer">Demo</a></p>
                <p><a id="codeLink" href="https://github.com/bradleyjd19/GifTastic" target="_blank" rel="noopener noreferrer">Code</a></p>
              </Carousel.Caption>
              <h1 style={spacing}> </h1>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={require("../images/trivia.jpg")}
                alt="March Madness Trivia"
                style={imageBlock}
              />
              <Carousel.Caption style={infoBlock}>
                <h2>March Madness Trivia</h2>
                <p>A fun quiz for NCAA tournament fans</p>
                <p><a id="codeLink" href="https://bradleyjd19.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer">Demo</a></p>
                <p><a id="codeLink" href="https://github.com/bradleyjd19/TriviaGame" target="_blank" rel="noopener noreferrer">Code</a></p>
              </Carousel.Caption>
              <h1 style={spacing}> </h1>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={require("../images/crystal.jpg")}
                alt="Crystal Caverns"
                style={imageBlock}
              />
              <Carousel.Caption style={infoBlock}>
                <h2>Crystal Caverns</h2>
                <p>A Number Guessing Game</p>
                <p><a id="codeLink" href="https://bradleyjd19.github.io/Unit-4-Game/" target="_blank" rel="noopener noreferrer">Demo</a></p>
                <p><a id="codeLink" href="https://github.com/bradleyjd19/Unit-4-Game" target="_blank" rel="noopener noreferrer">Code</a></p>
              </Carousel.Caption>
              <h1 style={spacing}> </h1>
            </Carousel.Item>
          </Carousel>

        </div>

      </div>
    )
  }

}

export default Projects;