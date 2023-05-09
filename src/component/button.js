import React from "react";
import "./button.css";

const gButton = ({
  children,
  bgColor = "#c234f2",
  padding = "10px 20px",
  onClick = () => {},
  color = "#fff",
}) => {
  console.log(process.env);
  return (
    <>
      <button
        className="btn-prac"
        style={{
          backgroundColor: bgColor,
          padding: padding,
          color: color,
          outline: `2px solid ${bgColor}`,
          transition: "all 0.3s linear",
          borderRadius: "6px",
        }}
        onClick={onClick}
      >
        {children}
      </button>
      <div style={{ paddingBlock: "40px" }}></div>
    </>
  );
};

export default gButton;
