// https://www.codewars.com/kata/55b42574ff091733d900002f

const friend = (friends) => {
  return friends.filter((name) => name.length === 4)
}

friend(['Ryan', 'Kieran', 'Mark']) // -> ["Ryan", "Mark"]
friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']) // -> ["Ryan"]
friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']) // -> ["Jimm", "Cari", "aret"]
friend(['Love', 'Your', 'Face', '1']) // -> ["Love", "Your", "Face"]
