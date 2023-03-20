// Libraries
import React from "react";

// Components
import { Slide } from "hero-slider";
import Typography from "@material-ui/core/Typography";
import { Container } from "../../components/index";

const HeroIntro = (
  <Slide
    background={{
      shouldLazyLoad: false,
      backgroundColor: "#360123"
    }}
  >
    <Container>
      <Typography variant="h1" align="center">
        React Hooks
        <br />
        Live Examples
      </Typography>
    </Container>
  </Slide>
);

export default HeroIntro;
