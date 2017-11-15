var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  let animal='cat'
  return animal
}

function add2(n) {
  let nInner=`${n}`
  let nInt=parseInt(nInner,10)
  return nInt+two
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
