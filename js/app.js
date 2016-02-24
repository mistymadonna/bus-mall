function ItemForSale(filename, name) {
  this.src = 'img/' + filename; //filepath of img
  this.name = name; //creates a new property called name & sets to name being passed in.
  this.displayed = 0; //creates new property & sets it to 0.
  this.clicked = 0;
  itemsArray.push(this); //push ItemForSale aka the object into an array called itemsArray
}

function randomBetween(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function createRandomIndex() {
  return randomBetween(0, itemsArray.length - 1);
}

function generateRandomIndexes() {
  var r1 = createRandomIndex();
  var r2 = createRandomIndex();
  while (r2 == r1) {
    r2 = createRandomIndex();
  }

  var r3 = createRandomIndex();
  while (r3 == r1 || r3 == r2) {
    r3 = createRandomIndex();
  }

  randomIndexes = [r1, r2, r3];
}

function clearImages() {
  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
  }
}

function displayRandomImages() {
  generateRandomIndexes();
  for (var i = 0; i < 3; i++) {
    var randomIndex = randomIndexes[i];
    var randomItem = itemsArray[randomIndex];
    var imgEl = document.createElement('img');
    imgEl.src = randomItem.src;
    imgEl.id = randomIndex;
    imgEl.title = randomItem.name;
    imgEl.onclick = function(event) {
      clearImages();

      var imgId = event.target.id; // event.target is the HTML <img/> element
      var displayingItem = itemsArray[imgId]; // we stored the index into the img id (imgEl.id = randomIndex)
      displayingItem.clicked++;

      displayRandomImages();
    };

    document.body.appendChild(imgEl);
    randomItem.displayed++;
  }
}

var randomIndexes;
var itemsArray = [];

// fill up itemsArray
new ItemForSale('bag.jpg', 'Luggage');
new ItemForSale('banana.jpg', 'Banana Slicer');
new ItemForSale('bathroom.jpg', 'iPad/Toilet Paper Holder');
new ItemForSale('boots.jpg', 'Open-Toed Rainboots');
new ItemForSale('breakfast.jpg', 'Breakfast');
new ItemForSale('bubblegum.jpg', 'Meatball');
new ItemForSale('chair.jpg', 'Chair');
new ItemForSale('cthulhu.jpg', 'Cthulhu');
new ItemForSale('dog-duck.jpg', 'Dog Duck');
new ItemForSale('dragon.jpg', 'Dragon Meat');
new ItemForSale('pen.jpg', 'Pen');
new ItemForSale('pet-sweep.jpg', 'Pet Sweep');
new ItemForSale('scissors.jpg', 'Scissors');
new ItemForSale('shark.jpg', 'Shark');
new ItemForSale('sweep.png', 'Baby Sweeper');
new ItemForSale('tauntaun.jpg', 'Tauntaun');
new ItemForSale('unicorn.jpg', 'Unicorn');
new ItemForSale('usb.gif', 'USB');
new ItemForSale('water-can.jpg', 'Watering Can');
new ItemForSale('wine-glass.jpg', 'Wine Glass');

displayRandomImages();

var externalValues = [8 ,6, 7, 4];
var dataforChart = [
  {
    value: externalValues[0],
    label: 'document.getElementById()',
    color: 'FF3D7F',
    highlight: '#FF9E9D'
  },
  {
    value: externalValues[1],
    label: 'Math.random()',
    color: '#3FB8AF',
    highlight: '#7FC7AF'
  },
  {
    value: externalValues[2],
    label: '"for" loops',
    color: '#DAD8A7',
    highlight: '#FFBE40'
  },
  {
    value : externalValues[3],
    label: 'constructor functions',
    color: '#FFBE40',
    highlight: '#EF746F'
  },
  {
    value : 2,
    label: 'function expressions',
    color: '#FF4E50',
    highlight: '#6B5344'
  },
  {
    value : 5,
    label: 'appendChild()',
    color: '#A7CD2C',
    highlight: '#BADA5F'
  },
  {
    value : 8,
    label: 'setTimeout()',
    color: '#670D0F',
    highlight: '#F01945'
  },
  {
    value : 1,
    label: 'this',
    color: '#4E9995',
    highlight: '#63E0DA'
  }
];

var context = document.getElementById('popularity').getContext('2d');

var popularityChart = new Chart(context).PolarArea(dataforChart, {
  //Number - Amount of animation steps
  animationSteps : 10000,
  //String - Animation easing effect
  animationEasing : 'easeOutBounce',
  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate : false,
  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale : true,
  scaleShowLabelBackdrop : true
});

popularityChart.scale.yLabels = ['love it', 'like it', 'meh', 'good', 'nice', 'okay', 'good job', 'love love it'];
