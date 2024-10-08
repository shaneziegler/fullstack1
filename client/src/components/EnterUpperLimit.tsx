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
      <div className="w-full max-w-lg mb-12">
        <label htmlFor="upper-limit-num" className="w-full max-w-lg mb-12">
          Enter upper limit number:{" "}
        </label>
        <input
          className="w-full px-5 py-4 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
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

// {/* Input Field */}
// <div className="w-full max-w-lg mb-12">
//   <label htmlFor="upperLimit" className="w-full max-w-lg mb-12">
//     Enter an upper limit
//   </label>
