import PropTypes from "prop-types";


export default function ItemInCart({image, title, price, quantity}){

    
    return(
        <div className="h-[22rem] w-64 bg-secondary rounded-2xl p-2 shadow-lg flex flex-col justify-between items-center">
            <img className="rounded-lg w-80 h-52 object-contain" src={image} />
            <h2 className="text-primary font-medium line-clamp-2 text-center h-12">{title}</h2>
            <h3 className="text-primary font-semibold">{price} €</h3>
            <h3 className="text-primary font-semibold">Qty. {quantity}</h3>
            <h3 className="text-primary font-semibold">Total: {price * quantity} €</h3>
        </div>
    );
}

ItemInCart.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  };