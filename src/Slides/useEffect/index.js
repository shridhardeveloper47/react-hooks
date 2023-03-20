// Libraries
import React, { useState, useEffect, useContext } from "react";

// Dependencies
import { ActiveSlideContext } from "../../";

// Components
import { Slide } from "hero-slider";
import Typography from "@material-ui/core/Typography";
import { Container } from "../../components/index";
import CodeSnippetModals from "../../components/CodeSnippetModals";

const getMouseXYPosition = event => ({
  x: event.clientX,
  y: event.clientY
});

const USE_EFFECT_SLIDE_NUMBER = 3;

const Example = () => {
  const activeSlideContext = useContext(ActiveSlideContext);
  const { activeSlide } = activeSlideContext;
  const onMouseMoveHandler = event =>
    setMousePosition(getMouseXYPosition(event));
  // Declaring the state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // If THIS slide is active then add the event listener.
    if (USE_EFFECT_SLIDE_NUMBER === activeSlide) {
      document.addEventListener("mousemove", onMouseMoveHandler);
      // Otherwise, remove it.
    } else {
      document.removeEventListener("mousemove", onMouseMoveHandler);
    }
    // And if the component is unmounted, remove it as well.
    return () => {
      document.removeEventListener("mousemove", onMouseMoveHandler);
    };
  }, [activeSlide]);
  return (
    <Container>
      <Typography variant="h1">useEffect</Typography>
      <br />
      <Typography variant="h2" align="center">
        Mouse position: {`X: ${mousePosition.x}, Y: ${mousePosition.y}`}
      </Typography>
      <br />
      <br />
      <br />
      <CodeSnippetModals
        exampleSnippet={`
const getMouseXYPosition = event => ({
  x: event.clientX,
  y: event.clientY
});

const USE_EFFECT_SLIDE_NUMBER = 3;

const Example = () => {
  const activeSlideContext = useContext(ActiveSlideContext);
  const { activeSlide } = activeSlideContext;
  const onMouseMoveHandler = event =>
    setMousePosition(getMouseXYPosition(event));
  // Declaring the state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // If THIS slide is active then add the event listener.
    if (USE_EFFECT_SLIDE_NUMBER === activeSlide) {
      document.addEventListener("mousemove", onMouseMoveHandler);
      // Otherwise, remove it.
    } else {
      document.removeEventListener("mousemove", onMouseMoveHandler);
    }
    // And if the component is unmounted, remove it as well.
    return () => {
      document.removeEventListener("mousemove", onMouseMoveHandler);
    };
  }, [activeSlide]);
  return (
    <Container>
      <Typography variant="h1">useEffect</Typography>
      <br />
      <Typography variant="h2">
        Mouse position: {\`X: ${mousePosition.x}, Y: ${mousePosition.y}\`}
      </Typography>
      <br />
      <br />
      <br />
      <CodeSnippetModals />
    </Container>
  );
};
      `}
      />
    </Container>
  );
};

const UseEffectSlider = (
  <Slide
    background={{
      shouldLazyLoad: false,
      backgroundColor: "#2B4D1E"
    }}
  >
    <Example />
  </Slide>
);

export default UseEffectSlider;
