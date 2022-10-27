import React from 'react';
import {
  Container,
  DropsBox1,
  DropsBox2,
  DropsBox3,
  RectanglePerson,
  ResumeBoard,
  ScoreBoard,
  TextVisorBoard,
  VisorBoard,
} from './styled.js';

export const ContentBody = () => {
  return (
    <Container>
      <DropsBox1 src="./images/DropsBox.png"></DropsBox1>
      <DropsBox2 src="./images/DropsBox.png"></DropsBox2>
      <DropsBox3 src="./images/DropsBox.png"></DropsBox3>
      <RectanglePerson src="./images/Rectangle.png"></RectanglePerson>
      <ResumeBoard src="./images/QuadroResumo.png"></ResumeBoard>
      <ScoreBoard src="./images/placar.png"></ScoreBoard>
      <VisorBoard src="./images/QuadroVisorComplete.png"></VisorBoard>
      <TextVisorBoard></TextVisorBoard>
    </Container>
  );
};
