import React from "react";

export function Input(props) {
  return (
    <div className="form-group" style={{ marginBottom: "2rem" }}>
      <label style={{ fontWeight: "bold" }}> {props.label}</label>
      <input style={{ border: "1px solid black" }} className="form-control" {...props} />
      <small>{props.small}</small>
    </div>
  );
}