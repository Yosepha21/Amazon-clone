import React from "react";
import "./Home.css";
import Product from "./Product";
import SimpleImageSlider from "react-simple-image-slider"
import Sliderimage from "./Sliderimage";
import { Link } from "react-router-dom";


function Home() {

const images=[
  {url:"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" },
  {url:"https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"},
  {url:"https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" 
 },
  {url:"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" 
 },
  {url:"https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" 
 },
  {url:"https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
 },
 ]



  return (
    <div className="home">
      <div className="home_container">
        <div className="header-imageBanner ">

        <SimpleImageSlider
            width={1720}
            height={300}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={0.5}
            autoPlay={true}
        />
        </div>

        <h1>Popular items this season product</h1>
        
        <div className="home_row">
          <Product
            id="12321341"
            title="Unisex-Adult Official License Product Club Ball"
            price={28}
            rating={5}
            image="https://m.media-amazon.com/images/I/715Q5ebMf+L._AC_UL320_.jpg"
          />
          <Product
            id="12321341"
            title="XTERRA Fitness Fitness Folding Treadmill Black"
            price={180}
            rating={5}
            image="https://m.media-amazon.com/images/I/81kVJUQTC8L._AC_UL320_.jpg"
          />
          <Product
          
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={7.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
          />
          <Product
            id="49538094"
            title="Lamicall Laptop Stand, Aluminum Laptop Riser, Ergonomic Laptop Stand for Desk, Computer Notebook Stand Compatible with MacBook Air Pro, Dell XPS, HP (10-15.6'') - Silver"
            price={25}
            rating={4}
            image="https://m.media-amazon.com/images/I/61h8usaPWdL._AC_UL320_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <h1>Sports  Fashion Martial Arts Clothing </h1>
        
        <div className="home_row">
          <Product
            id="123213"
            image="https://m.media-amazon.com/images/I/71p-ELj96QL._AC_UL320_.jpg"
            title="JAXBOX Inflatable Kids Punching Bag - 64 in Freestanding Kids Boxing Bag - Toddler Punching Bag - Immediate Bounce Back for Practicing Karate Kickboxing Taekwondo MMA - Gift for Boys &amp; Girls"
            rating={3}
            price={29}
          />
          <Product
            id="12321341"
            image="https://m.media-amazon.com/images/I/51wcat4ZXAL._AC_UL320_.jpg"
            title="SYNTECSO Taekwondo Kick Pad Target, 3 Pack Kicking Pads with Wall Mounted Bracket Hands-Free Striking Pads for Tae Kwon Do Karate Kickboxing and Martial Arts Training"
            rating={4}
            price={179}
          />
          <Product
          
            id="12321341"
            image="https://m.media-amazon.com/images/I/7151JeNC4CL._AC_UL320_.jpg"
            title=" Pack Taekwondo Kick Pad, Durable Striking Pads for Kickboxing Training, Karate Kicking Target (Red, 15 x 2.5 x 7.5 in)"
            rating={5}
            price={16}
          />
          <Product
            id="49538094"
            title="SYNTECSO Kicking Pads for Martial Art, Wall Mounted Taekwondo Kick Pads Targets for Kickboxing Training"
            price={25}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ve+3K3emL._AC_UL320_.jpg"
          />
          <Product
            image="https://m.media-amazon.com/images/I/61-6xycgiXS._AC_UL320_.jpg"
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={26.0}
            rating={4}
          />
        </div>
        <h1>International top sellers</h1>
        <div className="home_row">
          <Product
            id="4903850"
            title="SAMSUNG Galaxy Z Fold 4 Cell Phone, Factory Unlocked Android Smartphone, 512GB, Flex Mode, Hands Free Video, Multi Window View, Foldable Display, S Pen Compatible, US Version, Gray Green"
            price={1567.05}
            rating={3}
            image="https://m.media-amazon.com/images/I/71a87teD1KL._AC_UY218_.jpg"
          />

          
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="3254354345"
            title="Magnetic Wireless Car Charger for Magsafe Mount iPhone 14/14 Pro Max/Mini/13/13 Pro/13 Pro Max/ 13 Mini/12/12 Pro/ 12 Pro Max/12 Mini, QI 15 W Car Charging, Car Dashboard and Air Vent Car Phone Holder"
            price={40}
            rating={4}
            image="https://m.media-amazon.com/images/I/615-PQGew+L._AC_UY218_.jpg"
          />
        </div>

        <h1>Home Décor Under $20 <Link className="links">Shope now</Link></h1>
        <div>
        <Sliderimage/>
        </div>


        <h1>Tv</h1>
        <div className="home_row">
          <Product 
           id="90829332"
           title="Hisense 65-Inch Class R6 Series Dolby Vision HDR 4K UHD Roku Smart TV with Alexa Compatibility (65R6G, 2021 Model)"
           price={1000.98}
           rating={4}
           image="https://m.media-amazon.com/images/I/71RshxhlEiL._AC_UY218_.jpg"
          />
          <Product 
           id="90829332"
           title="All-New Insignia NS-75F301NA22 75-inch F30 Series LED 4K UHD Smart Fire TV"
           price={250.98}
           rating={4}
           image="https://m.media-amazon.com/images/I/81RMiofn0GL._AC_UY218_.jpg"
          />
          <Product 
           id="90829332"
           title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
           price={1094.98}
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Home;
