import React from "react";

export function SubmitBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginTop: "1rem", marginBottom: "5rem", backgroundColor: "#577284", color: "white", fontWeight: "bold", border: "1px solid white", boxShadow: "5px 10px 8px #888888" }} className="btn">
      {props.children}
    </button>
  );
}