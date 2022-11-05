import React, { useState } from 'react';
import {
  Container,
  BarButtonSkills,
  BarButtonWorks,
  BarButtonProjects,
  BarButtonContact,
  DropsBox1,
  DropsBox2,
  DropsBox3,
  PersonPicture,
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
  Modal,
  ButtonEnglish,
  ButtonPortuguese,
  EasterButton,
  RectangleAlert,
} from './styled.js';

export const ContentBody = () => {
  const [gBoard, setGBoard] = useState('html5');
  const [gBlue, setGBlue] = useState('ASkills');
  const [person, setPerson] = useState('person');
  const [modal, setModal] = useState('');
  const [activeModal, setActiveModal] = useState('');
  const [language, setLanguage] = useState('');
  const [easter, setEaster] = useState('');

  const handleChangeBoard = (text) => {
    setGBoard(text.target.value);
  };

  const handleChangeBlue = (text) => {
    setGBlue(text.target.value);
    setModal(text.target.value);
    switch (gBlue) {
      case 'AWorks':
        setActiveModal(true);
        break;
      case 'AProjects':
        setActiveModal(true);
        break;
      default:
        setActiveModal(false);
        break;
    }
  };

  const handleSetPerson = (text) => {
    setPerson(text.target.value);
    setGBlue(text.target.value);
  };

  const handleSetLanguage = (text) => {
    setLanguage(text.target.value);
  };

  const handleSetEaster = (text) => {
    setEaster(text.target.value);
  };

  return (
    <Container>
      <RectangleAlert
        src={`./images/objective` + easter + language + `.png`}
      ></RectangleAlert>
      <BarButtonSkills
        onClick={handleChangeBlue}
        value="ASkills"
      ></BarButtonSkills>
      <BarButtonWorks
        onClick={handleChangeBlue}
        value="AWorks"
      ></BarButtonWorks>
      <BarButtonProjects
        onClick={handleChangeBlue}
        value="AProjects"
      ></BarButtonProjects>
      <BarButtonContact
        href="https://linktr.ee/rbragadev"
        target="_blank"
      ></BarButtonContact>
      <ButtonEnglish onClick={handleSetLanguage} value="En"></ButtonEnglish>
      <ButtonPortuguese onClick={handleSetLanguage} value=""></ButtonPortuguese>
      <EasterButton onClick={handleSetEaster} value="Easter"></EasterButton>
      <NamePerson src="./images/namePerson.png"></NamePerson>
      <PersonPicture src={`./images/person/` + person + `.gif`}></PersonPicture>
      <DropsBox1 onClick={handleSetPerson} value="person"></DropsBox1>
      <DropsBox2 onClick={handleSetPerson} value="personNoShirt"></DropsBox2>
      <DropsBox3 onClick={handleSetPerson} value="personNoPants"></DropsBox3>
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
      <ScoreBoard
        src={`/images/quadrosV/` + gBoard + language + `.png`}
      ></ScoreBoard>
      <VisorBoard
        src={`./images/quadrosV/` + gBlue + language + `.png`}
      ></VisorBoard>

      <Modal
        style={{
          display: activeModal ? 'block' : 'none',
        }}
        src={`./images/modal/` + modal + language + `.png`}
      ></Modal>
    </Container>
  );
};
