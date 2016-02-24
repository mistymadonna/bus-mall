function randomBetween(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

var images = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg']

var max = images.length - 1
for(var i = 0; i < 3; i++) {
  var imgsCopy = images
  var imgEl = document.createElement('img')
  var randomIndex = randomBetween(0,max)
  var imgName = imgsCopy[randomIndex]
  imgEl.src = 'img/' + imgName
  document.body.appendChild(imgEl)
  // remove item with randomIndex from imgsCopy
  imgsCopy.splice(randomIndex, 1)
  // make sure next time in the loop we reduce the random maximum by 1.
  max--
}









////make sure no duplicates
//keep track of clicks
//To do this, you'll want a constructor function that creates an object associated with each image, and has properties for the name of the image, its filepath, the number of times it has been shown, and the number of times it has been clicked.
