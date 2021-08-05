// https://www.codewars.com/kata/57ed30dde7728215300005fa

function bump(x) {
  const bumps = x.match(/n/g) || []
  return bumps.length <= 15 ? 'Woohoo!' : 'Car Dead'
}

bump('n') // -> "Woohoo!"
bump('_nnnnnnn_n__n______nn__nn_nnn') // -> "Car Dead"
bump('______n___n_') // -> "Woohoo!"
