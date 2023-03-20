// Libraries
import React, { useRef, useEffect, useState } from "react";

// Components
import Button from "react-png-button";
import { Input } from "react-formalized";
import { Slide } from "hero-slider";
import Typography from "@material-ui/core/Typography";
import { Container } from "../../components/index";
import CodeSnippetModals from "../../components/CodeSnippetModals";

const ChildrenComponent = props => {
  const { refObj = { current: null } } = props;
  const [value, setValue] = useState(undefined);

  const onChangeHandler = (_, value, valid) => {
    if (valid) {
      setValue(value);
    } else {
      setValue("ERROR: Invalid value!");
    }
  };

  // Side effect handler, that will set the new reference.
  useEffect(() => {
    console.log("inside useEffect value", value);
    refObj.current = value || "";
  }, [refObj, value]);

  return (
    <React.Fragment>
      <div
        style={{
          minWidth: 500,
          padding: "0 25px",
          margin: "24px auto",
          color: "#000",
          fontSize: 24,
          fontFamily: "sans-serif"
        }}
      >
        <Input
          onChange={onChangeHandler}
          validation={{
            required: true,
            minLength: 4,
            maxLength: 10
          }}
          placeholder="Type to set the reference!"
        />
      </div>
    </React.Fragment>
  );
};

const Example = () => {
  // Declaring the mutable reference object
  const ref = useRef();
  return (
    <Container>
      <Typography variant="h1">useRef</Typography>
      <br />
      <ChildrenComponent refObj={ref} />
      <br />
      <Button
        button="primary"
        onClick={() => alert(`Our reference is: ${JSON.stringify(ref)}`)}
      >
        <Typography variant="h3">Print Reference</Typography>
      </Button>
      <br />
      <br />
      <br />
      <CodeSnippetModals
        exampleSnippet={`
const ChildrenComponent = props => {
  const { refObj = { current: null } } = props;
  const [value, setValue] = useState(undefined);

  const onChangeHandler = (_, value, valid) => {
    if (valid) {
      setValue(value);
    } else {
      setValue("ERROR: Invalid value!");
    }
  };

  // Side effect handler, that will set the new reference.
  useEffect(() => {
    console.log("inside useEffect value", value);
    refObj.current = value || "";
  }, [refObj, value]);

  return (
    <React.Fragment>
      <div
        style={{
          minWidth: 500,
          padding: "0 25px",
          margin: "24px auto",
          color: "#000",
          fontSize: 24,
          fontFamily: "sans-serif"
        }}
      >
        <Input
          onChange={onChangeHandler}
          validation={{
            required: true,
            minLength: 4,
            maxLength: 10
          }}
          placeholder="Type to set the reference!"
        />
      </div>
    </React.Fragment>
  );
};

const Example = () => {
  // Declaring the mutable reference object
  const ref = useRef();
  return (
    <Container>
      <Typography variant="h1">useRef</Typography>
      <br />
      <ChildrenComponent refObj={ref} />
      <br />
      <Button
        button="primary"
        onClick={() => alert(\`Our reference is: ${JSON.stringify(ref)}\`)}
      >
        <Typography variant="h3">Print Reference</Typography>
      </Button>
      <br />
      <br />
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
      backgroundColor: "#222"
    }}
  >
    <Example />
  </Slide>
);

export default UseStateSlide;
