import express from 'express';
import { bmiCalculator } from './bmiCalculator';
import { parseArguments } from './utils';

const app = express();

// interface Values {
//   value1: number;
//   value2: number;
// }

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  //   const height = req.query.height;
  //   const weight = req.query.weight;
  res.send();
  const queryParams = req.query;
  const parsedArgs = parseArguments(queryParams);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
