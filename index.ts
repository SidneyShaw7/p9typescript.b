/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import { bmiCalculator } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = parseFloat(req.query.height as string);
  const weight = parseFloat(req.query.weight as string);

  if (height === undefined || weight === undefined) {
    res
      .status(400)
      .json({ error: 'Both height and weight parameters are required' });
    return;
  }

  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: 'Invalid height or weight parameters' });
  }

  if (!isNaN(height) && !isNaN(weight)) {
    const result = bmiCalculator(height, weight);
    console.log(height, weight);
    res.json({ height: height, weight: weight, bmi: result });
  } else {
    res.status(400).send('Invalid height or weight parameters');
  }
});

app.post('/exercises', (req, res) => {
  const value1 = req.body.target;
  const value2 = req.body.daily_exercises;
  if (
    typeof value1 === 'number' &&
    Array.isArray(value2) &&
    value2.every((item) => typeof item === 'number')
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculateExercises(value1, value2);
    res.send({ result });
  } else if (!value1 || !value2) {
    res.status(400).send('parameters missing');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
  } else if (Number(value1) || value2.every((v: any) => Number(v))) {
    res.status(400).send('parameters missing');
  }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
