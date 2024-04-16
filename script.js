const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start1");
const stopButton = document.getElementById("stop");
const stoptwice = document.getElementById("stop12")
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const easyButton = document.getElementById("easy-button");
const mediumButton = document.getElementById("medium-button");
const hardButton = document.getElementById("hard-button");
const lagus = document.getElementById("otherg");
const playsonf = document.getElementById("start");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Items array
const items = [
  {
    name: "1",
    image: "img/member/abigail_rachel.jpg",
    status: "Trainee",
  },
  {
    name: "2",
    image: "img/member/adeline_wijaya.jpg",
    status: "Trainee",
  },
  {
    name: "3",
    image: "img/member/aisa_maharani.jpg",
    status: "Trainee",
  },
  { name: "4", image: "img/member/alya_amanda.jpg", status: "Trainee" },
  { name: "5", image: "img/member/amanda_sukma.jpg", status: "member" },
  {
    name: "6",
    image: "img/member/angelina_christy.jpg",
    status: "member",
  },
  {
    name: "7",
    image: "img/member/anindya_ramadhani.jpg",
    status: "Trainee",
  },
  { name: "8", image: "img/member/aurellia.jpg", status: "member" },
  {
    name: "9",
    image: "img/member/aurhel_alana.jpg",
    status: "Trainee",
  },
  {
    name: "10",
    image: "img/member/azizi_asadel.jpg",
    status: "member",
  },
  {
    name: "11",
    image: "img/member/callista_alifia.jpg",
    status: "member",
  },
  {
    name: "12",
    image: "img/member/catherina_vallencia.jpg",
    status: "Trainee",
  },
  {
    name: "13",
    image: "img/member/cathleen_nixie.jpg",
    status: "Trainee",
  },
  {
    name: "14",
    image: "img/member/celline_thefani.jpg",
    status: "Trainee",
  },
  {
    name: "15",
    image: "img/member/chelsea_davina.jpg",
    status: "Trainee",
  },
  {
    name: "16",
    image: "img/member/cornelia_vanisa.jpg",
    status: "member",
  },
  {
    name: "17",
    image: "img/member/cynthia_yaputera.jpg",
    status: "Trainee",
  },
  {
    name: "18",
    image: "img/member/dena_natalia.jpg",
    status: "Trainee",
  },
  {
    name: "19",
    image: "img/member/desy_natalia.jpg",
    status: "Trainee",
  },
  {
    name: "20",
    image: "img/member/febriola_sinambela.jpg",
    status: "member",
  },
  {
    name: "21",
    image: "img/member/feni_fitriyanti.jpg",
    status: "member",
  },
  {
    name: "22",
    image: "img/member/fiony_alveria.jpg",
    status: "member",
  },
  {
    name: "23",
    image: "img/member/flora_shafiq.jpg",
    status: "member",
  },
  {
    name: "24",
    image: "img/member/freya_jayawardana.jpg",
    status: "member",
  },
  {
    name: "25",
    image: "img/member/fritzy_rosmerian.jpg",
    status: "Trainee",
  },
  {
    name: "26",
    image: "img/member/gabriela_abigail.jpg",
    status: "member",
  },
  {
    name: "27",
    image: "img/member/gendis_mayrannisa.jpg",
    status: "Trainee",
  },
  {
    name: "28",
    image: "img/member/gita_sekar_andarini.jpg",
    status: "member",
  },
  {
    name: "29",
    image: "img/member/grace_octaviani.jpg",
    status: "member",
  },
  {
    name: "30",
    image: "img/member/greesella_adhalia.jpg",
    status: "member",
  },
  {
    name: "31",
    image: "img/member/helisma_putri.jpg",
    status: "member",
  },
  {
    name: "32",
    image: "img/member/hillary_abigail.jpg",
    status: "Trainee",
  },
  { name: "33", image: "img/member/indah_cahya.jpg", status: "member" },
  {
    name: "34",
    image: "img/member/indira_seruni.jpg",
    status: "member",
  },
  {
    name: "35",
    image: "img/member/jazzlyn_trisha.jpg",
    status: "Trainee",
  },
  {
    name: "36",
    image: "img/member/jeane_victoria.jpg",
    status: "Trainee",
  },
  {
    name: "37",
    image: "img/member/jessica_chandra.jpg",
    status: "member",
  },
  {
    name: "38",
    image: "img/member/jesslyn_elly.jpg",
    status: "member",
  },
  {
    name: "39",
    image: "img/member/kathrina_irene.jpg",
    status: "member",
  },
  {
    name: "40",
    image: "img/member/letycia_moreen.jpg",
    status: "Trainee",
  },
  {
    name: "41",
    image: "img/member/lulu_salsabila.jpg",
    status: "member",
  },
  {
    name: "42",
    image: "img/member/marsha_lenathea.jpg",
    status: "member",
  },
  {
    name: "43",
    image: "img/member/michelle_alexandra.jpg",
    status: "Trainee",
  },
  {
    name: "44",
    image: "img/member/michelle_levia.jpg",
    status: "Trainee",
  },
  {
    name: "45",
    image: "img/member/mutiara_azzahra.jpg",
    status: "member",
  },
  { name: "46", image: "img/member/nayla_suji.jpg", status: "Trainee" },
  {
    name: "47",
    image: "img/member/nina_tutachia.jpg",
    status: "Trainee",
  },
  {
    name: "48",
    image: "img/member/oline_manuel.jpg",
    status: "Trainee",
  },
  {
    name: "49",
    image: "img/member/raisha_syifa.jpg",
    status: "member",
  },
  {
    name: "50",
    image: "img/member/regina_wilian.jpg",
    status: "Trainee",
  },
  { name: "51", image: "img/member/reva_fidela.jpg", status: "member" },
  {
    name: "52",
    image: "img/member/ribka_budiman.jpg",
    status: "Trainee",
  },
  {
    name: "53",
    image: "img/member/shabilqis_naila.jpg",
    status: "Trainee",
  },
  {
    name: "54",
    image: "img/member/shani_indira_natio.jpg",
    status: "member",
  },
  {
    name: "55",
    image: "img/member/shania_gracia.jpg",
    status: "member",
  },
  {
    name: "56",
    image: "img/member/victoria_kimberly.jpg",
    status: "Trainee",
  },
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

let recentGamesHistory = []; // Simpan riwayat permainan terbaru

// Fungsi untuk memeriksa kemiripan antara dua array
const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const isNewGameUnique = (newGame) => {
  for (let i = 0; i < recentGamesHistory.length; i++) {
    if (arraysAreEqual(newGame, recentGamesHistory[i])) {
      return false;
    }
  }
  return true;
};
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//Pick random objects from the items array
const generateRandom = (mode = "easy") => {
  if (!modes[mode]) {
    throw new Error("Invalid mode selected.");
  }

  let tempArray = items.filter((item) => modes[mode].includes(item.status));

  // Shuffle the tempArray to mix up the items
  tempArray = shuffleArray(tempArray);

  // Take the first 8 items from the shuffled tempArray
  let selectedItems = tempArray.slice(0, 8);

  // Duplicate the selected items to create pairs of cards
  let cardValues = [...selectedItems, ...selectedItems];

  // Shuffle the cardValues array to mix up the pairs
  cardValues = shuffleArray(cardValues);

  return cardValues;
};
const matrixGenerator = (cardValues) => {
  gameContainer.innerHTML = "";
  cardValues.forEach((item) => {
    /*
        Create Cards
        before => front side (contains question mark)
        after => back side (contains actual image);
        data-card-values is a custom attribute which stores the names of the cards to match later
      */
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${item.name}">
        <div class="card-before"></div>
        <div class="card-after">
        <img src="${item.image}" class="image"/></div>
     </div>
     `;
  });

  //Grid
  gameContainer.style.gridTemplateColumns = `repeat(4,auto)`;

  //Cards
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      //If selected card is not matched yet then only run (i.e already matched card when clicked would be ignored)
if (
  !card.classList.contains("matched") &&
  !card.classList.contains("flipped")
) {
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
        results();
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
  initializer("easy");
  
});

//Stop game
stopButton.addEventListener(
  "click",
  () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
        var playsonf = document.getElementById("start");
        var lagus = document.getElementById("otherg");
       var resultParagraph = document.getElementById("result");
       resultParagraph.style.display = "none"; 
        // Hide the buttons
        playsonf.style.display = "block";
        lagus.style.display = "block";
    clearInterval(interval);
  }
);
function results() {
  // Menyembunyikan tombol-tombol
      controls.classList.remove("hide");
  startButton.classList.add("hide");
  stopButton.classList.add("hide");
  stoptwice.classList.remove("hide");
    var playsonf = document.getElementById("start");
    var lagus = document.getElementById("otherg");

    // Hide the buttons
    playsonf.style.display = "none";
   lagus.style.display = "none";
       var resultParagraph = document.getElementById("result");
       resultParagraph.style.display = "block"; 
       let time = timeValue.innerHTML.replace("<span>Time:</span>", "");

    // Display result including moves and time
    result.innerHTML = `
        <h2>You Won</h2>
        <h4>Moves: ${movesCount}</h4>
        <h4>Time: ${time}</h4>
    `

};


//Initialize values and func calls
const initializer = (mode = "easy") => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom(mode);
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
const modes = {
  easy: ["Trainee"],
  medium: ["member"],
  hard: ["Trainee", "member"],
};

easyButton.addEventListener("click", () => {
  initializeGame("easy");
});

mediumButton.addEventListener("click", () => {
  initializeGame("medium");
});

hardButton.addEventListener("click", () => {
  initializeGame("hard");
});

const initializeGame = (mode) => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");
  interval = setInterval(timeGenerator, 1000);
  moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
  initializer(mode);
};

