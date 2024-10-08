interface EnterUpperLimitProps {
  upperLimit: number;
  setUpperLimit: React.Dispatch<React.SetStateAction<number>>;
}

const EnterUpperLimit = ({
  setUpperLimit,
  upperLimit,
}: EnterUpperLimitProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      e.target.value = "0";
      setUpperLimit(0);
    } else {
      if (e.target.value[0] === "0") {
        e.target.value = e.target.value.slice(1);
      }
      setUpperLimit(+e.target.value);
    }
  };

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
        />
      </div>
    </form>
  );
};

export default EnterUpperLimit;
