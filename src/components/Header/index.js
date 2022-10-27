import React from 'react';
import { Container, Rectangle, ImagesHeader } from './styled.js';

export const Header = () => {
  return (
    <Container>
      <ImagesHeader
        src="./images/PixelArtGameRoom.gif"
        alt="GameRoom"
      ></ImagesHeader>
      <Rectangle></Rectangle>
      <div></div>
    </Container>
  );
};
