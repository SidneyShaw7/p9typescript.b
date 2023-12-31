import { parseArguments } from './utils';

interface ResultValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface GivenValues {
  value1: number;
  value2: number[];
}

export const calculateExercises = (
  target: number,
  hoursDays: number[]
): ResultValues => {
  const periodLength = hoursDays.length;
  const trainingDays = hoursDays.filter((h) => h !== 0).length;
  const average =
    hoursDays.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / hoursDays.length;
  let success = false;
  if (average >= target) {
    success = true;
  }
  if (periodLength === trainingDays && success) {
    return {
      periodLength: periodLength,
      trainingDays: trainingDays,
      success: success,
      rating: 3,
      ratingDescription: 'You did a great job! Keep grinding!',
      target: target,
      average: average,
    };
  } else if (periodLength / 2 <= trainingDays && success) {
    return {
      periodLength: periodLength,
      trainingDays: trainingDays,
      success: success,
      rating: 2,
      ratingDescription: 'Not bad, but you can do better. Keep grinding!',
      target: target,
      average: average,
    };
  } else {
    return {
      periodLength: periodLength,
      trainingDays: trainingDays,
      success: success,
      rating: 1,
      ratingDescription: 'Stop doing shit. Start grinding!',
      target: target,
      average: average,
    };
  }
};

try {
  // console.log(calculateExercises([2, 2, 2, 0, 1, 3, 2], 1));
} catch (error) {
  console.error('Something went wrong:', error);
}

try {
  const { value1, value2 } = parseArguments<GivenValues>(process.argv);
  console.log(calculateExercises(value1, value2));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
