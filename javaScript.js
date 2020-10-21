
//1.ASSETS
//A.Words
var wordList = {
	Country:[ 'TURKMENISTAN',	'PHILIPPINES',	'AZERBAIJAN',	'BANGLADESH',	'MADAGASCAR',	'MONTENEGRO',	'MOZAMBIQUE',	'TAJIKISTAN',	'MAURITANIA',	'AUSTRALIA',	'GUATEMALA',	'INDONESIA',	'LITHUANIA',	'MACEDONIA',	'SWAZILAND',	'NICARAGUA',	'SINGAPORE',	'BOTSWANA',	'BARBADOS',	'BULGARIA',	'CAMBODIA',	'COLOMBIA',	'DJIBOUTI',	'DOMINICA',	'HONDURAS',	'MALAYSIA',	'MALDIVES',	'MONGOLIA',	'PORTUGAL',	'SLOVAKIA',	'SLOVENIA',	'SURINAME',	'TANZANIA',	'THAILAND',	'ZIMBABWE',	'PARAGUAY',	'CROATIA',	'DENMARK',	'ECUADOR',	'ERITREA',	'JAMAICA',	'ALBANIA',	'ALGERIA',	'ARMENIA',	'AUSTRIA',	'BAHAMAS',	'BAHRAIN',	'BELARUS',	'BELGIUM',	'BOLIVIA',	'BURUNDI',	'ESTONIA',	'FINLAND',	'GEORGIA',	'GERMANY',	'HUNGARY',	'ICELAND',	'LEBANON',	'LIBERIA',	'MOLDOVA',	'MOROCCO',	'NIGERIA',	'ROMANIA',	'UKRAINE',	'VIETNAM',	'NAMIBIA',	'SENEGAL',	'SOMALIA',	'TUNISIA',	'URUGUAY',	'ISRAEL',	'KOSOVO',	'ANGOLA',	'BELIZE',	'BHUTAN',	'BRAZIL',	'BRUNEI',	'CANADA',	'CYPRUS',	'FRANCE',	'GAMBIA',	'GREECE',	'GUINEA',	'GUYANA',	'JORDAN',	'KUWAIT',	'LATVIA',	'MALAWI',	'MEXICO',	'MONACO',	'NORWAY',	'PANAMA',	'POLAND',	'SERBIA',	'SWEDEN',	'TAIWAN',	'RWANDA',	'TURKEY',	'UGANDA',	'ZAMBIA',	'SAMOA',	'BENIN',	'CHILE',	'CHINA',	'CONGO',	'EGYPT',	'SPAIN',	'GHANA',	'HAITI',	'JAPAN',	'KENYA',	'LIBYA',	'MALTA',	'NEPAL',	'NIGER',	'PALAU',	'QATAR',	'SYRIA',	'YEMEN',	'CHAD',	'CUBA',	'FIJI',	'IRAN',	'IRAQ',	'LAOS',	'MALI',	'OMAN',	'PERU',	'TOGO'],
  	Animal: ['TYRANNOSAURUS', 'HIPPOPOTAMUS',	'CATERPILLAR',	'CONSTRICTOR',	'GRASSHOPPER',	'HUMMINGBIRD',	'MOCKINGBIRD',	'NIGHTINGALE',	'RATTLESNAKE',	'ANGLERFISH',	'CHIMPANZEE',	'CHINCHILLA',	'FLYINGFISH',	'KINGFISHER',	'PARROTFISH',	'RHINOCEROS',	'ROADRUNNER',	'SALAMANDER',	'SILVERFISH',	'WOODPECKER',	'ALBATROSS',	'ALLIGATOR',	'ANGELFISH',	'ARMADILLO',	'BANDICOOT',	'BARRACUDA',	'BLACKBIRD',	'BUTTERFLY',	'CENTIPEDE',	'CHAMELEON',	'CHICKADEE',	'CLOWNFISH',	'COCKROACH',	'CROCODILE',	'DAMSELFLY',	'DRAGONFLY',	'EARTHWORM',	'JELLYFISH',	'ORANGUTAN',	'PARTRIDGE',	'PORCUPINE',	'ROUNDWORM',	'SPOONBILL',	'SWORDFISH',	'TARANTULA',	'WHITEFISH',	'WOLVERINE',	'AARDVARK',	'ANACONDA',	'ANTEATER',	'ANTELOPE',	'BARNACLE',	'BASILISK',	'CARDINAL',	'CHIPMUNK',	'CRAYFISH',	'DINOSAUR',	'DORMOUSE',	'ELEPHANT',	'FLAMINGO',	'GAMEFOWL',	'HEDGEHOG',	'KANGAROO',	'LANDFOWL',	'MACKEREL',	'MANDRILL',	'MARMOSET',	'MONGOOSE',	'MOSQUITO',	'PARAKEET',	'PHEASANT',	'PLATYPUS',	'PORPOISE',	'REINDEER',	'SAILFISH',	'SCORPION',	'SEAHORSE',	'SILKWORM',	'SQUIRREL',	'STARFISH',	'STINGRAY',	'STURGEON',	'TORTOISE',	'WILDFOWL',	'GOLDFISH',	'BUZZARD',	'CARIBOU',	'CATFISH',	'CHEETAH',	'CRICKET',	'DOLPHIN',	'FIREFLY',	'GAZELLE',	'GIRAFFE',	'GORILLA',	'HADDOCK',	'HAMSTER',	'HERRING',	'LADYBUG',	'LEMMING',	'LEOPARD',	'LOBSTER',	'MANATEE',	'MEERKAT',	'MOLLUSK',	'NARWHAL',	'OCTOPUS',	'OPOSSUM',	'OSTRICH',	'PANTHER',	'PEACOCK',	'PEAFOWL',	'PELICAN',	'PENGUIN',	'PIRANHA',	'RACCOON',	'REPTILE',	'ROOSTER',	'SAWFISH',	'SCALLOP',	'SPARROW',	'SWALLOW',	'TERMITE',	'VULTURE',	'WALLABY',	'WARBLER',	'WILDCAT',	'CHICKEN',	'BABOON',	'BADGER',	'BEAVER',	'BEDBUG',	'BEETLE',	'BOBCAT',	'BONOBO',	'CONDOR',	'COUGAR',	'COYOTE',	'CUCKOO',	'DONKEY',	'DRAGON',	'ERMINE',	'FALCON',	'GERBIL',	'GIBBON',	'GOPHER',	'GROUSE',	'HORNET',	'IGUANA',	'IMPALA',	'JACKAL',	'JAGUAR',	'LIZARD',	'LOCUST',	'MAGPIE',	'MARLIN',	'MARTEN',	'MINNOW',	'MONKEY',	'MUSKOX',	'PARROT',	'PIGEON',	'POSSUM',	'PUFFIN',	'PYTHON',	'RABBIT',	'RODENT',	'SALMON',	'SHRIMP',	'SPIDER',	'THRUSH',	'TOUCAN',	'TURKEY',	'TURTLE',	'WALRUS',	'WEASEL',	'WOMBAT',	'ALPACA',	'FERRET',	'BISON',	'BOOBY',	'BOVID',	'CAMEL',	'COBRA',	'CORAL',	'CRANE',	'DINGO',	'EAGLE',	'EGRET',	'FINCH',	'GECKO',	'GOOSE',	'HERON',	'HYENA',	'KOALA',	'KRILL',	'LEECH',	'LEMUR',	'LLAMA',	'LOUSE',	'MACAW',	'MOOSE',	'MOUSE',	'OTTER',	'PANDA',	'PERCH',	'PRAWN',	'QUAIL',	'RAVEN',	'SHARK',	'SHREW',	'SKUNK',	'SLOTH',	'SMELT',	'SNAIL',	'SNAKE',	'SNIPE',	'SQUID',	'STOAT',	'STORK',	'SWIFT',	'TIGER',	'TROUT',	'VIPER',	'WHALE',	'ZEBRA',	'GUPPY',	'HORSE',	'SHEEP'],
  	Capital: [ 'GEORGETOWN','COPENHAGEN',	'LUXEMBOURG',	'BRATISLAVA','GIBRALTAR',	'REYKJAVIK',	'JERUSALEM',	'AMSTERDAM',	'PYONGYANG',	'ISLAMABAD',	'JERUSALEM',	'ADAMSTOWN',	'BUCHAREST',	'EDINBURGH',	'SINGAPORE',	'STOCKHOLM',	'CANBERRA',	'HAMILTON',	'SARAJEVO',	'GABORONE',	'DJIBOUTI',	'BUDAPEST',	'KINGSTON',	'PRISTINA',	'PLYMOUTH',	'BELGRADE',	'VICTORIA',		'PRETORIA',	'KHARTOUM',	'ALGIERS',	'BEIJING', 'JAKARTA',	'BAGHDAD',	'TRIPOLI',	'VILNIUS',	'BELFAST',	'BANGKOK',	'KAMPALA',	'CARACAS',	'CARDIFF',	'VIENNA',	'NASSAU',	'OTTAWA',	'BOGOTA',		'ZAGREB',	'HAVANA',	'PRAGUE',	'BERLIN',	'ATHENS',	'DUBLIN',	'BEIRUT',	'MONACO',	'MANILA',	'WARSAW',	'LISBON',	'TAIPEI',	'MOSCOW',	'RIYADH',	'MADRID',	'ANKARA',	'LONDON', 'KABUL',	'DHAKA',	'MINSK',	'SOFIA',		'QUITO',	'CAIRO',	'PARIS',	'ACCRA',	'DAKAR',	'TUNIS',	'HANOI',	'ROME',	'RIGA',	'BERN',	'KIEV'],
  	Food: ['APPLE', 'POMEGRANATE',	'GRAPEFRUIT',	'PAPAYA',	'TAMARIND',	'PINEAPPLE',	'PERSIMMON',	'APRICOT',	'LEMON',	'BANANA',	'KIWIFRUIT',	'PEAR',	'LYCHEE',	'PEACH', 'POMELO',	'PLUM',	'CANTALOUPE',	'STRAWBERRY',	'BLUEBERRY',	'PASSION', 'FRUIT',	'CHERRY',	'ORANGE',	'COCONUT',	'CRANBERRY',	'CUCUMBER',	'BERRY'	, 'WATERMELON'	, 'FIG', 'OLIVE',	 'MANDARIN',	'DATE' ,	'CLEMENTINE',	'HONEYDEW' , 'MELON',	'TANGERINE',	'GRAPE',	'RAISIN',	'TOMATO' , 'NUTS',	'EGGPLANT',	'NECTARINE',	'PUMPKIN',	'PEANUT', 'PECAN',	'POTATO' ,	'KALE'	, 'TOMATO' , 'ONION' , 'BROCCOLI', 'LEEKS', 'TURNIPS', 'CELERY',	'SPINACH',	'CAULIFLOWER' ,	'PEA',	'ASPARAGUS',	'CUCUMBER',	'EGGPLANT', 'LETTUCE', 'ZUCCHINI', 'RADISH',	'GARLIC', 'ARTICHOKE',	'CARROT',	'KOHLRABI',	'PARSNIPS' ,	'CORN'	, 'SCALLION',	'CABBAGE' ,	'BEANS']  
  };
