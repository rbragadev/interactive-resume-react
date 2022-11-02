import React from 'react';
import {
  BarButton1,
  BarButton2,
  BarButton3,
  BlackBar,
  Container,
  Hpxp,
  ImagesBarHeader,
} from './styled.js';

export const BarHeader = () => {
  return (
    <Container>
      <ImagesBarHeader
        src="./images/headerBar.png"
        alt="HeaderBar"
      ></ImagesBarHeader>
      <BlackBar src="./images/blackBar.png"></BlackBar>
      <Hpxp src="./images/HPXP.png"></Hpxp>
      <BarButton1 src="./images/barSkills.png"></BarButton1>
      <BarButton2 src="./images/barWorks.png"></BarButton2>
      <BarButton3 src="./images/barProjects.png"></BarButton3>
    </Container>
  );
};
