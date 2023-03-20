// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import Modal from "react-png-modal";
import Button from "react-png-button";
import Typography from "@material-ui/core/Typography";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter";

const CodeSnippetModals = props => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { exampleSnippet, buttonType } = props;
  return (
    <React.Fragment>
      <Button button={buttonType} onClick={() => setModalOpen(true)}>
        <Typography variant="button">See Code Snippet</Typography>
      </Button>
      <Modal closeModal={() => setModalOpen(false)} open={isModalOpen}>
        <SyntaxHighlighter language="jsx" style={atomDark}>
          {exampleSnippet}
        </SyntaxHighlighter>
      </Modal>
    </React.Fragment>
  );
};

CodeSnippetModals.propTypes = {
  exampleSnippet: PropTypes.string.isRequired,
  buttonType: PropTypes.string
};

CodeSnippetModals.defaultProps = {
  buttonType: undefined
};

export default CodeSnippetModals;
