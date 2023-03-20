// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import HeroSlider, { Nav } from "hero-slider";
import {
  HeroIntro,
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef
} from "../Slides";

const Slider = props => (
  <HeroSlider
    slidingAnimation="left_to_right"
    orientation="horizontal"
    settings={{
      slidingDuration: 250,
      slidingDelay: 100,
      shouldAutoplay: false,
      shouldSlideOnArrowKeypress: true,
      shouldDisplayButtons: false,
      autoplayDuration: 20000,
      height: window.clientHeight,
      color: "#FFF"
    }}
    {...props}
  >
    {HeroIntro}
    {useState}
    {useEffect}
    {useContext}
    {useReducer}
    {useRef}
    <Nav />
  </HeroSlider>
);

Slider.propTypes = {
  initialSlide: PropTypes.number
};

Slider.defaultProps = {
  initialSlide: 1
};

export default Slider;
