import * as React from "react";
import styled from "styled-components";

const Tiny = styled.small({
  fontSize: "0.75rem",
});
const Heading = styled.h1({
  color: "red",
  span: {
    marginLeft: "1ch",
  },
});

const IndexPage = () => {
  return (
    <main>
      <title>Introduction to Git</title>
      <Heading>
        Congratulations
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </Heading>
    </main>
  );
};

export default IndexPage;
