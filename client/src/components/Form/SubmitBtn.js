import React from "react";

export function SubmitBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginTop: "1rem", marginBottom: "3rem", backgroundColor: "#F96714", color: "white", fontWeight: "bold", border: "1px solid #2A4B7C", boxShadow: "5px 10px 8px #888888" }} className="btn">
      {props.children}
    </button>
  );
}