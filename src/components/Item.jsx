import { useContext, useState } from "react";
import { CartContext } from "./CartItems";

export default function Item({image, title, price, id}){

    const [itemCount, setItemCount] = useState(1);


    function add(num){
        setItemCount((currItemCount)=>{
            if((currItemCount <= 1 && num <=-1) || (currItemCount > 999 && num >=1)){
                return parseInt(currItemCount);
            }
            else{
                return parseInt(currItemCount) + parseInt(num);
            }
        });
    }

    function change(e){
        setItemCount(parseInt(e.target.value));
    }

    function blur(e){
        setItemCount(() =>{
            if (e.target.value > 999){
                return 999;
            }
            else if(e.target.value < 1){
                return 1;
            }
            else{
                return e.target.value;
            }
        });
    }

    const{addToCart} = useContext(CartContext);

    const [addToCartText, SetAddToCartText] = useState("Add To Cart");

    function addItem(){
        addToCart({
            id: id,
            title: title,
            image: image,
            price: price,
            quantity: itemCount,
        });
        SetAddToCartText("Added to Cart");
    }

    return(
        <div className="h-[22rem] w-64 bg-secondary rounded-2xl p-2 shadow-lg flex flex-col justify-between items-center">
            <img className="rounded-lg w-80 h-52 object-contain" src={image} />
            <h2 className="text-primary font-medium line-clamp-2 text-center h-12">{title}</h2>
            <h3 className="text-primary font-semibold">{price} €</h3>
            <div className="flex gap-1 px-1 bg-background rounded-md">
                <button onClick={() => add(-1)} className="font-bold ">-</button>
                <input min="1" max="999" onBlur={blur} onChange={change} value={itemCount} className="bg-background w-8 text-center" type="number"></input>
                <button onClick={() => add(1)} className="font-bold">+</button>
            </div>
            <button onClick={addItem} className="text-primary font-semibold text-center">{addToCartText}</button>
        </div>
    );
}