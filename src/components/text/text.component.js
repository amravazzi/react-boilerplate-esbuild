import React from "react";
import { string, object } from "prop-types";

function Text({ content, ...rest }) {
  return (
    <>
      <p {...rest}>{content}</p>
    </>
  );
}

Text.propTypes = {
  content: string.isRequired,
  rest: object
};

export { Text };
