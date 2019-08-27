import React from "react";

export function Input(props) {
  return (
    <div className="form-group" style={{ marginBottom: "2rem" }}>
      <label style={{ fontWeight: "bold", marginBottom: "1rem", color: "white", fontSize: "1.1rem" }}> {props.label}</label>
      <input style={{ border: "1px solid black", width: "60vw" }} className="form-control" {...props} />
      <small>{props.small}</small>
    </div>
  );
}