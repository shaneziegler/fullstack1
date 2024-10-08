function sieveOfEratosthenes(n: number) {
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

// module.exports = { sieveOfEratosthenes };
export default { sieveOfEratosthenes };