let categories = ['Country', 'Animal', 'Capital', 'Food'];

//B.Sounds
let introSound = new Audio('Sounds/intro.mp3'); 
let clickSound = new Audio('Sounds/click.mp3');
let correctSound = new Audio('Sounds/correctLetter.mp3');
let solveSound = new Audio('Sounds/solve.mp3');
let gameOverSound = new Audio('Sounds/gameOver.mp3');

//2.CONNECT TO THE WEBPAGE 
let wordBox = document.getElementById('wordBox');
document.getElementById('showWord').addEventListener('click', showAnswerFunction);
document.getElementById('hint').addEventListener('click', showHint);1
let newGameButton = document.getElementById('newGame');
newGameButton.addEventListener('click', newGame);


let menu = document.getElementById('categorySelector');
menu.addEventListener('change', newGame);

for (var i = 0; i < categories.length; i++) {
	opt = document.createElement('option');
	opt.value = categories[i];
	opt.innerText = categories[i];
	menu.appendChild(opt);
}


//3.TRACKING
let letterPickedArray = [];
let keyboardPickedArray = [];

function createKeyboardPickedArray (a) {
	
	keyboardPickedArray = [];
	for (var i = 0; i < alphabet.length; i++) {
		keyboardPickedArray.push(a);
	}
}

