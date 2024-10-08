interface ResultProps {
  upperLimit: number;
  medianPrimesArray: number[];
}

const Result = ({ upperLimit, medianPrimesArray }: ResultProps) => {
  const primeNums: number = medianPrimesArray.length;

  if (primeNums === 0) {
    return (
      <h2>There are no prime numbers for an upper limit of {upperLimit}!</h2>
    );
  } else if (primeNums === 1) {
    return (
      <h2>
        The median prime number for an upper limit of {upperLimit} is{" "}
        {medianPrimesArray[0]}.
      </h2>
    );
  } else {
    return (
      <h2>
        The median prime numbers for an upper limit of {upperLimit} are{" "}
        {medianPrimesArray[0]} and {medianPrimesArray[1]}.
      </h2>
    );
  }
};

export default Result;
