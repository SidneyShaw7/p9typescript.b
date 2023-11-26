// interface DividedValues {
//   value1: number
//   value2: number
// }

// const parseArguments = (args: string[]): DividedValues => {
//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       value1: Number(args[2]),
//       value2: Number(args[3]),
//     }
//   } else {
//     throw new Error('Provided values were not numbers!')
//   }
// }

// type Result = string | number;

// const calculate = (a: number, b: number) => {
//   const bmi = b / ((a * 2) / 100);
//   return bmi;
// };

const bmiCalculator = (height: number, weight: number): string => {
  const bmi: number = weight / ((height / 100) * (height / 100));
  if (bmi < 16.0) {
    return 'Underweight (Severe thinness)';
  } else if (16.0 <= bmi && bmi <= 16.9) {
    return 'Underweight (Moderate thinness)';
  } else if (17.0 <= bmi && bmi <= 18.4) {
    return 'Underweight (Mild thinness)';
  } else if (18.5 <= bmi && bmi <= 24.9) {
    return 'Normal (healthy weight)';
  } else if (25.0 <= bmi && bmi <= 29.9) {
    return 'Overweight (Pre-obese)';
  } else if (bmi >= 30) {
    return 'Stop eating, fatty!';
  }
  return 'Eat more';
};

try {
  console.log(bmiCalculator(180, 74));
} catch (error) {
  console.error('Something went wrong:', error);
}
