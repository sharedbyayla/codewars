// https://www.codewars.com/kata/56f1c6034d0c330e4a001059

const generateColor = () => {
  const vals = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let hexcode = '#'

  while (hexcode.length < 7){
    hexcode += vals[Math.floor(Math.random() * vals.length)]
  }
  
  return hexcode
}

generateColor()


