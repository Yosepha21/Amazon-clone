import React from "react";
import "./checkOutProduct.css";
import { useStateValue } from "./Stateprovider";

function CheckoutProduct({ id, image, title, price, rating,hideButton}) {
  const [{ basket }, dispatch] = useStateValue();
  
  // to remove from Cart
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };


  return (
    <div  className="checkOutProduct">
    
        <img  className="checkoutProduct__image"
        src={image} />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title" >{title}</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((_,i) => (
                
                  <p>⭐</p>
                ))}
            </div>
            {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}{' '}
        </div>
      </div>
   
  );
}

export default CheckoutProduct;
