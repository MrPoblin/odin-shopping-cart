import { useState, useEffect } from "react";
import Item from "./Item";

export default function ShopItems(){
    const [items, setItems] = useState([]);
    
    useEffect(() =>{
        async function getData(){
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            for(let i = 0; i < data.length; i++){
                setItems((prevItems) =>{
                    return [...prevItems, <Item key={data[i].id} id={data[i].id} image={data[i].image} title={data[i].title} price={data[i].price} />]
                });
            }
        }
        getData();
    }, []);

    return items;
    
}