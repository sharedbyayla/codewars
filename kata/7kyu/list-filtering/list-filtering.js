// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

const filter_list = (l) => {
  return l.filter((val) => typeof val !== 'string')
}

filter_list([1, 2, 'a', 'b']) // -> [1,2]
filter_list([1, 'a', 'b', 0, 15]) // -> [1,0,15]
filter_list([1, 2, 'aasf', '1', '123', 123]) // -> [1,2,123]
