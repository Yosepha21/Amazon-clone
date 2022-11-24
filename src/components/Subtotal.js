import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { useNavigate} from 'react-router-dom'

import "./Subtotal.css";
function Subtotal() {

      const [{basket}, dispatch] = useStateValue();
    const navigate=useNavigate()
    const getBasketTotal=(basket)=>{
      return basket?.reduce((sum,item)=>item.price+sum,0);
        }
    
  return (
    <div className="subtotal">
      <h1>subtotal</h1>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
              
        //*** why it isn't working  */

        // value={getBasketTotal(basket)}
        value={getBasketTotal(basket)}

        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* not working */}
      <button onClick={()=>{navigate('/payment')}}>
        Proceed to Checkout
        </button>
    </div>
  );
}

export default Subtotal;
