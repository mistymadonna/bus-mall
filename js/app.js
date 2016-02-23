function randomBetween(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

var images = ['bag.jpg', 'banana.jpg', 'cthulhu.jpg']

for(var i = 0; i <=3; i++) {
  var imgEl = document.createElement('img')
  var index = randomBetween(0,2)
  var imgName = images[index]
  imgEl.src = 'img/' + imgName
  document.body.appendChild(imgEl)
}
