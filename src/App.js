// KÉP IMPORTOK //
import crystal from './images/crystal.png'
import curse1 from "./images/curse1.jpg";
import curse2 from "./images/curse2.jpg";
import portalimage from './images/portal.jpg'
import curse3 from "./images/curse3.jpg";
import dragonSlayerimage from './images/dragonSlayer.jpg'
import gamblerimage from './images/gambleimage.jpg'
import barfightimage from './images/barfight.jpg'
import gamblerimageforlotto from "./images/gambleimage.jpg";
import speedpotion from './images/potion.jpg';
import aceCard from './images/acecard.png'
import god from './images/god.jpg'
import pickpocket from "./images/pickpocket.jpg";
import scroll from './images/scroll.jpg'
import warlock from "./images/Warlock.jpg";
import paladin from "./images/paladin.png";
import thief from "./images/thief.jpg";
import victory from "./images/victory.jpg";
import magus from "./images/magus.jpg";
import merlincrystal from "./images/merlincrystal.jpg";
import watch from "./images/watch.jpg";
import ezres from "./images/ezres.png";
import dice from "./images/dice.gif";
import otszazas from "./images/otszazas.png";
import ketezres from "./images/ketezres.png";
import otezres from "./images/otezres.png";
import mysterycard from "./images/mysterycard.jpg";
import mysterycardlocked from "./images/mysterycardlocked.jpg";
import cursecard from "./images/curseCard.jpg";
import cursecardlocked from "./images/curseCardlocked.jpg";
import beartrap from './images/beartrap.png'
import chest from './images/chest.png'
import "./App.css";
import React, { useState, useEffect } from "react";
import { Modal, Button, Card, Toast } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";


// KÁRTYA VARIÁCIÓK //

const mysteryCardVariations = [
  {
    title: "",
    body: "",
    id: 1,
    img: null,
  },
  {
    title: "",
    body: "",
    id: 2,
    img: null,
  },
  {
    title: "",
    body: "",
    id: 3,
    img: null,
  },

  {
    title: "",
    body: "",
    id: 4,
    img: null,
  },
   
  {
    title: "",
    body: "",
    id: 5,
    img: null,
  },
  
  {
    title: "",
    body: "",
    id: 6,
  },
  
  {
    title: "",
    body: "",
    id: 7,
  },
 
  {
    title: "",
    body: "",
    id: 8,
  },

  {
    title: "",
    body: "",
    id: 9,
  },
 
  {
    title: "",
    body: "",
    id: 10,
  },
  
  {
    title: "",
    body: "",
    id: 11,
  },
];

let randomCard =
  mysteryCardVariations[
    Math.floor(Math.random() * mysteryCardVariations.length)
  ];

function chooseRandomCard() {
  randomCard =
    mysteryCardVariations[
      Math.floor(Math.random() * mysteryCardVariations.length)
    ];
}

let playerOneChoice = "";
let playerOneChoiceImg = null;

let playerTwoChoice = "";
let playerTwoChoiceImg = null;