function createLetterPickedArray(a) {

	letterPickedArray = [];	
	for (var i = 0; i < wordCharacters.length; i++) {
		letterPickedArray.push(a);
	}
}

//4.RENDERING 
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let keyboardLetters = alphabet;

function buildKeyboard(){

	let keyboardButton;	
	document.getElementById('keyboard').innerHTML = '';

	for (let i = 0; i < keyboardLetters.length; i++) {

		keyboardButton = document.createElement('BUTTON');
			keyboardButton.innerText = keyboardLetters[i];	
			keyboardButton.id = i;
			keyboardButton.value = keyboardLetters[i];
			keyboardButton.addEventListener('click', letterClickFunction);

		if (keyboardPickedArray[i] == 1) {
			keyboardButton.className = 'keyboardButton';
		} else {
			keyboardButton.className = 'keyboardButtonFaded';
			keyboardButton.disabled = true;
		}

		document.getElementById('keyboard').appendChild(keyboardButton);

	}
}

function renderWordDisplay() {

	let answerBoxDIV = document.getElementById('answerBox')
	answerBoxDIV.innerHTML = '';

	for (var i = 0; i < wordCharacters.length; i++) {	

		let characterBox = document.createElement('DIV');
		if (letterPickedArray[i] == 1) {
			characterBox.innerText = wordCharacters[i];
		} 
		answerBoxDIV.appendChild(characterBox);

	}	
}

function renderHangman() {



	let hangmanImageNumber = 10 - lives;
	let previousHangmanImageName = 	'hangman' + (hangmanImageNumber-1);
	let previousHangmanImage = document.getElementById(previousHangmanImageName);


	if (previousHangmanImage != null) {
	previousHangmanImage.style.display = "none";
	}

	let currentHangmanImageName = 'hangman' + hangmanImageNumber;
	let currentHangmanImage = document.getElementById(currentHangmanImageName);
	currentHangmanImage.style.display = "block";	
}

