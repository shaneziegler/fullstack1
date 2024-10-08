require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
import cors from 'cors';
// const calcs = require("./services/calcs");
import calcs from "./services/calcs";
import express, { Request, Response } from 'express';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Find the server at: http://localhost:${PORT}/`); // eslint-disable-line no-console
});
