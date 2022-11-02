import React, { useState } from 'react';
import {
  Container,
  DropsBox1,
  DropsBox2,
  DropsBox3,
  RectanglePerson,
  ResumeBoard,
  ScoreBoard,
  VisorBoard,
  IconHtml,
  IconCss,
  IconJs,
  IconPs,
  IconSolidity,
  IconTs,
  IconTw,
  IconWp,
  IconGit,
  IconNode,
  IconReact,
  IconNpm,
  IconUnity,
  NamePerson,
} from './styled.js';

export const ContentBody = () => {
  const [gBoard, setGBoard] = useState('html5');

  const handleChangeBoard = (text) => {
    setGBoard(text.target.value);
  };

  return (
    <Container>
      <NamePerson src="./images/namePerson.png"></NamePerson>
      <DropsBox1 src="./images/DropsBox.png"></DropsBox1>
      <DropsBox2 src="./images/DropsBox.png"></DropsBox2>
      <DropsBox3 src="./images/DropsBox.png"></DropsBox3>
      <RectanglePerson src="./images/Rectangle.png"></RectanglePerson>
      <ResumeBoard src="./images/QuadroResumo.png"></ResumeBoard>
      <IconHtml onClick={handleChangeBoard} value="html5"></IconHtml>
      <IconCss onClick={handleChangeBoard} value="css3"></IconCss>
      <IconJs onClick={handleChangeBoard} value="js"></IconJs>
      <IconPs onClick={handleChangeBoard} value="ps"></IconPs>
      <IconSolidity onClick={handleChangeBoard} value="solidity"></IconSolidity>
      <IconTs onClick={handleChangeBoard} value="ts"></IconTs>
      <IconTw onClick={handleChangeBoard} value="tw"></IconTw>
      <IconWp onClick={handleChangeBoard} value="wp"></IconWp>
      <IconGit onClick={handleChangeBoard} value="git"></IconGit>
      <IconNode onClick={handleChangeBoard} value="node"></IconNode>
      <IconReact onClick={handleChangeBoard} value="react"></IconReact>
      <IconNpm onClick={handleChangeBoard} value="npm"></IconNpm>
      <IconUnity onClick={handleChangeBoard} value="unity"></IconUnity>

      <ScoreBoard src={`/images/quadrosV/` + gBoard + `.png`}></ScoreBoard>
      <VisorBoard src="./images/quadrosV/ASkills.png"></VisorBoard>
    </Container>
  );
};
