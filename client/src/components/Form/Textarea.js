import React from "react";

export function Textarea(props) {
  return (
    <div className="form-group" style={{marginBottom: 30 }}>
      <label style={{ fontWeight: "bold", marginBottom: "1rem", color: "white", fontSize: "1.1rem" }}> {props.label}</label>
      <textarea style={{ border: "1px solid black", height: "150px", width: "60vw" }} className="form-control" {...props} />
      <small>{props.small}</small>
    </div>
  )
}