const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Items array
const items = [
  { name: "1", image: "img/member/abigail_rachel.jpg" },
  { name: "2", image: "img/member/adeline_wijaya.jpg" },
  { name: "3", image: "img/member/aisa_maharani.jpg" },
  { name: "4", image: "img/member/alya_amanda.jpg" },
  { name: "5", image: "img/member/amanda_sukma.jpg" },
  { name: "6", image: "img/member/angelina_christy.jpg" },
  { name: "7", image: "img/member/anindya_ramadhani.jpg" },
  { name: "8", image: "img/member/aurellia.jpg" },
  { name: "9", image: "img/member/aurhel_alana.jpg" },
  { name: "10", image: "img/member/azizi_asadel.jpg" },
  { name: "11", image: "img/member/callista_alifia.jpg" },
  { name: "12", image: "img/member/catherina_vallencia.jpg" },
  { name: "13", image: "img/member/cathleen_nixie.jpg" },
  { name: "14", image: "img/member/celline_thefani.jpg" },
  { name: "15", image: "img/member/chelsea_davina.jpg" },
  { name: "16", image: "img/member/cornelia_vanisa.jpg" },
  { name: "17", image: "img/member/cynthia_yaputera.jpg" },
  { name: "18", image: "img/member/dena_natalia.jpg" },
  { name: "19", image: "img/member/desy_natalia.jpg" },
  { name: "20", image: "img/member/febriola_sinambela.jpg" },
  { name: "21", image: "img/member/feni_fitriyanti.jpg" },
  { name: "22", image: "img/member/fiony_alveria.jpg" },
  { name: "23", image: "img/member/flora_shafiq.jpg" },
  { name: "24", image: "img/member/freya_jayawardana.jpg" },
  { name: "25", image: "img/member/fritzy_rosmerian.jpg" },
  { name: "26", image: "img/member/gabriela_abigail.jpg" },
  { name: "27", image: "img/member/gendis_mayrannisa.jpg" },
  { name: "28", image: "img/member/gita_sekar_andarini.jpg" },
  { name: "29", image: "img/member/grace_octaviani.jpg" },
  { name: "30", image: "img/member/greesella_adhalia.jpg" },
  { name: "31", image: "img/member/helisma_putri.jpg" },
  { name: "32", image: "img/member/hillary_abigail.jpg" },
  { name: "33", image: "img/member/indah_cahya.jpg" },
  { name: "34", image: "img/member/indira_seruni.jpg" },
  { name: "35", image: "img/member/jazzlyn_trisha.jpg" },
  { name: "36", image: "img/member/jeane_victoria.jpg" },
  { name: "37", image: "img/member/jessica_chandra.jpg" },
  { name: "38", image: "img/member/jesslyn_elly.jpg" },
  { name: "39", image: "img/member/kathrina_irene.jpg" },
  { name: "40", image: "img/member/letycia_moreen.jpg" },
  { name: "41", image: "img/member/lulu_salsabila.jpg" },
  { name: "42", image: "img/member/marsha_lenathea.jpg" },
  { name: "43", image: "img/member/michelle_alexandra.jpg" },
  { name: "44", image: "img/member/michelle_levia.jpg" },
  { name: "45", image: "img/member/mutiara_azzahra.jpg" },
  { name: "46", image: "img/member/nayla_suji.jpg" },
  { name: "47", image: "img/member/nina_tutachia.jpg" },
  { name: "48", image: "img/member/oline_manuel.jpg" },
  { name: "49", image: "img/member/raisha_syifa.jpg" },
  { name: "50", image: "img/member/regina_wilian.jpg" },
  { name: "51", image: "img/member/reva_fidela.jpg" },
  { name: "52", image: "img/member/ribka_budiman.jpg" },
  { name: "53", image: "img/member/shabilqis_naila.jpg" },
  { name: "54", image: "img/member/shani_indira_natio.jpg" },
  { name: "55", image: "img/member/shania_gracia.jpg" },
  { name: "56", image: "img/member/victoria_kimberly.jpg" }
];

//Initial Time
let seconds = 0,
  minutes = 0;
//Initial moves and win count
let movesCount = 0,
  winCount = 0;

//For timer
const timeGenerator = () => {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

//For calculating moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//Pick random objects from the items array
const generateRandom = (size = 4) => {
  //temporary array
  let tempArray = [...items];
  //initializes cardValues array
  let cardValues = [];
  //size should be double (4*4 matrix)/2 since pairs of objects would exist
  size = (size * size) / 2;
  //Random object selection
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //once selected remove the object from temp array
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  //simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    /*
        Create Cards
        before => front side (contains question mark)
        after => back side (contains actual image);
        data-card-values is a custom attribute which stores the names of the cards to match later
      */
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before"></div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>
     `;
  }
  //Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

  //Cards
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      //If selected card is not matched yet then only run (i.e already matched card when clicked would be ignored)
      if (!card.classList.contains("matched")) {
        //flip the cliked card
        card.classList.add("flipped");
        //if it is the firstcard (!firstCard since firstCard is initially false)
        if (!firstCard) {
          //so current card will become firstCard
          firstCard = card;
          //current cards value becomes firstCardValue
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          //increment moves since user selected second card
          movesCounter();
          //secondCard and value
          secondCard = card;
          let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue) {
            //if both cards match add matched class so these cards would beignored next time
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            //set firstCard to false since next card would be first now
            firstCard = false;
            //winCount increment as user found a correct match
            winCount += 1;
            //check if winCount ==half of cardValues
            if (winCount == Math.floor(cardValues.length / 2)) {
              result.innerHTML = `<h2>You Won</h2>
            <h4>Moves: ${movesCount}</h4>`;
              stopGame();
            }
          } else {
            //if the cards dont match
            //flip the cards back to normal
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          }
        }
      }
    });
  });
};

//Start game
startButton.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  //controls amd buttons visibility
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");
  //Start timer
  interval = setInterval(timeGenerator, 1000);
  //initial moves
  moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
  initializer();
});

//Stop game
stopButton.addEventListener(
  "click",
  (stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
  })
);

//Initialize values and func calls
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
};
let container = document.getElementById("container");
let count = 50;
for (var i = 0; i < 50; i++) {
  let leftSnow = Math.floor(Math.random() * container.clientWidth);
  let topSnow = Math.floor(Math.random() * container.clientHeight);
  let widthSnow = Math.floor(Math.random() * 50);
  let timeSnow = Math.floor(Math.random() * 5 + 5);
  let blurSnow = Math.floor(Math.random() * 10);
  console.log(leftSnow);
  let div = document.createElement("div");
  div.classList.add("snow");
  div.style.left = leftSnow + "px";
  div.style.top = topSnow + "px";
  div.style.width = widthSnow + "px";
  div.style.height = widthSnow + "px";
  div.style.animationDuration = timeSnow + "s";
  div.style.filter = "blur(" + blurSnow + "px)";
  container.appendChild(div);
}
