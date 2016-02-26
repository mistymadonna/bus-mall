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

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[randomBetween(0, 15)];
    }
    return color;
}

function shadeColor2(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
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

function updateLocalStorage() {
  var localData = JSON.stringify(itemsArray);
  window.localStorage.setItem("ProductData", localData);
}

function loadLocalStorage() {
  var localData = window.localStorage.getItem("ProductData");
  if (localData) {
    itemsArray = JSON.parse(localData);
  }
  return itemsArray.length != 0;
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
      updateLocalStorage();
      displayRandomImages();
    };

    document.getElementById("imgs").appendChild(imgEl);
    randomItem.displayed++;
  }
}

var randomIndexes;
var itemsArray = [];

if (!loadLocalStorage()) {
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
}

displayRandomImages();

function renderChart() {
  var dataforChart = [];
  for (var i = 0; i < itemsArray.length; i++) {
    var item = itemsArray[i];
    var randomColor = getRandomColor();
    var lighterColor = shadeColor2(randomColor, 0.3)
    dataforChart.push({
      label: item.name,
      value: item.clicked,
      color: randomColor,
      highlight: lighterColor
    });
  }

  var context = document.getElementById('popularity').getContext('2d');

  var popularityChart = new Chart(context).PolarArea(dataforChart, {
    //Number - Amount of animation steps
    animationSteps : 20,
    //String - Animation easing effect
    animationEasing : 'easeOutBounce',
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : false,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    scaleShowLabelBackdrop : true
  });

  popularityChart.scale.yLabels = ['love it', 'like it', 'meh', 'good', 'nice', 'okay', 'good job', 'love love it'];
};

renderChart();
