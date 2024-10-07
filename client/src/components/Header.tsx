// import { ProductListing } from "../types";

// interface ItemProps {
//   item: ProductListing;
// }

// const CartItem = ({ item }: ItemProps) => {
//   const { title, price, quantity } = item;
//   return (
//     <tr>
//       <td>{title}</td>
//       <td>{quantity}</td>
//       <td>{price}</td>
//     </tr>
//   );
// };

// interface HeaderProps {
//   cartItems: ProductListing[];
//   onCheckout: () => void;
// }



const Header = () => {
  return (
    <header>
      <h1>Median Prime Numbers</h1>
    </header>
  );
};

export default Header;