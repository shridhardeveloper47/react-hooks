// Libraries
import React, { useContext } from "react";

// Example CSS
import classes from "./Buttons.module.css";

// Components
import Button, { Context, Provider } from "react-png-button";
import { Slide } from "hero-slider";
import Typography from "@material-ui/core/Typography";
import { Container } from "../../components/index";
import CodeSnippetModals from "../../components/CodeSnippetModals";

const Example = () => {
  const context = useContext(Context);
  const onClick = () => {
    context.setGlobalClassName(classes.Button);
    window.alert("The buttons CSS changed :)");
  };
  return (
    <Container>
      <Typography variant="h1">useContext</Typography>
      <br />
      <div className={classes.ButtonsGrid}>
        <Button onClick={onClick} blockButton>
          <Typography variant="button">Default Button</Typography>
        </Button>
        <Button onClick={onClick} blockButton button="primary">
          <Typography variant="button">Primary Button</Typography>
        </Button>
        <Button onClick={onClick} blockButton button="success">
          <Typography variant="button">Success Button</Typography>
        </Button>
        <Button onClick={onClick} blockButton button="danger">
          <Typography variant="button">Danger Button</Typography>
        </Button>
      </div>
      <br />
      <br />
      <br />
      <CodeSnippetModals
        exampleSnippet={`
const Example = () => {
  const context = useContext(Context);
  const onClick = () => {
    context.setGlobalClassName(classes.Button);
    window.alert("The buttons CSS changed :)");
  };
  return (
    <Container>
      <Typography variant="h1">useEffect</Typography>
      <br />
      <div className={classes.ButtonsGrid}>
        <Button onClick={onClick} blockButton>
          <Typography variant="button">Default Button</Typography>
        </Button>
        <Button onClick={onClick} blockButton button="primary">
          <Typography variant="button">Primary Button</Typography>
        </Button>
        <Button onClick={onClick} blockButton button="success">
          <Typography variant="button">Success Button</Typography>
        </Button>
        <Button onClick={onClick} blockButton button="danger">
          <Typography variant="button">Danger Button</Typography>
        </Button>
      </div>
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
      backgroundColor: "#CBBDAE"
    }}
  >
    <Provider>
      <Example />
    </Provider>
  </Slide>
);

export default UseEffectSlider;
