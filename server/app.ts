import cors from 'cors';
import calcs from "./services/calcs";
import express, { Request, Response } from 'express';

const app = express();
app.use(cors());

app.get("/api/:num", (request: Request, response: Response) => {
  const numStr = request.params.num;
  const num: number = +numStr;

  console.log(`/api/:num route: param.num = ${numStr}`);

  let primesArray: number[];

  if (Number.isInteger(num) && num > 0) {
    primesArray = calcs.sieveOfEratosthenes(num - 1);
  } else {
    primesArray = [];
  }

  let medianPrimesJSON: {medianPrimes : number[] } = {
    medianPrimes: [],
  };

  if (!primesArray.length) {
    response.json(medianPrimesJSON);
  } else {
    let median = Math.floor(primesArray.length / 2);
    if (primesArray.length % 2 === 0) {
      medianPrimesJSON.medianPrimes = [
        primesArray[median - 1],
        primesArray[median],
      ];
      response.json(medianPrimesJSON);
    } else {
      medianPrimesJSON.medianPrimes = [primesArray[median]];
      response.json(medianPrimesJSON);
    }
  }
});

app.use((_req: Request, res: Response) => {
  res.status(404).send({ error: "Not found" });
});

export default app;
