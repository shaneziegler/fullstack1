// import { useState } from "react";
// import { ProductEntry } from "../../types";

interface EnterUpperLimitProps {
  upperLimit: number,
  setUpperLimit: React.Dispatch<React.SetStateAction<number>>;
}

const EnterUpperLimit = ({setUpperLimit, upperLimit} : EnterUpperLimitProps) => {

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
  setUpperLimit(+e.target.value);}

  return (
    <form>
      <div className="input-group">
        <label htmlFor="upper-limit-num">Enter upper limit number:</label>
        <input
          type="number"
          id="upper-limit-num"
          name="upper-limit-num"
          min="0"
          value={upperLimit}
          onChange={handleOnChange}
          required
        />
      </div>
    </form>
  );
};

export default EnterUpperLimit;