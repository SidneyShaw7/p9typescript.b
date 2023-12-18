import { parseArguments } from './utils';

interface Values {
  value1: number;
  value2: number;
}

export const bmiCalculator = (height: number, weight: number): string => {
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
  const { value1, value2 } = parseArguments<Values>(process.argv);
  console.log(bmiCalculator(value1, value2));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
