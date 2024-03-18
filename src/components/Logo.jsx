import React from "react";
// import logo from "../assets/gcetLogo.png";

export default function Logo({ className = "", src, ...props }) {
  return (
    <>
      <img
        src={src}
        alt="GCET LOGO"
        className={`w-10 h-10 rounded-full ${className}`}
        {...props}
      />
    </>
  );
}
