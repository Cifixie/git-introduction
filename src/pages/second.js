import * as React from "react";
import styled from "styled-components";

const PunainenOtsikko = styled.h1({
  color: "red",
});

const IsoPunainenOtsikko = styled(PunainenOtsikko)({
  fontSize: "5rem",
});

const SecondPage = () => {
  return (
    <main>
      <title>SecondPage</title>
      <PunainenOtsikko>Otsikko pitäisi olla punainen</PunainenOtsikko>
      <IsoPunainenOtsikko>Isolla otsikko</IsoPunainenOtsikko>
      <p>Koodataan katjan kanssa</p>
      <p>ikävää koodata!</p>
    </main>
  );
};

export default SecondPage;
