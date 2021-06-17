// https://www.codewars.com/kata/52685f7382004e774f0001f7

const humanReadable = (seconds) => {
  let hours = seconds / 3600
  let minutes = (hours - parseInt(hours)) * 60
  seconds = Math.round((minutes - parseInt(minutes)) * 60)

  const arr = `${parseInt(hours)}:${parseInt(minutes)}:${seconds}`.split(':')

  return arr
    .map((val) => (val.length < 2 ? (val = `0${val}`) : (val = val)))
    .join(':')
}

humanReadable(0) // ->  '00:00:00'
humanReadable(5) // -> '00:00:05'
humanReadable(60) // -> '00:01:00'
humanReadable(86399) // -> '23:59:59'
humanReadable(359999) // -> '99:59:59'
