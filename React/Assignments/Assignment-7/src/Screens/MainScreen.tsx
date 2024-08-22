import React from "react";
import Home from "../Components/Home/Home";
import Card1 from "../Components/Cards/Card 1/Card1";
import Slider from "../Components/Cards/Slider/Slider";
import Slider1 from "../Components/Cards/Slider/Slider1";
import img from "../Assets/flight.jpg";
import img1 from "../Assets/sixer.jpg";
import Add from "../Components/Add/Add";

export default function MainScreen() {
  return (
    <>
      <Home />
      <Card1 />
      <Slider />
      <Add src={img} />
      <Slider1 />
      <Add src={img1} />
    </>
  );
}
