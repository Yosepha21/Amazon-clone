import React from 'react';
import './Product.css'
import { useStateValue } from './Stateprovider';

function Product({id,title,image,price, rating}) {
  //  why we use useStateValue instade of useState
  const [{basket},dispatch]=useStateValue();
  console.log('This is the basket', basket)

  const addToBaskket=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };

  
  return (
    <div className='product'>
        <div className='product_info'>
          
            <p className='titlePro'>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
              {Array(rating).fill().map(
                ()=>{
                 return<p>⭐</p>
              })}
               
            </div>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToBaskket}>Add to Basket</button>

      
    </div>
  )
}

export default Product;