function App() {
  // MODAL-HOZ //
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [playerOneTurn, setPlayerOneTurn] = useState(false);
  const [playerTwoTurn, setPlayerTwoTurn] = useState(true);

  function turnButton() {
    if (playerOneTurn) {
      setPlayerOneTurn(false);
      setPlayerTwoTurn(true);
    } else if (playerTwoTurn) {
      setPlayerOneTurn(true);
      setPlayerTwoTurn(false);
    }
  }

  // KARAKTER KÁRTYÁK //

  const [warlockAbility, setWarlockAbility] = useState(false);

  let characterCards = [
    {
      name: "Warlock",
      description:
        "A Warlock egy átokkal blokkolja a kártyák használatát a másik játékosnak! Fizess 5000 kristályt hogy feloldd az átkot!",
      img: warlock,
      id: 1,
      startingMoney: 0,
    },

    {
      name: "Paladin",
      description: "A paladint szent erők védik és nem lehet megátkozni!",
      img: paladin,
      id: 2,
      startingMoney: 0,
    },

    {
      name: "Rogue",
      description:
        "A  Rogue extra 5000 kristállyal indul!",
      img: thief,
      id: 3,
      startingMoney: 5000,
    },

    {
      name: "Merlin",
      description:
        "Merlin a szemfényvesztés és a kártya trükkök mestere! Minden 8. dobás után elvesz 1000 kristályt a másik játékostól!",
      img: magus,
      id: 4,
      startingMoney: 0,
    },
  ];

  // KARAKTER VÁLASZTÓS MODALOK //

  let [playerOneTotalMoney, setPlayerOneTotalMoney] = useState();
  const handleClickPlayerOne = (e) => {
    setCardModalShow(false);
    setCardModalShowPlayerTwo(true);
    if (e === 1) {
      playerOneChoice = characterCards[0].name;
      playerOneChoiceImg = characterCards[0].img;
      setPlayerOneTotalMoney(characterCards[0].startingMoney);
    } else if (e === 2) {
      playerOneChoice = characterCards[1].name;
      playerOneChoiceImg = characterCards[1].img;
      setPlayerOneTotalMoney(characterCards[1].startingMoney);
    } else if (e === 3) {
      playerOneChoice = characterCards[2].name;
      playerOneChoiceImg = characterCards[2].img;
      setPlayerOneTotalMoney(characterCards[2].startingMoney);
    } else if (e === 4) {
      playerOneChoice = characterCards[3].name;
      playerOneChoiceImg = characterCards[3].img;
      setPlayerOneTotalMoney(characterCards[3].startingMoney);
    }
  };

  if (playerOneChoice === characterCards[0].name) {
    delete characterCards[0];
  } else if (playerOneChoice === characterCards[1].name) {
    delete characterCards[1];
  } else if (playerOneChoice === characterCards[2].name) {
    delete characterCards[2];
  } else if (playerOneChoice === characterCards[3].name) {
    delete characterCards[3];
  }

  let [playerTwoTotalMoney, setPlayerTwoTotalMoney] = useState();

  const handleClickPlayerTwo = (e) => {
    setCardModalShowPlayerTwo(false);
    if (e === 1) {
      playerTwoChoice = characterCards[0].name;
      playerTwoChoiceImg = characterCards[0].img;
      setPlayerTwoTotalMoney(characterCards[0].startingMoney);
    } else if (e === 2) {
      playerTwoChoice = characterCards[1].name;
      playerTwoChoiceImg = characterCards[1].img;
      setPlayerTwoTotalMoney(characterCards[1].startingMoney);
    } else if (e === 3) {
      playerTwoChoice = characterCards[2].name;
      playerTwoChoiceImg = characterCards[2].img;
      setPlayerTwoTotalMoney(characterCards[2].startingMoney);
    } else if (e === 4) {
      playerTwoChoice = characterCards[3].name;
      playerTwoChoiceImg = characterCards[3].img;
      setPlayerTwoTotalMoney(characterCards[3].startingMoney);
    }
  };

  if (playerOneTotalMoney < 0) {
    setPlayerOneTotalMoney(0);
  } else if (playerTwoTotalMoney < 0) {
    setPlayerTwoTotalMoney(0);
  }

  // PLAYER 1 //
  let [playerOneTotalNumber, setPlayerOneTotalNumber] = useState(0);
  let [player1RandomNumber, setplayer1RandomNumber] = useState(null);
  let [showDice, setShowDice] = useState(false);

  function playerOneRandomNumber() {
    let randomNumberOne = Math.round(Math.random() * 5 + 1);
    setShowDice(true);
    setPlayerOneTurn(true)
    setTimeout(() => {
      turnButton();
      setPlayerOneTotalNumber(randomNumberOne + playerOneTotalNumber);
      setplayer1RandomNumber(randomNumberOne);
      chooseRandomCard();
      setShowToastPlayerOneThrow(true);
      setShowDice(false);
    }, 1800);
  }

  useEffect(() => {
    if (
      (playerOneTotalNumber === 16 && randomCard.id === 1) ||
      (playerOneTotalNumber === 19 && randomCard.id === 1) ||
      (playerOneTotalNumber === 26 && randomCard.id === 1) ||
      (playerOneTotalNumber === 29 && randomCard.id === 1) ||
      (playerOneTotalNumber === 32 && randomCard.id === 1) ||
      (playerOneTotalNumber === 36 && randomCard.id === 1) ||
      (playerOneTotalNumber === 41 && randomCard.id === 1) ||
      (playerOneTotalNumber === 44 && randomCard.id === 1) ||
      (playerOneTotalNumber === 49 && randomCard.id === 1) ||
      (playerOneTotalNumber === 54 && randomCard.id === 1) ||
      (playerOneTotalNumber === 60 && randomCard.id === 1) ||
      (playerOneTotalNumber === 65 && randomCard.id === 1) ||
      (playerOneTotalNumber === 69 && randomCard.id === 1) ||
      (playerOneTotalNumber === 73 && randomCard.id === 1) ||
      (playerOneTotalNumber === 77 && randomCard.id === 1) ||
      (playerOneTotalNumber === 82 && randomCard.id === 1) ||
      (playerOneTotalNumber === 49 && randomCard.id === 1) ||
      (playerOneTotalNumber === 89 && randomCard.id === 1) ||
      (playerOneTotalNumber === 95 && randomCard.id === 1)
    ) {
      setPlayerOneTotalNumber(playerOneTotalNumber - 3);
      csapda();
    } else if (
      (playerOneTotalNumber === 19 && randomCard.id === 2) ||
      (playerOneTotalNumber === 26 && randomCard.id === 2) ||
      (playerOneTotalNumber === 29 && randomCard.id === 2) ||
      (playerOneTotalNumber === 36 && randomCard.id === 2) ||
      (playerOneTotalNumber === 41 && randomCard.id === 2) ||
      (playerOneTotalNumber === 49 && randomCard.id === 2) ||
      (playerOneTotalNumber === 65 && randomCard.id === 2) ||
      (playerOneTotalNumber === 73 && randomCard.id === 2) ||
      (playerOneTotalNumber === 77 && randomCard.id === 2) ||
      (playerOneTotalNumber === 49 && randomCard.id === 2) ||
      (playerOneTotalNumber === 89 && randomCard.id === 2) ||
      (playerOneTotalNumber === 95 && randomCard.id === 2)
    ) {
      zsebtolvaj();
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 2000);
    } else if (
      (playerOneTotalNumber === 3 && randomCard.id === 3) ||
      (playerOneTotalNumber === 7 && randomCard.id === 3) ||
      (playerOneTotalNumber === 12 && randomCard.id === 3) ||
      (playerOneTotalNumber === 16 && randomCard.id === 3) ||
      (playerOneTotalNumber === 19 && randomCard.id === 3) ||
      (playerOneTotalNumber === 26 && randomCard.id === 3) ||
      (playerOneTotalNumber === 29 && randomCard.id === 3) ||
      (playerOneTotalNumber === 32 && randomCard.id === 3) ||
      (playerOneTotalNumber === 36 && randomCard.id === 3) ||
      (playerOneTotalNumber === 41 && randomCard.id === 3) ||
      (playerOneTotalNumber === 44 && randomCard.id === 3) ||
      (playerOneTotalNumber === 49 && randomCard.id === 3) ||
      (playerOneTotalNumber === 54 && randomCard.id === 3) ||
      (playerOneTotalNumber === 60 && randomCard.id === 3) ||
      (playerOneTotalNumber === 65 && randomCard.id === 3) ||
      (playerOneTotalNumber === 69 && randomCard.id === 3) ||
      (playerOneTotalNumber === 73 && randomCard.id === 3) ||
      (playerOneTotalNumber === 77 && randomCard.id === 3) ||
      (playerOneTotalNumber === 82 && randomCard.id === 3) ||
      (playerOneTotalNumber === 49 && randomCard.id === 3) ||
      (playerOneTotalNumber === 89 && randomCard.id === 3) ||
      (playerOneTotalNumber === 95 && randomCard.id === 3)
    ) {
      magicWatch();
      setPlayerOneTotalNumber(playerOneTotalNumber - 1);
      setPlayerOneTotalNumber(playerOneTotalNumber + 1);
      turnButton();
    } else if (
      (playerOneTotalNumber === 3 && randomCard.id === 4) ||
      (playerOneTotalNumber === 7 && randomCard.id === 4) ||
      (playerOneTotalNumber === 12 && randomCard.id === 4) ||
      (playerOneTotalNumber === 16 && randomCard.id === 4) ||
      (playerOneTotalNumber === 19 && randomCard.id === 4) ||
      (playerOneTotalNumber === 26 && randomCard.id === 4) ||
      (playerOneTotalNumber === 29 && randomCard.id === 4) ||
      (playerOneTotalNumber === 32 && randomCard.id === 4) ||
      (playerOneTotalNumber === 36 && randomCard.id === 4) ||
      (playerOneTotalNumber === 41 && randomCard.id === 4) ||
      (playerOneTotalNumber === 44 && randomCard.id === 4) ||
      (playerOneTotalNumber === 49 && randomCard.id === 4) ||
      (playerOneTotalNumber === 54 && randomCard.id === 4) ||
      (playerOneTotalNumber === 60 && randomCard.id === 4) ||
      (playerOneTotalNumber === 65 && randomCard.id === 4) ||
      (playerOneTotalNumber === 69 && randomCard.id === 4) ||
      (playerOneTotalNumber === 73 && randomCard.id === 4) ||
      (playerOneTotalNumber === 77 && randomCard.id === 4) ||
      (playerOneTotalNumber === 82 && randomCard.id === 4) ||
      (playerOneTotalNumber === 49 && randomCard.id === 4) ||
      (playerOneTotalNumber === 89 && randomCard.id === 4) ||
      (playerOneTotalNumber === 95 && randomCard.id === 4)
    ) {
      kincseslada();
      setPlayerOneTotalMoney(() => playerOneTotalMoney + 2500);
    } else if (
    (playerOneTotalNumber === 3 && randomCard.id === 5) ||
    (playerOneTotalNumber === 7 && randomCard.id === 5) ||
    (playerOneTotalNumber === 12 && randomCard.id === 5) ||
    (playerOneTotalNumber === 16 && randomCard.id === 5) ||
    (playerOneTotalNumber === 19 && randomCard.id === 5) ||
    (playerOneTotalNumber === 26 && randomCard.id === 5) ||
    (playerOneTotalNumber === 29 && randomCard.id === 5) ||
    (playerOneTotalNumber === 32 && randomCard.id === 5) ||
    (playerOneTotalNumber === 36 && randomCard.id === 5) ||
    (playerOneTotalNumber === 41 && randomCard.id === 5) ||
    (playerOneTotalNumber === 44 && randomCard.id === 5) ||
    (playerOneTotalNumber === 49 && randomCard.id === 5) ||
    (playerOneTotalNumber === 54 && randomCard.id === 5) ||
    (playerOneTotalNumber === 60 && randomCard.id === 5) ||
    (playerOneTotalNumber === 65 && randomCard.id === 5) ||
    (playerOneTotalNumber === 69 && randomCard.id === 5) ||
    (playerOneTotalNumber === 73 && randomCard.id === 5) ||
    (playerOneTotalNumber === 77 && randomCard.id === 5) ||
    (playerOneTotalNumber === 82 && randomCard.id === 5) ||
    (playerOneTotalNumber === 49 && randomCard.id === 5) ||
    (playerOneTotalNumber === 89 && randomCard.id === 5)
    ) {
      potion();
      setPlayerOneTotalNumber(playerOneTotalNumber + 5);
    } else if (
      (playerOneTotalNumber === 16 && randomCard.id === 6) ||
    (playerOneTotalNumber === 19 && randomCard.id === 6) ||
    (playerOneTotalNumber === 26 && randomCard.id === 6) ||
    (playerOneTotalNumber === 29 && randomCard.id === 6) ||
    (playerOneTotalNumber === 32 && randomCard.id === 6) ||
    (playerOneTotalNumber === 36 && randomCard.id === 6) ||
    (playerOneTotalNumber === 41 && randomCard.id === 6) ||
    (playerOneTotalNumber === 44 && randomCard.id === 6) ||
    (playerOneTotalNumber === 49 && randomCard.id === 6) ||
    (playerOneTotalNumber === 54 && randomCard.id === 6) ||
    (playerOneTotalNumber === 60 && randomCard.id === 6) ||
    (playerOneTotalNumber === 65 && randomCard.id === 6) ||
    (playerOneTotalNumber === 69 && randomCard.id === 6) ||
    (playerOneTotalNumber === 73 && randomCard.id === 6) ||
    (playerOneTotalNumber === 77 && randomCard.id === 6) ||
    (playerOneTotalNumber === 82 && randomCard.id === 6) ||
    (playerOneTotalNumber === 49 && randomCard.id === 6) ||
    (playerOneTotalNumber === 89 && randomCard.id === 6) ||
    (playerOneTotalNumber === 95 && randomCard.id === 6)
    ) {
      magicScroll();
      turnButton();
      setPlayerOneTotalNumber(playerOneTotalNumber + 3);
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 1500);
    } else if (
      (playerOneTotalNumber === 3 && randomCard.id === 7) ||
      (playerOneTotalNumber === 7 && randomCard.id === 7) ||
      (playerOneTotalNumber === 12 && randomCard.id === 7) ||
      (playerOneTotalNumber === 16 && randomCard.id === 7) ||
      (playerOneTotalNumber === 19 && randomCard.id === 7) ||
      (playerOneTotalNumber === 26 && randomCard.id === 7) ||
      (playerOneTotalNumber === 29 && randomCard.id === 7) ||
      (playerOneTotalNumber === 32 && randomCard.id === 7) ||
      (playerOneTotalNumber === 36 && randomCard.id === 7) ||
      (playerOneTotalNumber === 41 && randomCard.id === 7) ||
      (playerOneTotalNumber === 44 && randomCard.id === 7) ||
      (playerOneTotalNumber === 49 && randomCard.id === 7) ||
      (playerOneTotalNumber === 54 && randomCard.id === 7) ||
      (playerOneTotalNumber === 60 && randomCard.id === 7) ||
      (playerOneTotalNumber === 65 && randomCard.id === 7) ||
      (playerOneTotalNumber === 69 && randomCard.id === 7) ||
      (playerOneTotalNumber === 73 && randomCard.id === 7) ||
      (playerOneTotalNumber === 77 && randomCard.id === 7) ||
      (playerOneTotalNumber === 82 && randomCard.id === 7) ||
      (playerOneTotalNumber === 49 && randomCard.id === 7) ||
      (playerOneTotalNumber === 89 && randomCard.id === 7) ||
      (playerOneTotalNumber === 95 && randomCard.id === 7)
    ) {
      setPlayerOneTotalNumber(playerOneTotalNumber + 4);
      favorOfTheGods();
      turnButton();
    } else if (
      (playerOneTotalNumber === 32 && randomCard.id === 8) ||
      (playerOneTotalNumber === 36 && randomCard.id === 8) ||
      (playerOneTotalNumber === 41 && randomCard.id === 8) ||
      (playerOneTotalNumber === 44 && randomCard.id === 8) ||
      (playerOneTotalNumber === 49 && randomCard.id === 8) ||
      (playerOneTotalNumber === 54 && randomCard.id === 8) ||
      (playerOneTotalNumber === 60 && randomCard.id === 8) ||
      (playerOneTotalNumber === 65 && randomCard.id === 8) ||
      (playerOneTotalNumber === 69 && randomCard.id === 8) ||
      (playerOneTotalNumber === 73 && randomCard.id === 8) ||
      (playerOneTotalNumber === 77 && randomCard.id === 8) ||
      (playerOneTotalNumber === 82 && randomCard.id === 8) ||
      (playerOneTotalNumber === 49 && randomCard.id === 8) ||
      (playerOneTotalNumber === 89 && randomCard.id === 8) ||
      (playerOneTotalNumber === 95 && randomCard.id === 8)
    ) {
      setPlayerOneTotalNumber(playerOneTotalNumber - 8);
      portal();
    } else if (
      (playerOneTotalNumber === 3 && randomCard.id === 9) ||
      (playerOneTotalNumber === 7 && randomCard.id === 9) ||
      (playerOneTotalNumber === 12 && randomCard.id === 9) ||
      (playerOneTotalNumber === 16 && randomCard.id === 9) ||
      (playerOneTotalNumber === 19 && randomCard.id === 9) ||
      (playerOneTotalNumber === 26 && randomCard.id === 9) ||
      (playerOneTotalNumber === 29 && randomCard.id === 9) ||
      (playerOneTotalNumber === 32 && randomCard.id === 9) ||
      (playerOneTotalNumber === 36 && randomCard.id === 9) ||
      (playerOneTotalNumber === 41 && randomCard.id === 9) ||
      (playerOneTotalNumber === 44 && randomCard.id === 9) ||
      (playerOneTotalNumber === 49 && randomCard.id === 9) ||
      (playerOneTotalNumber === 54 && randomCard.id === 9) ||
      (playerOneTotalNumber === 60 && randomCard.id === 9) ||
      (playerOneTotalNumber === 65 && randomCard.id === 9) ||
      (playerOneTotalNumber === 69 && randomCard.id === 9) ||
      (playerOneTotalNumber === 73 && randomCard.id === 9) ||
      (playerOneTotalNumber === 77 && randomCard.id === 9) ||
      (playerOneTotalNumber === 82 && randomCard.id === 9) ||
      (playerOneTotalNumber === 49 && randomCard.id === 9) ||
      (playerOneTotalNumber === 89 && randomCard.id === 9) ||
      (playerOneTotalNumber === 95 && randomCard.id === 9)
    ) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney + 5000);
      gambler();
    } else if (
      (playerOneTotalNumber === 19 && randomCard.id === 10) ||
      (playerOneTotalNumber === 26 && randomCard.id === 10) ||
      (playerOneTotalNumber === 36 && randomCard.id === 10) ||
      (playerOneTotalNumber === 49 && randomCard.id === 10) ||
      (playerOneTotalNumber === 65 && randomCard.id === 10) ||
      (playerOneTotalNumber === 77 && randomCard.id === 10) ||
      (playerOneTotalNumber === 49 && randomCard.id === 10) ||
      (playerOneTotalNumber === 89 && randomCard.id === 10)
    ) {
      setPlayerOneTotalMoney(0);
      barfight();
    } else if (
      (playerOneTotalNumber === 19 && randomCard.id === 11) ||
      (playerOneTotalNumber === 26 && randomCard.id === 11) ||
      (playerOneTotalNumber === 32 && randomCard.id === 11) ||
      (playerOneTotalNumber === 36 && randomCard.id === 11) ||
      (playerOneTotalNumber === 41 && randomCard.id === 11) ||
      (playerOneTotalNumber === 44 && randomCard.id === 11) ||
      (playerOneTotalNumber === 49 && randomCard.id === 11) ||
      (playerOneTotalNumber === 54 && randomCard.id === 11) ||
      (playerOneTotalNumber === 60 && randomCard.id === 11) ||
      (playerOneTotalNumber === 65 && randomCard.id === 11) ||
      (playerOneTotalNumber === 69 && randomCard.id === 11) ||
      (playerOneTotalNumber === 73 && randomCard.id === 11) ||
      (playerOneTotalNumber === 77 && randomCard.id === 11) ||
      (playerOneTotalNumber === 82 && randomCard.id === 11) ||
      (playerOneTotalNumber === 49 && randomCard.id === 11) ||
      (playerOneTotalNumber === 89 && randomCard.id === 11)
    ) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney + 7000);
      setPlayerOneTotalNumber(playerOneTotalNumber + 8);
      dragonSlayer();
    }
  }, [playerOneTotalNumber]);

  // PLAYER 2 //
  let [playerTwoTotalNumber, setPlayerTwoTotalNumber] = useState(0);
  let [player2RandomNumber, setPlayer2RandomNumber] = useState(null);
  let [showDiceP2, setShowDiceP2] = useState(false);
  function playerTwoRandomNumber() {
    let randomNumberTwo = Math.round(Math.random() * 5 + 1);
    setPlayerTwoTurn(true)
    setShowDiceP2(true)
    setTimeout(() => {
      turnButton();
      setPlayerTwoTotalNumber(randomNumberTwo + playerTwoTotalNumber);
      setPlayer2RandomNumber(randomNumberTwo);
      setShowToastPlayerTwoThrow(true);
      chooseRandomCard();
      setShowDiceP2(false)
    }, 1800);
  }
  useEffect(() => {
    if (
      (playerTwoTotalNumber === 16 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 19 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 29 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 32 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 44 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 54 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 60 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 69 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 82 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 1) ||
      (playerTwoTotalNumber === 95 && randomCard.id === 1)
    ) {
      setPlayerTwoTotalNumber(playerTwoTotalNumber - 3);
      csapda();
    } else if (
      (playerTwoTotalNumber === 19 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 29 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 2) ||
      (playerTwoTotalNumber === 95 && randomCard.id === 2)
    ) {
      zsebtolvaj();
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 2000);
    } else if (
      (playerTwoTotalNumber === 3 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 8 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 12 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 16 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 21 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 29 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 32 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 44 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 54 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 60 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 69 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 82 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 3) ||
      (playerTwoTotalNumber === 95 && randomCard.id === 3)
    ) {
      magicWatch();
      setPlayerTwoTotalNumber(playerTwoTotalNumber - 1);
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 1);
      turnButton();
    } else if (
      (playerTwoTotalNumber === 3 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 7 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 12 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 16 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 19 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 29 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 32 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 44 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 54 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 60 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 69 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 82 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 4) ||
      (playerTwoTotalNumber === 95 && randomCard.id === 4)
    ) {
      kincseslada();
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 2500);
    } else if (
      (playerTwoTotalNumber === 3 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 7 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 12 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 16 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 19 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 29 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 32 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 44 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 54 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 60 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 69 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 82 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 5) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 5)
    ) {
      potion();
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 5);
    } else if (
      (playerTwoTotalNumber === 16 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 21 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 29 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 32 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 44 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 54 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 60 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 69 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 82 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 6) ||
      (playerTwoTotalNumber === 95 && randomCard.id === 6)
    ) {
      magicScroll();
      turnButton();
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 3);
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 1500);
    } else if (
      (playerTwoTotalNumber === 3 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 8 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 12 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 16 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 21 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 29 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 32 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 44 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 54 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 60 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 69 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 82 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 7) ||
      (playerTwoTotalNumber === 95 && randomCard.id === 7)
    ) {
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 4);
      favorOfTheGods();
      turnButton();
    } else if (
      (playerTwoTotalNumber === 32 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 44 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 54 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 60 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 69 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 82 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 8) ||
      (playerTwoTotalNumber === 95 && randomCard.id === 8)
    ) {
      setPlayerTwoTotalNumber(playerTwoTotalNumber - 8);
      portal();
    } else if (
      (playerTwoTotalNumber === 3 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 8 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 12 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 16 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 21 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 29 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 32 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 44 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 54 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 60 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 69 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 82 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 9) ||
      (playerTwoTotalNumber === 95 && randomCard.id === 9)
    ) {
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 5000);
      gambler();
    } else if (
      (playerTwoTotalNumber === 19 && randomCard.id === 10) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 10) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 10) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 10) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 10) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 10) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 10)
    ) {
      setPlayerTwoTotalMoney(0);
      barfight();
    } else if (
      (playerTwoTotalNumber === 19 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 26 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 32 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 36 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 41 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 44 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 54 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 60 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 65 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 69 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 73 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 77 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 82 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 49 && randomCard.id === 11) ||
      (playerTwoTotalNumber === 89 && randomCard.id === 11)
    ) {
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 7000);
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 8);
      dragonSlayer();
    }
  }, [playerTwoTotalNumber]);

  //MYSTERY KÁRTYÁK//

  function csapda() {
    randomCard.title = "Csapda";
    randomCard.body =
      "Csapdába sétáltál - vissza léptél 3 mezőt!";
      randomCard.img = beartrap;
    handleShow();
  }

  function zsebtolvaj() {
    randomCard.title = "Zsebtolvaj";
    randomCard.body =
      "Kirabolt téged egy zsebtolvaj - elvesztettél 2000 kristályt!";
    randomCard.img = pickpocket;
    handleShow();
  }

  function magicWatch() {
    randomCard.title = "Mágikus óra";
    randomCard.body = "Találtál egy különös,mágikus erejű órát - mégegyszer dobhatsz!";
    randomCard.img = watch;
    handleShow();
  }

  function kincseslada() {
    randomCard.title = "Kincses láda";
    randomCard.body = "Találtál egy kincses ládát - kaptál 2500 kristályt";
    randomCard.img = chest;
    handleShow();
  }
  function merlinTarifa() {
    randomCard.title = "Merlin trükk";
    randomCard.body = "Merlin megtévesztett és elvett tőled 1000 kristályt";
    randomCard.img = merlincrystal;
    handleShow();
  }
  function potion() {
    randomCard.title = "Speed Potion";
    randomCard.body = "Találtál egy speed potiont - előre léptél 5 mezőt";
    randomCard.img = speedpotion;
    handleShow();
  }

  function magicScroll() {
    randomCard.title = "Varázs tekercs";
    randomCard.body = "Vettél egy varázs tekercset 1500 kristályért és felolvastad - előre léptél 3 mezőt és mégegyszer dobhatsz!";
    randomCard.img = scroll;
    handleShow();
  }

  function favorOfTheGods() {
    randomCard.title = "Favor of the gods";
    randomCard.body = "Isteni áldást kaptál - előre léptél 4 mezőt és mégegyszer dobhatsz!";
    randomCard.img = god;
    handleShow();
  }

  function portal() {
    randomCard.title = "Portal";
    randomCard.body = "Egy félresikerült portal utazás során egy ismeretlen dimenzióban kötöttél ki -  Vissza léptél 8 mezőt!";
    randomCard.img = portalimage;
    handleShow();
  }

  function gambler() {
    randomCard.title = "Szerencsejáték";
    randomCard.body = "Nyertél szerencsejátékon 5000 kristályt!";
    randomCard.img = gamblerimage;
    handleShow();
  }

  function barfight() {
    randomCard.title = "Kocsmai verekedés";
    randomCard.body = "Egy hatalmas kocsmai verekedésben elvesztetted az összes kristályodat!";
    randomCard.img = barfightimage;
    handleShow();
  }

  function dragonSlayer() {
    randomCard.title = "Legyőztél egy sárkányt!";
    randomCard.body = "Megöltél egy hatalmas sárkányt! Előre léptél 8 mezőt és kaptál 7000 kristályt!";
    randomCard.img = dragonSlayerimage;
    handleShow();
  }





  function mysteryCard() {
    chooseRandomCard();
    if (
      playerTwoTurn === true &&
      randomCard.id === 1 &&
      playerOneTotalMoney >= 500
    ) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 500);
      setPlayerOneTotalNumber(playerOneTotalNumber - 3);
      csapda();
      turnButton();
    } else if (
      playerTwoTurn === true &&
      randomCard.id === 2 &&
      playerOneTotalMoney >= 500
    ) {
      zsebtolvaj();
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 2500);
      turnButton();
    } else if (
      playerTwoTurn === true &&
      randomCard.id === 3 &&
      playerOneTotalMoney >= 500
    ) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 500);
      setPlayerOneTotalNumber(playerOneTotalNumber + 5);
      potion();
      turnButton();
    } else if (
      playerTwoTurn === true &&
      randomCard.id === 4 &&
      playerOneTotalMoney >= 500
    ) {
      kincseslada();
      setPlayerOneTotalMoney(() => playerOneTotalMoney + 2000);
      turnButton();
    } else if (
      playerTwoTurn === true &&
      randomCard.id === 5 &&
      playerOneTotalMoney >= 500
    ) {
      magicScroll();
      setPlayerOneTotalNumber(playerOneTotalNumber + 3);
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 2000);
    } else if (
      playerTwoTurn === true &&
      randomCard.id === 6 &&
      playerOneTotalMoney >= 500
    ) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 500);
      setPlayerOneTotalNumber(playerOneTotalNumber + 4);
      favorOfTheGods();
    } else if (
      playerTwoTurn === true &&
      randomCard.id === 7 &&
      playerOneTotalMoney >= 500
    )  {
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 500);
      setPlayerOneTotalNumber(playerOneTotalNumber - 8);
      portal();
      turnButton();
    } else if (
      playerTwoTurn === true &&
      randomCard.id === 8 &&
      playerOneTotalMoney >= 500
    ) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney + 4500);
      gambler();
      turnButton();
    } else if (
      playerTwoTurn === true &&
      randomCard.id === 9 &&
      playerOneTotalMoney >= 500
    ) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney + 6500);
      setPlayerOneTotalNumber(playerOneTotalNumber + 8);
      dragonSlayer();
    } else if (
      playerOneTurn === true &&
      randomCard.id === 1 &&
      playerTwoTotalMoney >= 500
    ) {
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 500);
      setPlayerTwoTotalNumber(playerTwoTotalNumber - 3);
      csapda();
      turnButton();
    } else if (
      playerOneTurn === true &&
      randomCard.id === 2 &&
      playerTwoTotalMoney >= 500
    ) {
      zsebtolvaj();
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 2500);
      turnButton();
    } else if (
      playerOneTurn === true &&
      randomCard.id === 3 &&
      playerTwoTotalMoney >= 500
    ) {
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 500);
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 5);
      potion();
      turnButton();
    } else if (
      playerOneTurn === true &&
      randomCard.id === 4 &&
      playerTwoTotalMoney >= 500
    ) {
      kincseslada();
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 2000);
      turnButton();
    } else if (
      playerOneTurn === true &&
      randomCard.id === 5 &&
      playerTwoTotalMoney >= 500
    ) {
      magicScroll();
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 3);
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 2000);
    } else if (
      playerOneTurn === true &&
      randomCard.id === 6 &&
      playerTwoTotalMoney >= 500
    ) {
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 500);
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 4);
      favorOfTheGods();
    } else if (
      playerOneTurn === true &&
      randomCard.id === 7 &&
      playerTwoTotalMoney >= 500
    ) {
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 500);
      setPlayerTwoTotalNumber(playerTwoTotalNumber - 8);
      portal();
      turnButton();
    } else if (
      playerOneTurn === true &&
      randomCard.id === 8 &&
      playerTwoTotalMoney >= 500
    ) {
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 4500);
      gambler();
      turnButton();
    } else if (
      playerOneTurn === true &&
      randomCard.id === 9 &&
      playerTwoTotalMoney >= 500
    ) {
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 6500);
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 8);
      dragonSlayer();
    } else if (playerOneTotalMoney < 500) {
      setShowToastNotEnoughMoney();
    } else if (playerTwoTotalMoney < 500) {
      setShowToastNotEnoughMoney();
    }
  }


  if (playerOneTotalNumber < 0) {
    setPlayerOneTotalNumber(1)
  }

  if (playerTwoTotalNumber < 0) {
    setPlayerTwoTotalNumber(1)
  }



  const [cardModalShow, setCardModalShow] = useState(true);
  const handleCardModalClose = () => setCardModalShow(false);
  const handleCardModalShow = () => setCardModalShow(true);

  const [cardModalShowPlayerTwo, setCardModalShowPlayerTwo] = useState(false);
  const handleCardModalClosePlayerTwo = () => setCardModalShowPlayerTwo(false);
  const handleCardModalShowPlayerTwo = () => setCardModalShowPlayerTwo(true);

  // MEZŐK //

  const playerMezok = [
    {
      id: 1,
      img: null,
      sameMezo: "",
    },
    {
      id: 2,
      img: ezres,
      sameMezo: "",
    },
    {
      id: 3,
      img: null,
      sameMezo: "",
    },
    {
      id: 4,
      img: null,
      sameMezo: "",
    },
    {
      id: 5,
      img: null,
      sameMezo: "",
    },
    {
      id: 6,
      img: null,
      sameMezo: "",
    },
    {
      id: 7,
      img: otszazas,
      sameMezo: "",
    },
    {
      id: 8,
      img: null,
      sameMezo: "",
    },
    {
      id: 9,
      img: null,
      sameMezo: "",
    },
    {
      id: 10,
      img: null,
      sameMezo: "",
    },
  ];

  const playerMezok2 = [
    {
      id: 11,
      img: null,
      sameMezo: "",
    },
    {
      id: 12,
      img: null,
      sameMezo: "",
    },
    {
      id: 13,
      img: otszazas,
      sameMezo: "",
    },
    {
      id: 14,
      img: null,
      sameMezo: "",
    },
    {
      id: 15,
      img: null,
      sameMezo: "",
    },
    {
      id: 16,
      img: null,
      sameMezo: "",
    },
    {
      id: 17,
      img: null,
      sameMezo: "",
    },
    {
      id: 18,
      img: null,
      sameMezo: "",
    },
    {
      id: 19,
      img: ezres,
      sameMezo: "",
    },
    {
      id: 20,
      img: null,
      sameMezo: "",
    },
  ];

  const playerMezok3 = [
    {
      id: 21,
      img: otszazas,
      sameMezo: "",
    },
    {
      id: 22,
      img: null,
      sameMezo: "",
    },
    {
      id: 23,
      img: null,
      sameMezo: "",
    },
    {
      id: 24,
      img: null,
      sameMezo: "",
    },
    {
      id: 25,
      img: ezres,
      sameMezo: "",
      pickedup: false,
    },
    {
      id: 26,
      img: null,
      sameMezo: "",
    },
    {
      id: 27,
      img: null,
      sameMezo: "",
    },
    {
      id: 28,
      img: null,
      sameMezo: "",
    },
    {
      id: 29,
      img: null,
      sameMezo: "",
    },
    {
      id: 30,
      img: null,
      sameMezo: "",
    },
  ];

  const playerMezok4 = [
    {
      id: 31,
      img: null,
      sameMezo: "",
    },
    {
      id: 32,
      img: null,
      sameMezo: "",
    },
    {
      id: 33,
      img: null,
      sameMezo: "",
    },
    {
      id: 34,
      img: null,
      sameMezo: "",
    },
    {
      id: 35,
      img: null,
      sameMezo: "",
    },
    {
      id: 36,
      img: null,
      sameMezo: "",
    },
    {
      id: 37,
      img: ezres,
      sameMezo: "",
    },
    {
      id: 38,
      img: null,
      sameMezo: "",
    },
    {
      id: 39,
      img: null,
      sameMezo: "",
    },
    {
      id: 40,
      img: otszazas,
      sameMezo: "",
    },
  ];

  const playerMezok5 = [
    {
      id: 41,
      img: null,
      sameMezo: "",
    },
    {
      id: 42,
      img: null,
      sameMezo: "",
    },
    {
      id: 43,
      img: null,
      sameMezo: "",
    },
    {
      id: 44,
      img: null,
      sameMezo: "",
    },
    {
      id: 45,
      img: otezres,
      sameMezo: "",
    },
    {
      id: 46,
      img: null,
      sameMezo: "",
    },
    {
      id: 47,
      img: null,
      sameMezo: "",
    },
    {
      id: 48,
      img: null,
      sameMezo: "",
    },
    {
      id: 49,
      img: null,
      sameMezo: "",
    },
    {
      id: 50,
      img: null,
      sameMezo: "",
    },
  ];

  const playerMezok6 = [
    {
      id: 51,
      img: null,
      sameMezo: "",
    },
    {
      id: 52,
      img: ketezres,
      sameMezo: "",
    },
    {
      id: 53,
      img: null,
      sameMezo: "",
    },
    {
      id: 54,
      img: null,
      sameMezo: "",
    },
    {
      id: 55,
      img: null,
      sameMezo: "",
    },
    {
      id: 56,
      img: null,
      sameMezo: "",
    },
    {
      id: 57,
      img: ezres,
      sameMezo: "",
    },
    {
      id: 58,
      img: null,
      sameMezo: "",
    },
    {
      id: 59,
      img: null,
      sameMezo: "",
    },
    {
      id: 60,
      img: null,
      sameMezo: "",
    },
  ];

  const playerMezok7 = [
    {
      id: 61,
      img: null,
      sameMezo: "",
    },
    {
      id: 62,
      img: null,
      sameMezo: "",
    },
    {
      id: 63,
      img: null,
      sameMezo: "",
    },
    {
      id: 64,
      img: otszazas,
      sameMezo: "",
    },
    {
      id: 65,
      img: null,
      sameMezo: "",
    },
    {
      id: 66,
      img: null,
      sameMezo: "",
    },
    {
      id: 67,
      img: null,
      sameMezo: "",
    },
    {
      id: 68,
      img: null,
      sameMezo: "",
    },
    {
      id: 69,
      img: null,
      sameMezo: "",
    },
    {
      id: 70,
      img: ketezres,
      sameMezo: "",
    },
  ];

  const playerMezok8 = [
    {
      id: 71,
      img: null,
      sameMezo: "",
    },
    {
      id: 72,
      img: null,
      sameMezo: "",
    },
    {
      id: 73,
      img: null,
      sameMezo: "",
    },
    {
      id: 74,
      img: null,
      sameMezo: "",
    },
    {
      id: 75,
      img: ezres,
      sameMezo: "",
    },
    {
      id: 76,
      img: null,
      sameMezo: "",
    },
    {
      id: 77,
      img: null,
      sameMezo: "",
    },
    {
      id: 78,
      img: null,
      sameMezo: "",
    },
    {
      id: 79,
      img: ketezres,
      sameMezo: "",
    },
    {
      id: 80,
      img: null,
      sameMezo: "",
    },
  ];

  const playerMezok9 = [
    {
      id: 81,
      img: null,
      sameMezo: "",
    },
    {
      id: 82,
      img: null,
      sameMezo: "",
    },
    {
      id: 83,
      img: otszazas,
      sameMezo: "",
    },
    {
      id: 84,
      img: null,
      sameMezo: "",
    },
    {
      id: 85,
      img: null,
      sameMezo: "",
    },
    {
      id: 86,
      img: null,
      sameMezo: "",
    },
    {
      id: 87,
      img: ezres,
      sameMezo: "",
    },
    {
      id: 88,
      img: null,
      sameMezo: "",
    },
    {
      id: 89,
      img: null,
      sameMezo: "",
    },
    {
      id: 90,
      img: null,
      sameMezo: "",
    },
  ];

  const playerMezok10 = [
    {
      id: 91,
      img: null,
      sameMezo: "",
    },
    {
      id: 92,
      img: ezres,
      sameMezo: "",
    },
    {
      id: 93,
      img: null,
      sameMezo: "",
    },
    {
      id: 94,
      img: null,
      sameMezo: "",
    },
    {
      id: 95,
      img: null,
      sameMezo: "",
    },
    {
      id: 96,
      img: ketezres,
      sameMezo: "",
    },
    {
      id: 97,
      img: null,
      sameMezo: "",
    },
    {
      id: 98,
      img: null,
      sameMezo: "",
    },
    {
      id: 99,
      img: null,
      sameMezo: "",
    },
    {
      id: 100,
      img: null,
      sameMezo: "",
    },
  ];

  // PÉNZES MEZŐK //

  useEffect(() => {
    switch (playerOneTotalNumber) {
      case 2:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 1000);
        break;
      case 7:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 500);
        break;
      case 13:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 500);
        break;
      case 19:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 1000);
        break;
      case 21:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 500);
        break;
      case 25:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 1000);
        break;
      case 37:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 1000);
        break;
      case 40:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 500);
        break;
      case 45:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 5000);
        break;
      case 52:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 2000);
        break;
      case 57:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 1000);
        break;
      case 64:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 500);
        break;
      case 70:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 2000);
        break;
      case 75:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 1000);
        break;
      case 79:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 2000);
        break;
      case 83:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 500);
        break;
      case 87:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 1000);
        break;
      case 92:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 1000);
        break;
      case 96:
        setPlayerOneTotalMoney(() => playerOneTotalMoney + 2000);
        break;
    }
  }, [playerOneTotalNumber]);

  useEffect(() => {
    switch (playerTwoTotalNumber) {
      case 2:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 1000);
        break;
      case 7:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 500);
        break;
      case 13:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 500);
        break;
      case 19:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 1000);
        break;
      case 21:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 500);
        break;
      case 25:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 1000);
        break;
      case 37:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 1000);
        break;
      case 40:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 500);
        break;
      case 45:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 5000);
        break;
      case 52:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 2000);
        break;
      case 57:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 1000);
        break;
      case 64:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 500);
        break;
      case 70:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 2000);
        break;
      case 75:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 1000);
        break;
      case 79:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 2000);
        break;
      case 83:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 500);
        break;
      case 87:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 1000);
        break;
      case 92:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 1000);
        break;
      case 96:
        setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 2000);
        break;
    }
  }, [playerTwoTotalNumber]);

  // MERLIN ABILITY //
  const [merlinCounter, setMerlinCounter] = useState(8);
  useEffect(() => {
    setMerlinCounter(merlinCounter - 1);
    if (
      playerOneChoice === "Merlin" &&
      playerTwoTotalMoney >= 1000 &&
      merlinCounter <= 0
    ) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney + 1000);
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 1000);
      setMerlinCounter(8);
      merlinTarifa();
    }
  }, [playerTwoTotalNumber]);

  useEffect(() => {
    setMerlinCounter(merlinCounter - 1);
    if (
      playerTwoChoice === "Merlin" &&
      playerOneTotalMoney >= 1000 &&
      merlinCounter <= 0
    ) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 1000);
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 1000);
      setMerlinCounter(8);
      merlinTarifa();
    }
  }, [playerOneTotalNumber]);

  switch (playerOneTotalNumber) {
    case 1:
      playerMezok[0].img = playerOneChoiceImg;
      break;
    case 2:
      playerMezok[1].img = playerOneChoiceImg;
      break;
    case 3:
      playerMezok[2].img = playerOneChoiceImg;
      break;
    case 4:
      playerMezok[3].img = playerOneChoiceImg;
      break;
    case 5:
      playerMezok[4].img = playerOneChoiceImg;
      break;
    case 6:
      playerMezok[5].img = playerOneChoiceImg;
      break;
    case 7:
      playerMezok[6].img = playerOneChoiceImg;
      break;
    case 8:
      playerMezok[7].img = playerOneChoiceImg;
      break;
    case 9:
      playerMezok[8].img = playerOneChoiceImg;
      break;
    case 10:
      playerMezok[9].img = playerOneChoiceImg;
      break;
    case 11:
      playerMezok2[0].img = playerOneChoiceImg;
      break;
    case 12:
      playerMezok2[1].img = playerOneChoiceImg;
      break;
    case 13:
      playerMezok2[2].img = playerOneChoiceImg;
      break;
    case 14:
      playerMezok2[3].img = playerOneChoiceImg;
      break;
    case 15:
      playerMezok2[4].img = playerOneChoiceImg;
      break;
    case 16:
      playerMezok2[5].img = playerOneChoiceImg;
      break;
    case 17:
      playerMezok2[6].img = playerOneChoiceImg;
      break;
    case 18:
      playerMezok2[7].img = playerOneChoiceImg;
      break;
    case 19:
      playerMezok2[8].img = playerOneChoiceImg;
      break;
    case 20:
      playerMezok2[9].img = playerOneChoiceImg;
      break;
    case 21:
      playerMezok3[0].img = playerOneChoiceImg;
      break;
    case 22:
      playerMezok3[1].img = playerOneChoiceImg;
      break;
    case 23:
      playerMezok3[2].img = playerOneChoiceImg;
      break;
    case 24:
      playerMezok3[3].img = playerOneChoiceImg;
      break;
    case 25:
      playerMezok3[4].img = playerOneChoiceImg;
      break;
    case 26:
      playerMezok3[5].img = playerOneChoiceImg;
      break;
    case 27:
      playerMezok3[6].img = playerOneChoiceImg;
      break;
    case 28:
      playerMezok3[7].img = playerOneChoiceImg;
      break;
    case 29:
      playerMezok3[8].img = playerOneChoiceImg;
      break;
    case 30:
      playerMezok3[9].img = playerOneChoiceImg;
      break;
    case 31:
      playerMezok4[0].img = playerOneChoiceImg;
      break;
    case 32:
      playerMezok4[1].img = playerOneChoiceImg;
      break;
    case 33:
      playerMezok4[2].img = playerOneChoiceImg;
      break;
    case 34:
      playerMezok4[3].img = playerOneChoiceImg;
      break;
    case 35:
      playerMezok4[4].img = playerOneChoiceImg;
      break;
    case 36:
      playerMezok4[5].img = playerOneChoiceImg;
      break;
    case 37:
      playerMezok4[6].img = playerOneChoiceImg;
      break;
    case 38:
      playerMezok4[7].img = playerOneChoiceImg;
      break;
    case 39:
      playerMezok4[8].img = playerOneChoiceImg;
      break;
    case 40:
      playerMezok4[9].img = playerOneChoiceImg;
      break;
    case 41:
      playerMezok5[0].img = playerOneChoiceImg;
      break;
    case 42:
      playerMezok5[1].img = playerOneChoiceImg;
      break;
    case 43:
      playerMezok5[2].img = playerOneChoiceImg;
      break;
    case 44:
      playerMezok5[3].img = playerOneChoiceImg;
      break;
    case 45:
      playerMezok5[4].img = playerOneChoiceImg;
      break;
    case 46:
      playerMezok5[5].img = playerOneChoiceImg;
      break;
    case 47:
      playerMezok5[6].img = playerOneChoiceImg;
      break;
    case 48:
      playerMezok5[7].img = playerOneChoiceImg;
      break;
    case 49:
      playerMezok5[8].img = playerOneChoiceImg;
      break;
    case 50:
      playerMezok5[9].img = playerOneChoiceImg;
      break;
    case 51:
      playerMezok6[0].img = playerOneChoiceImg;
      break;
    case 52:
      playerMezok6[1].img = playerOneChoiceImg;
      break;
    case 53:
      playerMezok6[2].img = playerOneChoiceImg;
      break;
    case 54:
      playerMezok6[3].img = playerOneChoiceImg;
      break;
    case 55:
      playerMezok6[4].img = playerOneChoiceImg;
      break;
    case 56:
      playerMezok6[5].img = playerOneChoiceImg;
      break;
    case 57:
      playerMezok6[6].img = playerOneChoiceImg;
      break;
    case 58:
      playerMezok6[7].img = playerOneChoiceImg;
      break;
    case 59:
      playerMezok6[8].img = playerOneChoiceImg;
      break;
    case 60:
      playerMezok6[9].img = playerOneChoiceImg;
      break;
    case 61:
      playerMezok7[0].img = playerOneChoiceImg;
      break;
    case 62:
      playerMezok7[1].img = playerOneChoiceImg;
      break;
    case 63:
      playerMezok7[2].img = playerOneChoiceImg;
      break;
    case 64:
      playerMezok7[3].img = playerOneChoiceImg;
      break;
    case 65:
      playerMezok7[4].img = playerOneChoiceImg;
      break;
    case 66:
      playerMezok7[5].img = playerOneChoiceImg;
      break;
    case 67:
      playerMezok7[6].img = playerOneChoiceImg;
      break;
    case 68:
      playerMezok7[7].img = playerOneChoiceImg;
      break;
    case 69:
      playerMezok7[8].img = playerOneChoiceImg;
      break;
    case 70:
      playerMezok7[9].img = playerOneChoiceImg;
      break;
    case 71:
      playerMezok8[0].img = playerOneChoiceImg;
      break;
    case 72:
      playerMezok8[1].img = playerOneChoiceImg;
      break;
    case 73:
      playerMezok8[2].img = playerOneChoiceImg;
      break;
    case 74:
      playerMezok8[3].img = playerOneChoiceImg;
      break;
    case 75:
      playerMezok8[4].img = playerOneChoiceImg;
      break;
    case 76:
      playerMezok8[5].img = playerOneChoiceImg;
      break;
    case 77:
      playerMezok8[6].img = playerOneChoiceImg;
      break;
    case 78:
      playerMezok8[7].img = playerOneChoiceImg;
      break;
    case 79:
      playerMezok8[8].img = playerOneChoiceImg;
      break;
    case 80:
      playerMezok8[9].img = playerOneChoiceImg;
      break;
    case 81:
      playerMezok9[0].img = playerOneChoiceImg;
      break;
    case 82:
      playerMezok9[1].img = playerOneChoiceImg;
      break;
    case 83:
      playerMezok9[2].img = playerOneChoiceImg;
      break;
    case 84:
      playerMezok9[3].img = playerOneChoiceImg;
      break;
    case 85:
      playerMezok9[4].img = playerOneChoiceImg;
      break;
    case 86:
      playerMezok9[5].img = playerOneChoiceImg;
      break;
    case 87:
      playerMezok9[6].img = playerOneChoiceImg;
      break;
    case 88:
      playerMezok9[7].img = playerOneChoiceImg;
      break;
    case 89:
      playerMezok9[8].img = playerOneChoiceImg;
      break;
    case 90:
      playerMezok9[9].img = playerOneChoiceImg;
      break;
    case 91:
      playerMezok10[0].img = playerOneChoiceImg;
      break;
    case 92:
      playerMezok10[1].img = playerOneChoiceImg;
      break;
    case 93:
      playerMezok10[2].img = playerOneChoiceImg;
      break;
    case 94:
      playerMezok10[3].img = playerOneChoiceImg;
      break;
    case 95:
      playerMezok10[4].img = playerOneChoiceImg;
      break;
    case 96:
      playerMezok10[5].img = playerOneChoiceImg;
      break;
    case 97:
      playerMezok10[6].img = playerOneChoiceImg;
      break;
    case 98:
      playerMezok10[7].img = playerOneChoiceImg;
      break;
    case 99:
      playerMezok10[8].img = playerOneChoiceImg;
      break;
    case 100:
      playerMezok10[9].img = playerOneChoiceImg;
      break;
  }

  switch (playerTwoTotalNumber) {
    case 1:
      playerMezok[0].img = playerTwoChoiceImg;
      break;
    case 2:
      playerMezok[1].img = playerTwoChoiceImg;
      break;
    case 3:
      playerMezok[2].img = playerTwoChoiceImg;
      break;
    case 4:
      playerMezok[3].img = playerTwoChoiceImg;
      break;
    case 5:
      playerMezok[4].img = playerTwoChoiceImg;
      break;
    case 6:
      playerMezok[5].img = playerTwoChoiceImg;
      break;
    case 7:
      playerMezok[6].img = playerTwoChoiceImg;
      break;
    case 8:
      playerMezok[7].img = playerTwoChoiceImg;
      break;
    case 9:
      playerMezok[8].img = playerTwoChoiceImg;
      break;
    case 10:
      playerMezok[9].img = playerTwoChoiceImg;
      break;
    case 11:
      playerMezok2[0].img = playerTwoChoiceImg;
      break;
    case 12:
      playerMezok2[1].img = playerTwoChoiceImg;
      break;
    case 13:
      playerMezok2[2].img = playerTwoChoiceImg;
      break;
    case 14:
      playerMezok2[3].img = playerTwoChoiceImg;
      break;
    case 15:
      playerMezok2[4].img = playerTwoChoiceImg;
      break;
    case 16:
      playerMezok2[5].img = playerTwoChoiceImg;
      break;
    case 17:
      playerMezok2[6].img = playerTwoChoiceImg;
      break;
    case 18:
      playerMezok2[7].img = playerTwoChoiceImg;
      break;
    case 19:
      playerMezok2[8].img = playerTwoChoiceImg;
      break;
    case 20:
      playerMezok2[9].img = playerTwoChoiceImg;
      break;
    case 21:
      playerMezok3[0].img = playerTwoChoiceImg;
      break;
    case 22:
      playerMezok3[1].img = playerTwoChoiceImg;
      break;
    case 23:
      playerMezok3[2].img = playerTwoChoiceImg;
      break;
    case 24:
      playerMezok3[3].img = playerTwoChoiceImg;
      break;
    case 25:
      playerMezok3[4].img = playerTwoChoiceImg;
      break;
    case 26:
      playerMezok3[5].img = playerTwoChoiceImg;
      break;
    case 27:
      playerMezok3[6].img = playerTwoChoiceImg;
      break;
    case 28:
      playerMezok3[7].img = playerTwoChoiceImg;
      break;
    case 29:
      playerMezok3[8].img = playerTwoChoiceImg;
      break;
    case 30:
      playerMezok3[9].img = playerTwoChoiceImg;
      break;
    case 31:
      playerMezok4[0].img = playerTwoChoiceImg;
      break;
    case 32:
      playerMezok4[1].img = playerTwoChoiceImg;
      break;
    case 33:
      playerMezok4[2].img = playerTwoChoiceImg;
      break;
    case 34:
      playerMezok4[3].img = playerTwoChoiceImg;
      break;
    case 35:
      playerMezok4[4].img = playerTwoChoiceImg;
      break;
    case 36:
      playerMezok4[5].img = playerTwoChoiceImg;
      break;
    case 37:
      playerMezok4[6].img = playerTwoChoiceImg;
      break;
    case 38:
      playerMezok4[7].img = playerTwoChoiceImg;
      break;
    case 39:
      playerMezok4[8].img = playerTwoChoiceImg;
      break;
    case 40:
      playerMezok4[9].img = playerTwoChoiceImg;
      break;
    case 41:
      playerMezok5[0].img = playerTwoChoiceImg;
      break;
    case 42:
      playerMezok5[1].img = playerTwoChoiceImg;
      break;
    case 43:
      playerMezok5[2].img = playerTwoChoiceImg;
      break;
    case 44:
      playerMezok5[3].img = playerTwoChoiceImg;
      break;
    case 45:
      playerMezok5[4].img = playerTwoChoiceImg;
      break;
    case 46:
      playerMezok5[5].img = playerTwoChoiceImg;
      break;
    case 47:
      playerMezok5[6].img = playerTwoChoiceImg;
      break;
    case 48:
      playerMezok5[7].img = playerTwoChoiceImg;
      break;
    case 49:
      playerMezok5[8].img = playerTwoChoiceImg;
      break;
    case 50:
      playerMezok5[9].img = playerTwoChoiceImg;
      break;
    case 51:
      playerMezok6[0].img = playerTwoChoiceImg;
      break;
    case 52:
      playerMezok6[1].img = playerTwoChoiceImg;
      break;
    case 53:
      playerMezok6[2].img = playerTwoChoiceImg;
      break;
    case 54:
      playerMezok6[3].img = playerTwoChoiceImg;
      break;
    case 55:
      playerMezok6[4].img = playerTwoChoiceImg;
      break;
    case 56:
      playerMezok6[5].img = playerTwoChoiceImg;
      break;
    case 57:
      playerMezok6[6].img = playerTwoChoiceImg;
      break;
    case 58:
      playerMezok6[7].img = playerTwoChoiceImg;
      break;
    case 59:
      playerMezok6[8].img = playerTwoChoiceImg;
      break;
    case 60:
      playerMezok6[9].img = playerTwoChoiceImg;
      break;
    case 61:
      playerMezok7[0].img = playerTwoChoiceImg;
      break;
    case 62:
      playerMezok7[1].img = playerTwoChoiceImg;
      break;
    case 63:
      playerMezok7[2].img = playerTwoChoiceImg;
      break;
    case 64:
      playerMezok7[3].img = playerTwoChoiceImg;
      break;
    case 65:
      playerMezok7[4].img = playerTwoChoiceImg;
      break;
    case 66:
      playerMezok7[5].img = playerTwoChoiceImg;
      break;
    case 67:
      playerMezok7[6].img = playerTwoChoiceImg;
      break;
    case 68:
      playerMezok7[7].img = playerTwoChoiceImg;
      break;
    case 69:
      playerMezok7[8].img = playerTwoChoiceImg;
      break;
    case 70:
      playerMezok7[9].img = playerTwoChoiceImg;
      break;
    case 71:
      playerMezok8[0].img = playerTwoChoiceImg;
      break;
    case 72:
      playerMezok8[1].img = playerTwoChoiceImg;
      break;
    case 73:
      playerMezok8[2].img = playerTwoChoiceImg;
      break;
    case 74:
      playerMezok8[3].img = playerTwoChoiceImg;
      break;
    case 75:
      playerMezok8[4].img = playerTwoChoiceImg;
      break;
    case 76:
      playerMezok8[5].img = playerTwoChoiceImg;
      break;
    case 77:
      playerMezok8[6].img = playerTwoChoiceImg;
      break;
    case 78:
      playerMezok8[7].img = playerTwoChoiceImg;
      break;
    case 79:
      playerMezok8[8].img = playerTwoChoiceImg;
      break;
    case 80:
      playerMezok8[9].img = playerTwoChoiceImg;
      break;
    case 81:
      playerMezok9[0].img = playerTwoChoiceImg;
      break;
    case 82:
      playerMezok9[1].img = playerTwoChoiceImg;
      break;
    case 83:
      playerMezok9[2].img = playerTwoChoiceImg;
      break;
    case 84:
      playerMezok9[3].img = playerTwoChoiceImg;
      break;
    case 85:
      playerMezok9[4].img = playerTwoChoiceImg;
      break;
    case 86:
      playerMezok9[5].img = playerTwoChoiceImg;
      break;
    case 87:
      playerMezok9[6].img = playerTwoChoiceImg;
      break;
    case 88:
      playerMezok9[7].img = playerTwoChoiceImg;
      break;
    case 89:
      playerMezok9[8].img = playerTwoChoiceImg;
      break;
    case 90:
      playerMezok9[9].img = playerTwoChoiceImg;
      break;
    case 91:
      playerMezok10[0].img = playerTwoChoiceImg;
      break;
    case 92:
      playerMezok10[1].img = playerTwoChoiceImg;
      break;
    case 93:
      playerMezok10[2].img = playerTwoChoiceImg;
      break;
    case 94:
      playerMezok10[3].img = playerTwoChoiceImg;
      break;
    case 95:
      playerMezok10[4].img = playerTwoChoiceImg;
      break;
    case 96:
      playerMezok10[5].img = playerTwoChoiceImg;
      break;
    case 97:
      playerMezok10[6].img = playerTwoChoiceImg;
      break;
    case 98:
      playerMezok10[7].img = playerTwoChoiceImg;
      break;
    case 99:
      playerMezok10[8].img = playerTwoChoiceImg;
      break;
    case 100:
      playerMezok10[9].img = playerTwoChoiceImg;
      break;
  }

  switch (true) {
    case playerOneTotalNumber === 1 && playerTwoTotalNumber === 1:
      playerMezok[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 2 && playerTwoTotalNumber === 2:
      playerMezok[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 3 && playerTwoTotalNumber === 3:
      playerMezok[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 4 && playerTwoTotalNumber === 4:
      playerMezok[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 5 && playerTwoTotalNumber === 5:
      playerMezok[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 6 && playerTwoTotalNumber === 6:
      playerMezok[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 7 && playerTwoTotalNumber === 7:
      playerMezok[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 8 && playerTwoTotalNumber === 8:
      playerMezok[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 9 && playerTwoTotalNumber === 9:
      playerMezok[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 10 && playerTwoTotalNumber === 10:
      playerMezok[9].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 11 && playerTwoTotalNumber === 11:
      playerMezok2[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 12 && playerTwoTotalNumber === 12:
      playerMezok2[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 13 && playerTwoTotalNumber === 13:
      playerMezok2[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 14 && playerTwoTotalNumber === 14:
      playerMezok2[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 15 && playerTwoTotalNumber === 15:
      playerMezok2[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 16 && playerTwoTotalNumber === 16:
      playerMezok2[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 17 && playerTwoTotalNumber === 17:
      playerMezok2[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 18 && playerTwoTotalNumber === 18:
      playerMezok2[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 19 && playerTwoTotalNumber === 19:
      playerMezok2[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 20 && playerTwoTotalNumber === 20:
      playerMezok2[9].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 21 && playerTwoTotalNumber === 21:
      playerMezok3[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 22 && playerTwoTotalNumber === 22:
      playerMezok3[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 23 && playerTwoTotalNumber === 23:
      playerMezok3[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 24 && playerTwoTotalNumber === 24:
      playerMezok3[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 25 && playerTwoTotalNumber === 25:
      playerMezok3[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 26 && playerTwoTotalNumber === 26:
      playerMezok3[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 27 && playerTwoTotalNumber === 27:
      playerMezok3[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 28 && playerTwoTotalNumber === 28:
      playerMezok3[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 29 && playerTwoTotalNumber === 29:
      playerMezok3[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 30 && playerTwoTotalNumber === 30:
      playerMezok3[9].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 31 && playerTwoTotalNumber === 31:
      playerMezok4[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 32 && playerTwoTotalNumber === 32:
      playerMezok4[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 33 && playerTwoTotalNumber === 33:
      playerMezok4[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 34 && playerTwoTotalNumber === 34:
      playerMezok4[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 35 && playerTwoTotalNumber === 35:
      playerMezok4[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 36 && playerTwoTotalNumber === 36:
      playerMezok4[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 37 && playerTwoTotalNumber === 37:
      playerMezok4[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 38 && playerTwoTotalNumber === 38:
      playerMezok4[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 39 && playerTwoTotalNumber === 39:
      playerMezok4[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 40 && playerTwoTotalNumber === 40:
      playerMezok4[9].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 41 && playerTwoTotalNumber === 41:
      playerMezok5[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 42 && playerTwoTotalNumber === 42:
      playerMezok5[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 43 && playerTwoTotalNumber === 43:
      playerMezok5[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 44 && playerTwoTotalNumber === 44:
      playerMezok5[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 45 && playerTwoTotalNumber === 45:
      playerMezok5[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 46 && playerTwoTotalNumber === 46:
      playerMezok5[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 47 && playerTwoTotalNumber === 47:
      playerMezok5[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 48 && playerTwoTotalNumber === 48:
      playerMezok5[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 49 && playerTwoTotalNumber === 49:
      playerMezok5[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 50 && playerTwoTotalNumber === 50:
      playerMezok5[9].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 51 && playerTwoTotalNumber === 51:
      playerMezok6[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 52 && playerTwoTotalNumber === 52:
      playerMezok6[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 53 && playerTwoTotalNumber === 53:
      playerMezok6[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 54 && playerTwoTotalNumber === 54:
      playerMezok6[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 55 && playerTwoTotalNumber === 55:
      playerMezok6[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 56 && playerTwoTotalNumber === 56:
      playerMezok6[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 57 && playerTwoTotalNumber === 57:
      playerMezok6[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 58 && playerTwoTotalNumber === 58:
      playerMezok6[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 59 && playerTwoTotalNumber === 59:
      playerMezok6[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 60 && playerTwoTotalNumber === 60:
      playerMezok6[9].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 61 && playerTwoTotalNumber === 61:
      playerMezok7[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 62 && playerTwoTotalNumber === 62:
      playerMezok7[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 63 && playerTwoTotalNumber === 63:
      playerMezok7[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 64 && playerTwoTotalNumber === 64:
      playerMezok7[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 65 && playerTwoTotalNumber === 65:
      playerMezok7[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 66 && playerTwoTotalNumber === 66:
      playerMezok7[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 67 && playerTwoTotalNumber === 67:
      playerMezok7[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 68 && playerTwoTotalNumber === 68:
      playerMezok7[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 69 && playerTwoTotalNumber === 69:
      playerMezok7[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 70 && playerTwoTotalNumber === 70:
      playerMezok7[9].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 71 && playerTwoTotalNumber === 71:
      playerMezok8[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 72 && playerTwoTotalNumber === 72:
      playerMezok8[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 73 && playerTwoTotalNumber === 73:
      playerMezok8[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 74 && playerTwoTotalNumber === 74:
      playerMezok8[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 75 && playerTwoTotalNumber === 75:
      playerMezok8[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 76 && playerTwoTotalNumber === 76:
      playerMezok8[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 77 && playerTwoTotalNumber === 77:
      playerMezok8[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 78 && playerTwoTotalNumber === 78:
      playerMezok8[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 79 && playerTwoTotalNumber === 79:
      playerMezok8[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 80 && playerTwoTotalNumber === 80:
      playerMezok8[9].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 81 && playerTwoTotalNumber === 81:
      playerMezok9[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 82 && playerTwoTotalNumber === 82:
      playerMezok9[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 83 && playerTwoTotalNumber === 83:
      playerMezok9[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 84 && playerTwoTotalNumber === 84:
      playerMezok9[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 85 && playerTwoTotalNumber === 85:
      playerMezok9[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 86 && playerTwoTotalNumber === 86:
      playerMezok9[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 87 && playerTwoTotalNumber === 87:
      playerMezok9[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 88 && playerTwoTotalNumber === 88:
      playerMezok9[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 89 && playerTwoTotalNumber === 89:
      playerMezok9[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 90 && playerTwoTotalNumber === 90:
      playerMezok9[9].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 91 && playerTwoTotalNumber === 91:
      playerMezok10[0].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 92 && playerTwoTotalNumber === 92:
      playerMezok10[1].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 93 && playerTwoTotalNumber === 93:
      playerMezok10[2].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 94 && playerTwoTotalNumber === 94:
      playerMezok10[3].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 95 && playerTwoTotalNumber === 95:
      playerMezok10[4].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 96 && playerTwoTotalNumber === 96:
      playerMezok10[5].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 97 && playerTwoTotalNumber === 97:
      playerMezok10[6].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 98 && playerTwoTotalNumber === 98:
      playerMezok10[7].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 99 && playerTwoTotalNumber === 99:
      playerMezok10[8].sameMezo = "P1+P2";
      break;
    case playerOneTotalNumber === 100 && playerTwoTotalNumber === 100:
      playerMezok10[9].sameMezo = "P1+P2";
      break;
  }

  // CURSE CARD AND MYSTERY CARD //

  const [cardModalShowCurseCard, setCardModalShowCurseCard] = useState(false);
  const handleCardModalCurseCardClose = () => setCardModalShowCurseCard(false);
  const handleCardModalCurseCardOpen = () => setCardModalShowCurseCard(true);

  let curseCardsArray = [
    {
      name: "Curse of Weakness",
      cost: 3500,
      description: "Az ellenfél visszalép 15 mezőt és elveszít 2000 Kristályt",
      img: curse1,
      id: 1,
    },

    {
      name: "Chaos of Pestilence",
      cost: 5000,
      description: "Az ellenfél visszalép 20 mezőt és elveszít 4000 Kristályt",
      img: curse2,
      id: 2,
    },

    {
      name: "Avada Kedavra",
      cost: 7500,
      description: "Az ellenfél visszalép 25 mezőt és elveszít Kristályt",
      img: curse3,
      id: 3,
    },
  ];

  function PlayerOneCurseCardOne() {
    setPlayerOneTotalMoney(() => playerTwoTotalMoney - 3500);
    setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 2000);
    setPlayerTwoTotalNumber(playerTwoTotalNumber - 15);
    setCardModalShowCurseCard(false);
    turnButton();
  }
  function PlayerOneCurseCardTwo() {
    setPlayerOneTotalMoney(() => playerTwoTotalMoney - 5000);
    setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 4000);
    setPlayerTwoTotalNumber(playerTwoTotalNumber - 20);
    setCardModalShowCurseCard(false);
    turnButton();
  }
  function PlayerOneCurseCardThree() {
    setPlayerOneTotalMoney(() => playerTwoTotalMoney - 7500);
    setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 7000);
    setPlayerTwoTotalNumber(playerTwoTotalNumber - 25);
    setCardModalShowCurseCard(false);
    turnButton();
  }

  function PlayerTwoCurseCardOne() {
    setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 3500);
    setPlayerOneTotalMoney(() => playerOneTotalMoney - 2000);
    setPlayerOneTotalNumber(playerOneTotalNumber - 15);
    setCardModalShowCurseCard(false);
    turnButton();
  }
  function PlayerTwoCurseCardTwo() {
    setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 5000);
    setPlayerOneTotalMoney(() => playerOneTotalMoney - 4000);
    setPlayerOneTotalNumber(playerOneTotalNumber - 20);
    setCardModalShowCurseCard(false);
    turnButton();
  }
  function PlayerTwoCurseCardThree() {
    setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 7500);
    setPlayerOneTotalMoney(() => playerOneTotalMoney - 7000);
    setPlayerOneTotalNumber(playerOneTotalNumber - 25);
    setCardModalShowCurseCard(false);
    turnButton();
  }

  const handleClickCurseCard = (e) => {
    if (
      e === 1 &&
      playerOneTotalNumber < playerTwoTotalNumber &&
      playerOneTurn === false &&
      playerTwoChoice !== "Paladin" &&
      playerOneTotalMoney >= 3500
    ) {
      PlayerOneCurseCardOne();
    } else if (
      e === 2 &&
      playerOneTotalNumber < playerTwoTotalNumber &&
      playerOneTurn === false &&
      playerTwoChoice !== "Paladin" &&
      playerOneTotalMoney >= 5000
    ) {
      PlayerOneCurseCardTwo();
    } else if (
      e === 3 &&
      playerOneTotalNumber < playerTwoTotalNumber &&
      playerOneTurn === false &&
      playerTwoChoice !== "Paladin" &&
      playerOneTotalMoney >= 7500
    ) {
      PlayerOneCurseCardThree();
    } else if (playerTwoChoice === "Paladin" && playerOneTurn === false) {
      setShowToastBlockedCurseCardPaladin();
    } else if (playerOneChoice === "Paladin" && playerTwoTurn === false) {
      setShowToastBlockedCurseCardPaladin();
    } else if (
      playerOneTotalNumber > playerTwoTotalNumber &&
      playerOneTurn === false
    ) {
      setShowToastBlockedCurseCard();
    } else if (
      playerTwoTotalNumber > playerOneTotalNumber &&
      playerTwoTurn === false
    ) {
      setShowToastBlockedCurseCard();
    } else if (
      e === 1 &&
      playerTwoTotalNumber < playerOneTotalNumber &&
      playerTwoTurn === false &&
      playerOneChoice !== "Paladin" &&
      playerTwoTotalMoney >= 3500
    ) {
      PlayerTwoCurseCardOne();
    } else if (
      e === 2 &&
      playerTwoTotalNumber < playerOneTotalNumber &&
      playerTwoTurn === false &&
      playerOneChoice !== "Paladin" &&
      playerTwoTotalMoney >= 5000
    ) {
      PlayerTwoCurseCardTwo();
    } else if (
      e === 3 &&
      playerTwoTotalNumber < playerOneTotalNumber &&
      playerTwoTurn === false &&
      playerOneChoice !== "Paladin" &&
      playerTwoTotalMoney >= 7500
    ) {
      PlayerTwoCurseCardThree();
    }
  };

  let mysteryCardImage = mysterycardlocked;
  let curseCardImage = cursecardlocked;

  if (playerTwoTotalNumber >= 50 || playerOneTotalNumber >= 50) {
    curseCardImage = cursecard;
    mysteryCardImage = mysterycard;
  } else if (playerTwoTotalNumber >= 25 || playerOneTotalNumber >= 25) {
    mysteryCardImage = mysterycard;
  }

  function curseCard() {
    if (
      playerTwoTotalNumber >= 50 ||
      (playerOneTotalNumber >= 50 && warlockAbility === false)
    ) {
      setCardModalShowCurseCard(true);
    } else if (
      (playerTwoTotalNumber >= 25 && warlockAbility === true) ||
      (playerOneTotalNumber >= 25 && warlockAbility === true)
    ) {
      setShowToastWarlockBlock();
    } else {
      setShowToastLockedCurseCard();
    }
  }

  function unlockedMysteryCard() {
    if (
      (playerTwoTotalNumber >= 25 && warlockAbility === false) ||
      (playerOneTotalNumber >= 25 && warlockAbility === false)
    ) {
      mysteryCard();
    } else if (
      (playerTwoTotalNumber >= 25 && warlockAbility === true) ||
      (playerOneTotalNumber >= 25 && warlockAbility === true)
    ) {
      setShowToastWarlockBlock();
    } else {
      setShowToastLockedMysteryCard(true);
    }
  }
  const [p2PaidManager, setP2PaidManager] = useState(true);
  function turnOffWarlockAbilityPlayerTwo() {
    if (playerTwoTotalMoney >= 5000) {
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 5000);
      setP2PaidManager(false);
      setShowToastPaidCops();
    } else {
      setShowToastNotEnoughMoney();
    }
  }

  const [p1PaidManager, setP1PaidManager] = useState(true);
  function turnOffWarlockAbilityPlayerOne() {
    if (playerOneTotalMoney >= 5000) {
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 5000);
      setP1PaidManager(false);
      setShowToastPaidCops();
    } else {
      setShowToastNotEnoughMoney();
    }
  }
  useEffect(() => {
    if (playerOneChoice === "Warlock" && playerOneTurn === false) {
      setWarlockAbility(false);
    } else if (playerOneChoice === "Warlock" && playerOneTurn === true) {
      setWarlockAbility(p2PaidManager);
    }
  }, [playerOneTurn, turnOffWarlockAbilityPlayerTwo]);

  useEffect(() => {
    if (playerTwoChoice === "Warlock" && playerTwoTurn === false) {
      setWarlockAbility(false);
    } else if (playerTwoChoice === "Warlock" && playerTwoTurn === true) {
      setWarlockAbility(p1PaidManager);
    }
  }, [playerTwoTurn, turnOffWarlockAbilityPlayerOne]);

  let disablebutton;
  let disablebuttonP2;

  if (playerOneTurn === false) {
    disablebutton = false;
  } else if (playerOneTurn === true) {
    disablebutton = true;
  }

  if (p1PaidManager === false) {
    disablebutton = true;
  }

  if (playerTwoTurn === false) {
    disablebuttonP2 = false;
  } else if (playerTwoTurn === true) {
    disablebuttonP2 = true;
  }

  if (p2PaidManager === false) {
    disablebuttonP2 = true;
  }

 

  //LOTTÓ//

  const [showLotto, setShowLotto] = useState(false);
  const handleCloseLotto = () => setShowLotto(false);
  const handleShowLotto = () => setShowLotto(true);

  const [lottoNumberOne, setLottoNumberOne] = useState();
  const [lottoNumberTwo, setLottoNumberTwo] = useState();
  const [lottoNumberThree, setLottoNumberThree] = useState();

  function lottonumberoneFunction() {
    setLottoNumberOne(Math.floor(Math.random() * 9 + 1));
  }
  function lottonumbertwoFunction() {
    setLottoNumberTwo(Math.floor(Math.random() * 9 + 1));
  }
  function lottonumberthreeFunction() {
    setLottoNumberThree(Math.floor(Math.random() * 9 + 1));
  }

  function lotto() {
    if (playerOneTurn === false && playerOneTotalMoney >= 1500) {
      lottonumberoneFunction();
      lottonumbertwoFunction();
      lottonumberthreeFunction();
      handleShowLotto();
    } else if (playerOneTurn === false && playerOneTotalMoney < 1500) {
      setShowToastNotEnoughMoney();
    } else if (playerTwoTurn === false && playerTwoTotalMoney >= 1500) {
      lottonumberoneFunction();
      lottonumbertwoFunction();
      lottonumberthreeFunction();
      handleShowLotto();
    } else if (playerTwoTurn === false && playerTwoTotalMoney < 1500) {
      setShowToastNotEnoughMoney();
    }
  }

  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];

  const options2 = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];
  const options3 = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];

  const [valueOne, setValueOne] = useState();
  const [valueTwo, setValueTwo] = useState();
  const [valueThree, setValueThree] = useState();
  function onChangeInput(value) {
    setValueOne(value.value);
  }

  function onChangeInputTwo(value) {
    setValueTwo(value.value);
  }

  function onChangeInputThree(value) {
    setValueThree(value.value);
  }

  const [winOrLose, setWinOrLose] = useState("");

  function lottoAction() {
    handleCloseLotto();
    if (
      (playerOneTurn === false && valueOne === lottoNumberOne) ||
      (playerOneTurn === false && valueTwo === lottoNumberTwo) ||
      (playerOneTurn === false && valueThree === lottoNumberThree)
    ) {
      turnButton();
      setWinOrLose("1 találat - Visszanyerted a játék árát!");
      handleShowLottoAction();
    }
    if (
      (playerOneTurn === false &&
        valueOne === lottoNumberOne &&
        valueTwo === lottoNumberTwo) ||
      (playerOneTurn === false &&
        valueOne === lottoNumberOne &&
        valueThree === lottoNumberThree) ||
      (playerOneTurn === false &&
        valueTwo === lottoNumberTwo &&
        valueThree === lottoNumberThree)
    ) {
      turnButton();
      setPlayerOneTotalMoney(() => playerOneTotalMoney + 3500);
      setWinOrLose("2 találat - nyertél 5000 Kristályt!");
      handleShowLottoAction();
    }
    if (
      playerOneTurn === false &&
      valueOne === lottoNumberOne &&
      valueTwo === lottoNumberTwo &&
      valueThree === lottoNumberThree
    ) {
      turnButton();
      setPlayerOneTotalMoney(() => playerOneTotalMoney + 3500);
      setPlayerOneTotalNumber(playerOneTotalNumber + 15);
      setWinOrLose("Telitalálat! Nyertél 5000 Kristályt és előreléptél 15 mezőt!");
      handleShowLottoAction();
    } else if (
      playerOneTurn === false &&
      valueOne !== lottoNumberOne &&
      valueTwo !== lottoNumberTwo &&
      valueThree !== lottoNumberThree
    ) {
      turnButton();
      setPlayerOneTotalMoney(() => playerOneTotalMoney - 1500);
      setWinOrLose("Nincs találat - nem nyertél");
      handleShowLottoAction();
    }

    if (
      (playerTwoTurn === false && valueOne === lottoNumberOne) ||
      (playerTwoTurn === false && valueTwo === lottoNumberTwo) ||
      (playerTwoTurn === false && valueThree === lottoNumberThree)
    ) {
      turnButton();
      setWinOrLose("1 találat - Visszanyerted a játék árát!");
      handleShowLottoAction();
    }
    if (
      (playerTwoTurn === false &&
        valueOne === lottoNumberOne &&
        valueTwo === lottoNumberTwo) ||
      (playerTwoTurn === false &&
        valueOne === lottoNumberOne &&
        valueThree === lottoNumberThree) ||
      (playerTwoTurn === false &&
        valueTwo === lottoNumberTwo &&
        valueThree === lottoNumberThree)
    ) {
      turnButton();
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 3500);
      setWinOrLose("2 találat - nyertél 5000 Kristályt!");
      handleShowLottoAction();
    }
    if (
      playerTwoTurn === false &&
      valueOne === lottoNumberOne &&
      valueTwo === lottoNumberTwo &&
      valueThree === lottoNumberThree
    ) {
      turnButton();
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney + 3500);
      setPlayerTwoTotalNumber(playerTwoTotalNumber + 15);
      setWinOrLose("Telitalálat! Nyertél 5000 Kristályt és előreléptél 15 mezőt!");
      handleShowLottoAction();
    } else if (
      playerTwoTurn === false &&
      valueOne !== lottoNumberOne &&
      valueTwo !== lottoNumberTwo &&
      valueThree !== lottoNumberThree
    ) {
      turnButton();
      setPlayerTwoTotalMoney(() => playerTwoTotalMoney - 1500);
      setWinOrLose("Nincs találat - nem nyertél");
      handleShowLottoAction();
    }
  }

  const [showLottoAction, setShowLottoAction] = useState(false);
  const handleCloseLottoAction = () => setShowLottoAction(false);
  const handleShowLottoAction = () => setShowLottoAction(true);

  // TOASTOK //
  const [showToastLockedMysteryCard, setShowToastLockedMysteryCard] =
    useState(false);
  const [showToastLockedCurseCard, setShowToastLockedCurseCard] =
    useState(false);
  const [showToastLockedWarlockBlock, setShowToastWarlockBlock] = useState(false);
  const [showToastPaidCops, setShowToastPaidCops] = useState(false);
  const [showToastNotEnoughMoney, setShowToastNotEnoughMoney] = useState(false);
  const [showToastBlockedCurseCard, setShowToastBlockedCurseCard] =
    useState(false);
  const [showToastBlockedCurseCardPaladin, setShowToastBlockedCurseCardPaladin] =
    useState(false);

  const [showToastPlayerOneThrow, setShowToastPlayerOneThrow] = useState(false);
  const [showToastPlayerTwoThrow, setShowToastPlayerTwoThrow] = useState(false);

  const [turnIndicator, setTurnIndicator] = useState("");

  useEffect(() => {
    if (playerOneTurn === false) {
      setTurnIndicator("Player 1 következik");
    } else if (playerTwoTurn === false) {
      setTurnIndicator("Player 2 következik");
    }
  }, [playerOneTurn, playerTwoTurn]);

  // ENDGAME //

  const [showEndGame, setShowEndGame] = useState(false);
  const handleCloseEndGame = () => setShowEndGame(false);
  const handleShowEndGame = () => setShowEndGame(true);
  const [player1WonBy, setPlayer1WonBy] = useState("");

  useEffect(() => {
    if (playerOneTotalNumber >= 100) {
      handleShowEndGame();
      setPlayer1WonBy("beérkezett a célba!");
    } else if (playerOneTotalMoney >= 25000) {
      handleShowEndGame();
      setPlayer1WonBy("elérte a 25.000 Kristályt!");
    }
  }, [playerOneTotalNumber, playerOneTotalMoney]);

  const [showEndGameP2, setShowEndGameP2] = useState(false);
  const handleCloseEndGameP2 = () => setShowEndGameP2(false);
  const handleShowEndGameP2 = () => setShowEndGameP2(true);
  const [player2WonBy, setPlayer2WonBy] = useState("");

  useEffect(() => {
    if (playerTwoTotalNumber >= 100) {
      handleShowEndGameP2();
      setPlayer2WonBy("beérkezett a célba!");
    } else if (playerTwoTotalMoney >= 25000) {
      handleShowEndGameP2();
      setPlayer2WonBy("elérte a 25.000 Kristályt!");
    }
  }, [playerTwoTotalNumber, playerTwoTotalMoney]);

  function reloadPage() {
    window.location.reload();
  }


  // RULES // 

  const [showRuleModal, setShowRuleModal] = useState(false);
  const handleShowRuleModalClose = () => setShowRuleModal(false);
  const handleShowRuleModalOpen = () => setShowRuleModal(true);

  return (
    <>
        {showDice ? <img className="dice" src={dice} /> : null}
        {showDiceP2 ? <img className="diceP2" src={dice} /> : null}
        {<div className="Toastdivthrow">
          <Toast
            className="d-inline-block"
            onClose={() => setShowToastPlayerOneThrow(false)}
            show={showToastPlayerOneThrow}
            delay={2500}
            autohide
            bg="warning"
          >
            <Toast.Body>
              <h1>{player1RandomNumber}</h1>
            </Toast.Body>
          </Toast>
        </div>
      }

      {
        <div className="Toastdivthrowp2">
          <Toast
            className="d-inline-block"
            onClose={() => setShowToastPlayerTwoThrow(false)}
            show={showToastPlayerTwoThrow}
            delay={2500}
            autohide
            bg="warning"
          >
            <Toast.Body>
              <h1>{player2RandomNumber}</h1>
            </Toast.Body>
          </Toast>
        </div>
      }

      {
        <div className="Toastdiv">
          <Toast
            className="d-inline-block Toast"
            onClose={() => setShowToastLockedMysteryCard(false)}
            show={showToastLockedMysteryCard}
            delay={3500}
            autohide
            bg="danger"
          >
            <Toast.Header className="toastheader" closeButton={false}>
              <strong>Zárva</strong>
            </Toast.Header>
            <Toast.Body>
              <strong>
                A Mystery kártya akkor oldódik fel ha Player 1 vagy Player 2
                elérte a 25. mezőt!
              </strong>
            </Toast.Body>
          </Toast>
        </div>
      }

      {
        <div className="Toastdivcurse">
          <Toast
            className="d-inline-block Toast"
            onClose={() => setShowToastLockedCurseCard(false)}
            show={showToastLockedCurseCard}
            delay={3500}
            autohide
            bg="danger"
          >
            <Toast.Header className="toastheader" closeButton={false}>
              <strong>Zárva</strong>
            </Toast.Header>
            <Toast.Body>
              <strong>
                Az Átok kártya akkor oldódik fel ha Player 1 vagy Player 2
                elérte az 50. mezőt!
              </strong>
            </Toast.Body>
          </Toast>
        </div>
      }

      {
        <div className="Toastkarenblock">
          <Toast
            className="d-inline-block Toast"
            onClose={() => setShowToastWarlockBlock(false)}
            show={showToastLockedWarlockBlock}
            delay={3500}
            autohide
            bg="danger"
          >
            <Toast.Header className="toastheader" closeButton={false}>
              <strong>Blokkolva</strong>
            </Toast.Header>
            <Toast.Body>
              <strong>
                A Warlock átka blokkolja a kártyák használatát! Fizess 5000 kristályt hogy feloldd az átkot!
              </strong>
            </Toast.Body>
          </Toast>
        </div>
      }

      {
        <div className="Toastkarenblock">
          <Toast
            className="d-inline-block Toast"
            onClose={() => setShowToastPaidCops(false)}
            show={showToastPaidCops}
            delay={5000}
            autohide
            bg="info"
            style={{ color: "black" }}
          >
            <Toast.Header className="toastheader" closeButton={false}>
              <strong>Átok feloldva</strong>
            </Toast.Header>
            <Toast.Body>
              <strong>
                Feloldottad az átkot - újra használhatod a kártyákat!
              </strong>
            </Toast.Body>
          </Toast>
        </div>
      }

      {
        <div className="Toastkarenblock">
          <Toast
            className="d-inline-block Toast"
            onClose={() => setShowToastNotEnoughMoney(false)}
            show={showToastNotEnoughMoney}
            delay={3500}
            autohide
            bg="danger"
          >
            <Toast.Header className="toastheader" closeButton={false}>
              <strong>Nincs elég pénzed</strong>
            </Toast.Header>
            <Toast.Body>
              <strong>Nincs elég pénzed</strong>
            </Toast.Body>
          </Toast>
        </div>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="modal-header"><h2>{randomCard.title}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <h3>{randomCard.body}</h3>
        </Modal.Body>
        <Modal.Footer>
          <img src={randomCard.img} />
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEndGame}>
        <Modal.Header>
          <Modal.Title className="modal-header">Player 1 nyert!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <h2>
            Player 1 ({playerOneChoice}) megnyerte a játékot azzal hogy{" "}
            {player1WonBy}!
          </h2>
        </Modal.Body>
        <Modal.Footer>
          <img src={victory} />
          <Button variant="secondary" onClick={reloadPage}>
            ÚJ játék
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEndGameP2}>
        <Modal.Header>
          <Modal.Title className="modal-header">Player 2 nyert!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <h2>
            Player 2 ({playerTwoChoice}) megnyerte a játékot azzal hogy{" "}
            {player2WonBy}!
          </h2>
        </Modal.Body>
        <Modal.Footer>
          <img src={victory} />
          <Button variant="secondary" onClick={reloadPage}>
            Új játék
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showLotto} onHide={handleCloseLotto}>
        <Modal.Header>
          <Modal.Title className="modal-header">Szerencsejáték</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <h4>válassz 3 számot és ha stimmel a sorrend és a szám is akkor nyertél! Egy játék 1500 kristály!</h4>
        <br></br>
        <div>
          <Select options={options} onChange={onChangeInput} />
          <Select options={options2} onChange={onChangeInputTwo} />
          <Select options={options3} onChange={onChangeInputThree} />
          </div>
        <ul>
          <li><h5>1 találatnál visszanyered a játék árát!</h5> </li>
          <li><h5>2 találatnál nyersz 5000 Kristályt!</h5></li>
          <li><h5>3 találatnál nyersz 5000 Kristályt és előrelépsz 15 mezőt!</h5></li>
        </ul>
        </div>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={lottoAction}>
            Megjátszom
          </Button>
          <Button variant="secondary" onClick={handleCloseLotto}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showLottoAction}
        onHide={handleCloseLottoAction}
        dialogClassName="modal-width"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h3 className="lottonumberone">
            A te számaid: {valueOne} {valueTwo} {valueThree}
          </h3>
          <img className="lottoimage2" src={gamblerimageforlotto} />
          <h3 className="lottonumbertwo">
            A gambler számai: {lottoNumberOne} {lottoNumberTwo} {lottoNumberThree}
          </h3>
          <h1 className="winorlose">{winOrLose}</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLottoAction}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showRuleModal}
        onHide={handleShowRuleModalClose}
        dialogClassName="modal-width"
      >
        <Modal.Header>
          <Modal.Title>Játékszabályok</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>2 féle képpen lehet nyerni: ha össze szedsz 25000 kristályt vagy beérsz az utolsó mezőbe</h3>
          <ul>
            <li><h4>4 választható karakter van,mindegyik rendelkezik valamilyen aktív vagy passzív képességgel! Leírásukat a karakter kártyákon megtalálod!</h4></li>
            <li><h4>A mystery kártyát akkor tudod használni ha valamelyik játékos elérte a 25. mezőt.A kártya 500 kristályba kerül és teljesen véletlenszerű,lehet JÓ vagy ROSSZ is!</h4></li>
            <li><h4>Az átok kártyát akkor tudod használni ha valamelyik játékos elérte az 50. mezőt és csak ha a mezőkön hátrányban vagy! Paladin ellen nem tudsz átok kártyát bevetni! 3 különböző átok van,leírást az átok kártyákon találsz.</h4></li>
            <li><h4>Ha a Warlock ellen játszol nem tudsz se Mystery se Curse kártyát használni amíg fel nem oldod az átkot! 5000 kristályba kerül!</h4></li>
            <li><h4>A Szerencsejátékot akkor tudod használni ha legalább van 1500 kristályod,ennyibe kerül egy játék ára! A leírását megtalálod a szerencsejátéknál!</h4></li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowRuleModalClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      

      <Modal
        show={cardModalShowCurseCard}
        onHide={handleCardModalCurseCardClose}
        dialogClassName="modal-width modalcenter"
      >
        <div className="Toastcurseblock">
          <Toast
            className="d-inline-block Toast"
            onClose={() => setShowToastBlockedCurseCard(false)}
            show={showToastBlockedCurseCard}
            delay={3500}
            autohide
            bg="danger"
          >
            <Toast.Header className="toastheader" closeButton={false}>
              <strong>Blokkolva</strong>
            </Toast.Header>
            <Toast.Body>
              <strong>Csak hátrányban tudsz Átok kártyát használni</strong>
            </Toast.Body>
          </Toast>
        </div>

        <div className="Toastcurseblock">
          <Toast
            className="d-inline-block Toast"
            onClose={() => setShowToastBlockedCurseCardPaladin(false)}
            show={showToastBlockedCurseCardPaladin}
            delay={3500}
            autohide
            bg="danger"
          >
            <Toast.Header className="toastheader" closeButton={false}>
              <strong>Blokkolva</strong>
            </Toast.Header>
            <Toast.Body>
              <strong>
               A Paladint mágikus erők védelmezik ezért nem lehet megátkozni!
              </strong>
            </Toast.Body>
          </Toast>
        </div>
        <Modal.Body>
          {curseCardsArray.map((curse) => {
            return (
              <Card
                onClick={() => handleClickCurseCard(curse.id)}
                style={{ display: "inline-block" }}
                className="curseCard"
                key={curse.id}
              >
                <Card.Img
                  variant="top"
                  src={curse.img}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {curse.name}
                  </Card.Title>
                  <Card.Text
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {curse.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCardModalCurseCardClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={cardModalShow}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-width"
      >
        <Modal.Header>
          <Modal.Title className="modalTitle">
            <h1>PLAYER 1 - CHOOSE YOUR FIGHTER!</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {characterCards.map((char) => {
            return (
              <Card
                onClick={() => handleClickPlayerOne(char.id)}
                style={{ display: "inline-block" }}
                className="characterCard"
                key={char.id}
              >
                <Card.Img
                  variant="top"
                  src={char.img}
                  width="150px"
                  height="350px"
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                  <strong>{char.name}</strong>
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    {char.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Modal.Body>
        <Button onClick={handleShowRuleModalOpen} className="rules" variant="info">Játékszabály</Button>
      </Modal>

      <img src={aceCard} onClick={lotto} className="lotto-image" />
      <div
        className="containerdiv"
      >
        <img
          onClick={unlockedMysteryCard}
          className="mysterycard"
          src={mysteryCardImage}
        />
        <img onClick={curseCard} className="cursecard" src={curseCardImage} />
        <div className="p1score">
          <h4>{playerOneChoice}</h4>
          <img src={crystal} className="crystal"></img>
          <h4>{playerOneTotalMoney}</h4>
          <Button disabled={playerOneTurn} onClick={playerOneRandomNumber}>
            Throw dice
          </Button>
          <br></br>
          {(playerTwoChoice === "Warlock" && playerTwoTotalNumber >= 25) ||
          (playerTwoChoice === "Warlock" && playerOneTotalNumber >= 25) ? (
            <Button
              variant="success"
              className="managerbutton"
              disabled={disablebutton}
              onClick={turnOffWarlockAbilityPlayerOne}
            >
              Átok feloldása
            </Button>
          ) : null}
        </div>
        <img className="playeronechoiceimg" src={playerOneChoiceImg} />
        <div className="p2score">
          <h4>{playerTwoChoice}</h4>
          <img src={crystal} className="crystal"></img>
          <h4>{playerTwoTotalMoney}</h4>
          <Button
            disabled={playerTwoTurn}
            id="p2btn"
            onClick={playerTwoRandomNumber}
          >
            Throw dice
          </Button>
          <br></br>
          {(playerOneChoice === "Warlock" && playerTwoTotalNumber >= 25) ||
          (playerOneChoice === "Warlock" && playerOneTotalNumber >= 25) ? (
            <Button
              variant="success"
              className="managerbutton"
              disabled={disablebuttonP2}
              onClick={turnOffWarlockAbilityPlayerTwo}
            >
              Átok feloldása
            </Button>
          ) : null}
        </div>
        <img className="playertwochoiceimg" src={playerTwoChoiceImg} />

        <div className="mezocontainer">
          {playerMezok.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h2 style={{ color: "red" }}>{mezo.sameMezo}</h2>
              </div>
            );
          })}
        </div>

        <div className="mezocontainer">
          {playerMezok2.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h1 style={{ color: "red" }}>{mezo.sameMezo}</h1>
              </div>
            );
          })}
        </div>
        <div className="mezocontainer">
          {playerMezok3.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h1 style={{ color: "red" }}>{mezo.sameMezo}</h1>
              </div>
            );
          })}
        </div>

        <div className="mezocontainer">
          {playerMezok4.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h1 style={{ color: "red" }}>{mezo.sameMezo}</h1>
              </div>
            );
          })}
        </div>

        <div className="mezocontainer">
          {playerMezok5.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h1 style={{ color: "red" }}>{mezo.sameMezo}</h1>
              </div>
            );
          })}
        </div>

        <div className="mezocontainer">
          {playerMezok6.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h1 style={{ color: "red" }}>{mezo.sameMezo}</h1>
              </div>
            );
          })}
        </div>

        <div className="mezocontainer">
          {playerMezok7.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h1 style={{ color: "red" }}>{mezo.sameMezo}</h1>
              </div>
            );
          })}
        </div>

        <div className="mezocontainer">
          {playerMezok8.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h1 style={{ color: "red" }}>{mezo.sameMezo}</h1>
              </div>
            );
          })}
        </div>

        <div className="mezocontainer">
          {playerMezok9.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h1 style={{ color: "red" }}>{mezo.sameMezo}</h1>
              </div>
            );
          })}
        </div>

        <div className="mezocontainer">
          {playerMezok10.map((mezo) => {
            return (
              <div
                key={mezo.id}
                className="square"
                style={{ backgroundImage: `url(${mezo.img})` }}
              >
                <h1 style={{ color: "red" }}>{mezo.sameMezo}</h1>
              </div>
            );
          })}
        </div>
        <h3 className="turnindicator">{turnIndicator}</h3>
        <Button onClick={handleShowRuleModalOpen} className="rules" variant="info">Játékszabály</Button>
      </div>

      <Modal
        show={cardModalShowPlayerTwo}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-width"
      >
        <Modal.Header>
          <Modal.Title className="modalTitle">
            <h1>PLAYER 2 - CHOOSE YOUR FIGHTER!</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {characterCards.map((char) => {
            return (
              <Card
                key={char.id}
                onClick={() => handleClickPlayerTwo(char.id)}
                style={{ display: "inline-block" }}
                className="characterCard"
              >
                <Card.Img
                  variant="top"
                  src={char.img}
                  width="150px"
                  height="350px"
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    <strong>{char.name}</strong>
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    {char.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Modal.Body>
        <Button onClick={handleShowRuleModalOpen} className="rules" variant="info">Játékszabály</Button>
      </Modal>
    </>
  );
}

export default App;
