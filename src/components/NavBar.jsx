import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CartContext } from "./CartItems";

export default function NavBar(){

    const{cartItems} = useContext(CartContext);

    function getItemCount(total, item){
        if(isNaN(parseInt(total))){
            return item.quantity;
        }
        return parseInt(total) + item.quantity;
    }

    return(
        <header className="px-8 bg-primary w-full h-20 flex justify-between items-center">
            <div className="size-8"/>
            <nav >
                <Link to="/" className="p-4 text-background text-2xl font-semibold transition-colors hover:bg-accent hover:text-primary">Home</Link>
                <Link to="/shop/" className="p-4 text-background text-2xl font-semibold transition-colors hover:bg-accent hover:text-primary">Shop</Link>
            </nav>
            <Link to="/cart/">
                <ShoppingCartIcon className="size-8 text-background"></ShoppingCartIcon>
                <div className="absolute top-3 right-5 text-sm bg-background pr-1 pl-1 rounded-full">{cartItems.reduce(getItemCount, '')}</div>
            </Link>
        </header>
    );
}