function hideHangman() {

	let hangmanImageNumber = 10 - lives;

	let allHangmanImages = document.querySelectorAll('#hangmanCircleContainer > img');

	for (var i = 0; i < allHangmanImages.length; i++) {
		allHangmanImages[i].style.display = 'none';
	}
}


//5.SETUP GAME
let currentCategory;
let word;
let wordCharacters;
let lives;
let mistakes;

function getRandomWord() {

	let e = document.getElementById('categorySelector');
	let currentCategoryName = e.options[e.selectedIndex].value; 
	currentCategory = wordList[currentCategoryName];
	let randomNumber = Math.floor(Math.random() * currentCategory.length);
	word = currentCategory[randomNumber];
	wordCharacters = word.split('');
	currentCategory.splice(randomNumber,1);
}

//6.GAME PLAY
function letterClickFunction() {
 
 	mistakes = 1; 

	let pressedletter = this.value;

 	checkLettersForMatch(pressedletter);
 	renderWordDisplay();

 	lives = lives - mistakes;

 	renderHangman();

 	if (letterPickedArray.reduce((a, b) => a + b, 0) == letterPickedArray.length) {
 		showAnswerFunction();
 	}

 	if (lives == 0) {


 		playSound(gameOverSound);

 		createKeyboardPickedArray(0);
		buildKeyboard();
		newGameButton.focus();

 		window.setTimeout(reset, 2000);


		function reset () {
			createLetterPickedArray(1);
			renderWordDisplay();	
		}
 	}

 	removeKeyFromKeyBoard(pressedletter);
 	changeFocus(this.id);
}

function checkLettersForMatch(pressedletter) {
 	for (var i = 0; i < wordCharacters.length; i++) {

 		if (pressedletter ==  wordCharacters[i]) {
 			letterPickedArray[i] = 1;
 			playSound(correctSound);
 			mistakes = 0;
 		} 
 	}	
}

function removeKeyFromKeyBoard(pressedletter) {
	for (var i = 0; i < keyboardLetters.length; i++) {
		
		if (keyboardLetters[i] == pressedletter) {
			keyboardPickedArray[i] = 0;
		} else {
			playSound(clickSound);
		}

		buildKeyboard();

	}
}

function changeFocus(buttonPressedId) {
	
	let newFocus = parseInt(buttonPressedId);
	let nextButton = document.getElementById(newFocus);

	do {
			newFocus = newFocus + 1;
			nextButton = document.getElementById(newFocus);

			if (nextButton == null) {

		do {
			newFocus = newFocus - 1;
			nextButton = document.getElementById(newFocus);
		}
		while (nextButton.disabled != false);
		
		nextButton.focus();

	} 
		}
		while (nextButton.disabled != false);
		
		nextButton.focus();
}
//7.OTHER GAME FUNCTIONS 
function showAnswerFunction () {
	createLetterPickedArray(1);
	renderWordDisplay();
	createKeyboardPickedArray(0);
	buildKeyboard();
	playSound(solveSound);
	newGameButton.focus();
}

function newGame() {
	
	lives = 10;
	tries = 0;

	createKeyboardPickedArray(1);
	buildKeyboard();
	getRandomWord();	
	createLetterPickedArray(0);
	renderWordDisplay();
	playSound(introSound);	
	hideHangman()
	
	let e = document.getElementById('categorySelector');
	let currentCategoryName = e.options[e.selectedIndex].value; 

	let categoryDisplay = document.getElementById('categoryDisplay');
	categoryDisplay.innerText = currentCategoryName;

}

function playSound(soundName) {
	
	soundName.play();
}

function showHint() {
		
	let unpickedArray = [];
	let letterArray = [];
	 for (var i = 0; i < letterPickedArray.length; i++) {
	 	if (letterPickedArray[i] == 0) {
	 		unpickedArray.push(i);
	 	}
	}

	let randomNumber = Math.floor(Math.random() * unpickedArray.length);

	let theHint = unpickedArray[randomNumber];
	let theLetter = wordCharacters[theHint];

  	for (var i = 0; i < wordCharacters.length; i++) {
  		if (wordCharacters[i] == theLetter) {
  			letterArray.push(i);
  		}
  	}


 	console.log(theLetter);

 	console.log(letterArray);

 	for (var i = 0; i < letterArray.length; i++) {
		
		let jjjj = letterArray[i];
		console.log(jjjj)
		letterPickedArray[jjjj] = 1;
	}


	renderWordDisplay();
	removeKeyFromKeyBoard(wordCharacters[theHint]);
}

//8.START PROGRAM
newGame();

document.getElementById('0').focus();




