// Libraries
import React, { useState } from "react";

// Components
import Button from "react-png-button";
import { Slide } from "hero-slider";
import Typography from "@material-ui/core/Typography";
import { Container } from "../../components/index";
import CodeSnippetModals from "../../components/CodeSnippetModals";

const Example = () => {
  // Declaring the state
  const [counter, setCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);
  const [goodCounter, setGoodCounter] = useState(0);
  /**
   * A badly used setter because the `setBadCounter` inside the
   * `setInterval` will not compute the previous state properly.
   */
  React.useEffect(() => {
    setInterval(() => {
      setBadCounter(badCounter + 1);
    }, 1000);
  }, []);
  /**
   * Now we compute the previous state properly, similar to
   * the React ES6 Class Components.
   */
  React.useEffect(() => {
    setInterval(() => {
      setGoodCounter(prevCount => prevCount + 1);
    }, 1000);
  }, []);
  return (
    <Container>
      <Typography variant="h1">useState</Typography>
      <br />
      <Typography variant="h3">Counter: {counter}</Typography>
      <br />
      <div>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          onClick={() => setCounter(counter + 1)}
          button="success"
        >
          <Typography variant="button">Add 1</Typography>
        </Button>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          onClick={() => setCounter(counter - 1)}
          button="danger"
        >
          <Typography variant="button">Remove 1</Typography>
        </Button>
      </div>
      <br />
      <div>
        <Typography variant="h4" align="center">
          Be careful when using the state setters:
        </Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="h4" align="center">
            Bad counter: {badCounter}
          </Typography>
          <Typography variant="h4" align="center">
            Good counter: {goodCounter}
          </Typography>
        </div>
      </div>
      <br />
      <CodeSnippetModals
        exampleSnippet={`
const Example = () => {
  // Declaring the state
  const [counter, setCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);
  const [goodCounter, setGoodCounter] = useState(0);
  /**
   * A badly used setter because the \`setBadCounter\` inside the
   * \`setInterval\` will not compute the previous state properly.
   */
  React.useEffect(() => {
    setInterval(() => {
      setBadCounter(badCounter + 1);
    }, 1000);
  }, []);
  /**
   * Now we compute the previous state properly, similar to
   * the React ES6 Class Components.
   */
  React.useEffect(() => {
    setInterval(() => {
      setGoodCounter(prevCount => prevCount + 1);
    }, 1000);
  }, []);
  return (
    <Container>
      <Typography variant="h1">useState</Typography>
      <br />
      <Typography variant="h3">Counter: {counter}</Typography>
      <br />
      <div>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          onClick={() => setCounter(counter + 1)}
          button="success"
        >
          <Typography variant="button">Add 1</Typography>
        </Button>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          onClick={() => setCounter(counter - 1)}
          button="danger"
        >
          <Typography variant="button">Remove 1</Typography>
        </Button>
      </div>
      <br />
      <div>
        <Typography variant="h4" align="center">
          Be careful accessing the state setter in hooks:
        </Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="h4" align="center">
            Bad counter: {badCounter}
          </Typography>
          <Typography variant="h4" align="center">
            Good counter: {goodCounter}
          </Typography>
        </div>
      </div>
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

const UseStateSlide = (
  <Slide
    background={{
      shouldLazyLoad: false,
      backgroundColor: "#7B0D1E"
    }}
  >
    <Example />
  </Slide>
);

export default UseStateSlide;
