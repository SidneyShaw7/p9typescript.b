interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (hoursDays: number[], target: number): Result => {
  const periodLength = hoursDays.length;
  const trainingDays = hoursDays.filter((h) => h !== 0);
  const resultTarget = target;
  const average =
    hoursDays.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / hoursDays.length;
  let success = false;
  if (average >= target) {
    success = true;
  }
};
