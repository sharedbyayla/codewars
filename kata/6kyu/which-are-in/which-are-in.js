// https://www.codewars.com/kata/550554fd08b86f84fe000a58

const inArray = (array1, array2) => {
  return array1
    .filter((val) => {
      for (let i = 0; i < array2.length; i++) {
        if (array2[i].includes(val)) return val
      }
    })
    .sort()
}

let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']
let a1 = ['xyz', 'live', 'strong']
inArray(a1, a2) // -> ["live", "strong"]

a1 = ['live', 'strong', 'arp']
inArray(a1, a2) // -> ["arp", "live", "strong"]

a1 = ['tarp', 'mice', 'bull']
inArray(a1, a2) // -> []
