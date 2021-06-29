// https://www.codewars.com/kata/582cb0224e56e068d800003c

const litres = (time) => {
  return Math.floor(time / 2)
}

litres(2) // ->  1
litres(1.4) // ->  0
litres(12.3) // ->  6
litres(0.82) // ->  0
litres(11.8) // ->  5
litres(1787) // ->  893
litres(0) // ->  0
