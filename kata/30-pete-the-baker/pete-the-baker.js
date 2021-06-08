// https://www.codewars.com/kata/525c65e51bf619685c000059

const cakes = (recipe, available) => {
  const totals = []
  
  Object.keys(recipe).map(item => {
    if(Object.keys(available).includes(item)){
      totals.push(parseInt(available[item] / recipe[item]))
    } else {
      totals.push(0)
    }
  })
  
  return Math.min(...totals)
}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}) // -> 2
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}) // -> 0
