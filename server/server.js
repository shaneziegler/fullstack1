const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
// app.set("port", process.env.API_PORT || 3001);
const PORT = 3000;

function sieveOfEratosthenes(n) {
  // Create a boolean array of size n+1
  let primes = new Array(n + 1).fill(true);
  // Set first two values to false
  primes[0] = false;
  primes[1] = false;
  // Loop through the elements
  for (let i = 2; i <= Math.sqrt(n); i++) {
     if (primes[i]) {
        for (let j = i * i; j <= n; j += i) {
           primes[j] = false;
        }
     }
  }

  let result = [];
  // Loop through the array from 2 to n
  for (let i = 2; i <= n; i++) {
     if (primes[i]) {
        result.push(i);
     }
  }
   
  return result;
}

// app.get("/", (req, res) => {
//   const maxNumber = req.query.n;
//   console.log(maxNumber);
//   res.json(maxNumber);
// });



app.get('/api/:num', (request, response) => {
  const numStr = request.params.num;
  num = +numStr;
  console.log(num);
  let primesArray;
  if (Number.isInteger(num) && num > 0) {
    primesArray = sieveOfEratosthenes(num - 1);
  } else {
    primesArray = undefined;
  }

  let medianPrimesJSON = {
    medianPrimes: []
  }

  if (primesArray) {
    if (!primesArray.length) {
      response.json(medianPrimesJSON);
    } else {
      let median = Math.floor(primesArray.length / 2);
      if (primesArray.length % 2 === 0) {
        medianPrimesJSON.medianPrimes = [primesArray[median - 1], primesArray[median]];
        response.json(medianPrimesJSON);
      } else {
        medianPrimesJSON.medianPrimes = [primesArray[median]];
        response.json(medianPrimesJSON);
      }
    }
  } else {
    response.status(404).end();
    console.log('bad input');
  }
});

app.use((req, res) => {
  res.status(404).send({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Find the server at: http://localhost:${PORT}/`); // eslint-disable-line no-console
});