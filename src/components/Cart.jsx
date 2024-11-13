import NavBar from "./NavBar";
import { useContext } from "react";
import { CartContext } from "./CartItems";
import ItemInCart from "./ItemInCart";

export default function Cart() {

  const{cartItems} = useContext(CartContext);

  return (
    <div className="h-full">
      <NavBar></NavBar>
      <div className="bg-background h-full flex justify-center">
        <div className="w-full max-w-6xl bg-accent h-full flex flex-col items-center">
          <h1 className="text-primary pt-6 text-3xl font-semibold">Shopping Cart</h1>
          <div className="flex justify-center gap-6 p-6 flex-wrap">
            {cartItems.map((item) => {
              return <ItemInCart key={item.index} image={item.image} title={item.title} price={item.price} quantity={item.quantity} />
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
}
