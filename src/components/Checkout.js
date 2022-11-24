import React from 'react'
import Subtotal from './Subtotal';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './Stateprovider'


function Checkout() {
  //to push or pull to the datalayer
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout-left'>
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h1>Hello</h1>
        <h2 className='checkout-title'>Your shopping Cart</h2>
        {/* connecting component here */}
        {/* <CheckoutProduct/> */}
       
         {basket.map((item,i) => (
            <CheckoutProduct
            key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}  
         
        </div>
        <div className='checkout-right'>
          <Subtotal/>
        </div>
    </div> 
  )
}

export default Checkout