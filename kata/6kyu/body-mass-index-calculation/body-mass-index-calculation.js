// https://www.codewars.com/kata/55f810474dc34c5a25000016

const DATA = [
  //  from,  to,       category
  [0, 15, 'Very severely underweight'],
  [15, 16, 'Severely underweight'],
  [16, 18.5, 'Underweight'],
  [18.5, 25, 'Normal (healthy weight)'],
  [25, 30, 'Overweight'],
  [30, 35, 'Obese Class I (Moderately obese)'],
  [35, 40, 'Obese Class II (Severely obese)'],
  [40, 45, 'Obese Class III (Very severely obese)'],
  [45, 50, 'Obese Class IV (Morbidly obese)'],
  [50, 60, 'Obese Class V (Super obese)'],
  [60, Infinity, 'Obese Class VI (Hyper obese)'],
]

function calculateBmi(weight, height) {
  const bmi = (weight / height ** 2) * 10000

  return {
    value: bmi.toFixed(1),
    category: DATA.filter((arr) => arr[0] <= bmi && bmi < arr[1])[0][2],
  }
}

calculateBmi(65, 175) // -> {value: "21.2", category: "Normal (healthy weight)"}
