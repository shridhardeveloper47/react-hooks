// Libraries
import React, { useReducer } from "react";

// Components
import Button from "react-png-button";
import { Slide } from "hero-slider";
import Typography from "@material-ui/core/Typography";
import { Container } from "../../components/index";
import CodeSnippetModals from "../../components/CodeSnippetModals";

/**
 * FIRST STEP: Declaring action types.
 */
const ActionTypes = {
  INCREMENT: 0,
  DECREMENT: 1,
  RESET: 3
};

// Also declaring the initial state here, bear in mind this initial state could potentially
// Be declared inside the component with passed props.
const initialState = {
  counter: 0
};

/**
 * SECOND STEP: Declaring the reducer function.
 */
const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.INCREMENT:
      return { counter: state.counter + 1 };
    case ActionTypes.DECREMENT:
      return { counter: state.counter - 1 };
    case ActionTypes.RESET:
      return initialState;
    default:
      console.error("ERROR!", action);
  }
};

const Example = () => {
  /**
   * FINAL STEP: Define the reducer.
   */
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter } = state;
  return (
    <Container>
      <Typography variant="h1">useReducer</Typography>
      <br />
      <Typography variant="h3">Counter: {counter}</Typography>
      <br />
      <div>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          // Notice the lack of prevState as in ES6 Class Components
          onClick={() => dispatch({ type: ActionTypes.RESET })}
          button="primary"
        >
          <Typography variant="button">Reset</Typography>
        </Button>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          // Notice the lack of prevState as in ES6 Class Components
          onClick={() => dispatch({ type: ActionTypes.INCREMENT })}
          button="success"
        >
          <Typography variant="button">INCREMENT 1</Typography>
        </Button>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          // Notice the lack of prevState as in ES6 Class Components
          onClick={() => dispatch({ type: ActionTypes.DECREMENT })}
          button="danger"
        >
          <Typography variant="button">Remove 1</Typography>
        </Button>
      </div>
      <br />
      <CodeSnippetModals
        exampleSnippet={`
// FIRST STEP: Declaring action types.
const ActionTypes = {
  INCREMENT: 0,
  DECREMENT: 1,
  RESET: 3
};

// Also declaring the initial state here, bear in mind this initial state could potentially
// Be declared inside the component with passed props.
const initialState = {
  counter: 0
};

// SECOND STEP: Declaring the reducer function.
const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.INCREMENT:
      return { counter: state.counter + 1 };
    case ActionTypes.DECREMENT:
      return { counter: state.counter - 1 };
    case ActionTypes.RESET:
      return initialState;
    default:
      console.error("ERROR!", action);
  }
};

const Example = () => {
  // FINAL STEP: Define the reducer.
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter } = state;
  return (
    <Container>
      <Typography variant="h1">useReducer</Typography>
      <br />
      <Typography variant="h3">Counter: {counter}</Typography>
      <br />
      <div>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          // Notice the lack of prevState as in ES6 Class Components
          onClick={() => dispatch({ type: ActionTypes.RESET })}
          button="primary"
        >
          <Typography variant="button">Reset</Typography>
        </Button>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          // Notice the lack of prevState as in ES6 Class Components
          onClick={() => dispatch({ type: ActionTypes.INCREMENT })}
          button="success"
        >
          <Typography variant="button">INCREMENT 1</Typography>
        </Button>
        <Button
          style={{ margin: "0 5px", width: 150 }}
          // Notice the lack of prevState as in ES6 Class Components
          onClick={() => dispatch({ type: ActionTypes.DECREMENT })}
          button="danger"
        >
          <Typography variant="button">Remove 1</Typography>
        </Button>
      </div>
      <br />
      <CodeSnippetModals />
    </Container>
  );
};`}
      />
    </Container>
  );
};

const UseStateSlide = (
  <Slide
    background={{
      shouldLazyLoad: false,
      backgroundColor: "#AC360B"
    }}
  >
    <Example />
  </Slide>
);

export default UseStateSlide;
