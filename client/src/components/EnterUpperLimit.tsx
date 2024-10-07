import { useState } from "react";
// import { ProductEntry } from "../../types";

interface EnterUpperLimitProps {
  upperLimit: number,
  setUpperLimit: React.Dispatch<React.SetStateAction<number>>;
}

const EnterUpperLimit = ({setUpperLimit, upperLimit} : EnterUpperLimitProps) => {
  const [upperLimitText, setUpperLimitText] = useState("");
  // const [productPrice, setProductPrice] = useState("");
  // const [productQuantity, setProductQuantity] = useState("");

  const reset = () => {
    setUpperLimitText("");
  };

  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   onSubmitAddProduct(
      //     {
      //       title: productName,
      //       price: +productPrice,
      //       quantity: +productQuantity,
      //     },
      //     reset
      //   );
      // }}
    >
      {/* <div className="input-group">
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div> */}
      {/* <div className="input-group">
        <label htmlFor="product-price">Price:</label>
        <input
          type="number"
          id="product-price"
          name="product-price"
          min="0"
          step="0.01"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </div> */}
      <div className="input-group">
        <label htmlFor="upper-limit-num">Enter upper limit number:</label>
        <input
          type="number"
          id="upper-limit-num"
          name="upper-limit-num"
          min="0"
          value={upperLimit}
          onChange={(e) => setUpperLimit(e.target.value)}
          required
        />
      </div>
      {/* <div className="actions form-actions">
        <button type="submit">Add</button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            reset();
            setIsAddFormShown(false);
          }}
        >
          Cancel
        </button>
      </div> */}
    </form>
  );
};

export default EnterUpperLimit;