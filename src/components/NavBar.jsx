import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function NavBar(){
    return(
        <header className="px-8 bg-primary w-full h-20 flex justify-between items-center">
            <div className="size-8"/>
            <nav >
                <Link to="/" className="p-4 text-background text-2xl font-semibold transition-colors hover:bg-accent hover:text-primary">Home</Link>
                <Link to="/shop/" className="p-4 text-background text-2xl font-semibold transition-colors hover:bg-accent hover:text-primary">Shop</Link>
            </nav>
            <Link to="/cart/">
                <ShoppingCartIcon className="size-8 text-background"></ShoppingCartIcon>
            </Link>
        </header>
    );
}