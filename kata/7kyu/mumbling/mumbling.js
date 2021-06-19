// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

const accum = (s) => {
  return s
    .split('')
    .map(
      (letter, i) =>
        (letter = `${letter.toUpperCase()}` + letter.toLowerCase().repeat(i))
    )
    .join('-')
}

accum('ZpglnRxqenU') // -> "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
accum('NyffsGeyylB') // -> "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
accum('MjtkuBovqrU') // -> "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
accum('EvidjUnokmM') // -> "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
accum('HbideVbxncC') // -> "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
