// https://www.codewars.com/kata/5aa736a455f906981800360d

function feast(beast, dish) {
  return beast.startsWith(dish[0]) && beast.endsWith(dish.slice(-1))
}

feast('great blue heron', 'garlic naan') // -> true
feast('chickadee', 'chocolate cake') // -> true
feast('brown bear', 'bear claw') // -> false
