import React from "react";

const User = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <style jsx>{`
        div {
          text-align: center;
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default User;
