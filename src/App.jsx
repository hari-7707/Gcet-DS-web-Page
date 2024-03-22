import React from "react";
import Header from "./components/Header";
import Random from "./components/NavBar";
import Carousel from "./components/Carousel";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="">
        <Carousel className="h-lvh"></Carousel>
      </div>
    </>
  );
}
