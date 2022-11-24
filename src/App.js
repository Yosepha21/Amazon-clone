import "./App.css";
import Header from './components/Header/Header';
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import { useStateValue } from "./components/Stateprovider";
import Login from "./components/Login";
import { auth } from "./components/firbase";
import { useEffect } from "react";
import Payment from "./components/payment/Payment";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import Orders from "./components/orders/Orders";

const promise=loadStripe("pk_test_51LxloQSD7OnSGYs9yvTiIxfdS23xOdVh1LvTqebBNwkhtMWcCwKcBJ9Jw8tDf9fMli7ak7moW5DV6X2ymED2JCOn00FvtOF9Tt")
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Orders" element={ <><Header /><Orders/></>}/>
          <Route
            path="/login" element={ <Login />}/>
          {/* <Route
            path="/Payment" element={ <Payment />}/> */}
          <Route
            path="/payment" element={
              <><Elements stripe={promise}><Payment/></Elements></>}/>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
