import * as React from "react";
import styled from "styled-components";

const Tiny = styled.small({
  fontSize: "0.75rem",
});

const IndexPage = () => {
  return (
    <main>
      <title>Introduction to Git</title>
      <h1>
        Congratulations
        <br />
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p>And welcome</p>
      <Tiny>
        You were selected to be the only participant of our tiny course
      </Tiny>
    </main>
  );
};

export default IndexPage;
