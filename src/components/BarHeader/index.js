import React from 'react';
import { BlackBar, Container, Hpxp, ImagesBarHeader } from './styled.js';

export const BarHeader = () => {
  return (
    <Container>
      <ImagesBarHeader
        src="./images/headerBar.png"
        alt="HeaderBar"
      ></ImagesBarHeader>
      <BlackBar src="./images/blackBar.png"></BlackBar>
      <Hpxp src="./images/HPXP.png"></Hpxp>
    </Container>
  );
};
