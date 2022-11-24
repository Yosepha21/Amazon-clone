import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider"
import  ReactImageMagnify from 'react-magnify-image'
import ReactPlayer from 'react-player/youtube'

import "./sliderimage.css"


function Sliderimage({rating,id,price}) {
  const image2=[
    {url:"https://m.media-amazon.com/images/I/613+CG1dP1L._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/71iArV-kskL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/41d1tq6oesL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/81AOpcqJfHL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/71FGSz-g+BL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/710xU17suIL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/81xiJRmOwUL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/612xTdtHVfL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/81w+ZcNjlVL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/71Mda9UuJhL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/61dhzAmqvOL._AC_SY200_.jpg"},
    {url:"https://m.media-amazon.com/images/I/61XwmZLvaNL._AC_SY200_.jpg"},
   ]
    
  return (
    <div>

  
       <div className="slideshow">
      <div className="slideshowSlider">
        {image2.map((x, index) => (
         <img key={index} src={x.url}/>
        ))}
      </div>


      <div className='additionalfutures'>
      {/* here is adding demo video  */}
      <ReactPlayer
       url='https://www.youtube.com/watch?v=oYhRx45JLgw'
      // playing={true}
      loop={true}
      width={440}
      height={400}
      onReady={true}
      />

{/* image magnify */}
        <ReactImageMagnify
        {...{
          smallImage:{
            src: "https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg",
            width:400,
            height:400,
          },
          largeImage:{
            src: "https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg",
            width:1000,
            height:1100,
            hoverDelayInMs:300,
            hoverOffDelayInMs:200,
            srcset:"two.png 100w, three.png 500w, four.png 1000w"
            // enlargedImagePosition
          }
          
        }
          
        }
        />
        </div>
    </div>
    </div>
  )
}

export default Sliderimage;