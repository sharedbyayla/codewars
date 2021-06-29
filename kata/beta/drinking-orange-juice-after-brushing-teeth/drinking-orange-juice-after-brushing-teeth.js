// https://www.codewars.com/kata/607067f18c0349001b3f4fd2

const calcWaitForOJ = (flavor, amount) => {
  const toothpasteWait = {
    'Minty-Fresh': 37,
    'Lemon-Sage': 15,
    'Fruit-Fusion': 24,
  }

  const totalWait = Math.round(toothpasteWait[flavor] * amount)

  return totalWait
    ? `It's safe to drink OJ after ${totalWait} minutes.`
    : `It's safe to drink OJ now.`
}

calcWaitForOJ('Minty-Fresh', 1) // -> "It's safe to drink OJ after 37 minutes."
