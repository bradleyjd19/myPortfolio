import React from "react";
import "./style.css";

function Footer() {

  return (
    <footer className="page-footer font-small">
      <div className="container" id="container-footer">
        <div className="row" id="row-footer">
          <div className="col-md-4 offset-md-4 text-center my-auto" id="footer-links">
            <a href="https://github.com/bradleyjd19" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-sm white-text mr-4 ml-4 fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/bradleyjd19/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in fa-sm white-text mr-4 ml-4 fa-2x"></i>
            </a>
            <a href="https://drive.google.com/file/d/1HvlhSRgwjSLicQxKjG4KOjXLIz4MmLD5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <i className="far fa-file fa-sm white-text mr-4 ml-4 fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer;