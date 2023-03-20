// Libraries
import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

// Body styles
import "./styles.css";

// Container
import Slider from "./Slider";

const url = new URL(window.location.href);
const initialSlideSlug = url.searchParams.get("slide");

const getInitialSlide = () => {
  switch (initialSlideSlug) {
    case "useRef":
      return 6;
    case "useReducer":
      return 5;
    case "useContext":
      return 4;
    case "useEffect":
      return 3;
    case "useState":
      return 2;
    default:
      return 1;
  }
};

window.history.replaceState(null, null, window.location.pathname);

const initialSlide = getInitialSlide();

export const ActiveSlideContext = React.createContext({
  activeSlide: initialSlide
});

const ActiveSlideProvider = props => {
  const { children, activeSlide } = props;
  return (
    <ActiveSlideContext.Provider
      value={{
        activeSlide
      }}
    >
      {children}
    </ActiveSlideContext.Provider>
  );
};

const App = () => {
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  return (
    <Wrapper>
      <ActiveSlideProvider activeSlide={activeSlide}>
        <Slider
          onBeforeChange={(_, nextSlide) => setActiveSlide(nextSlide)}
          initialSlide={getInitialSlide()}
        />
      </ActiveSlideProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
