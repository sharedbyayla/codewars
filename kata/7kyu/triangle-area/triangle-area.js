// https://www.codewars.com/kata/59bd84b8a0640e7c49002398

const tArea = (tStr) => {
  const tSide = tStr.trim().match(/\n/gi).length
  return (tSide * tSide) / 2
}

tArea('\n.\n. .\n. . .\n') // -> 2
tArea(
  '\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'
) // ->  32
tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n') // -> 8
