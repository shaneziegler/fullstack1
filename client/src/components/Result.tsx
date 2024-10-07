interface ResultProps {
  upperLimit: number,
  medianPrimesArray : number[]
}

const Result = ({ upperLimit, medianPrimesArray } : ResultProps) => {
  return (
      <h2>The median prime numbers for an upper limit of {upperLimit} is: [{medianPrimesArray.join(', ')}]</h2>
  );
};

export default Result;