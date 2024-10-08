interface ResultProps {
  upperLimit: number;
  medianPrimesArray: number[];
}

const Result = ({ upperLimit, medianPrimesArray }: ResultProps) => {
  const primeNums: number = medianPrimesArray.length;
  let outputText: string;

  if (primeNums === 0) {
    outputText = `There are no prime numbers for an upper limit of ${upperLimit}!`;
  } else if (primeNums === 1) {
    outputText = `The median prime number for an upper limit of ${upperLimit} is ${medianPrimesArray[0]}.`;
  } else {
    outputText = `The median prime numbers for an upper limit of ${upperLimit} are ${medianPrimesArray[0]} and ${medianPrimesArray[1]}.`;
  }

  return (
    <div className="w-full max-w-lg">
      <p className="text-xl">{outputText}</p>
    </div>
  );
};

export default Result;
