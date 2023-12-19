import express from 'express'
import { bmiCalculator } from './bmiCalculator'
// import { calculateExercises } from './exerciseCalculator';

const app = express()
app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
  const height = parseFloat(req.query.height as string)
  const weight = parseFloat(req.query.weight as string)

  if (height === undefined || weight === undefined) {
    res
      .status(400)
      .json({ error: 'Both height and weight parameters are required' })
    return
  }

  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: 'Invalid height or weight parameters' })
    return
  }

  if (!isNaN(height) && !isNaN(weight)) {
    const result = bmiCalculator(height, weight)
    console.log(height, weight)
    res.json({ height: height, weight: weight, bmi: result })
  } else {
    res.status(400).send('Invalid height or weight parameters')
  }
})

// app.post('/calculate', (req, res) => {
//   const { value1, value2, op } = req.body;

//   const result = calculator(value1, value2, op);
//   res.send({ result });
// });

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
