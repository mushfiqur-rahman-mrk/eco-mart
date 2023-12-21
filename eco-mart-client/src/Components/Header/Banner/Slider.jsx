import { useState } from "react";
import {SliderData} from './sliderimage.js'

const Slider = () => {
  const [current,setCurrent]=useState(0)
  const length = SliderData.length
  // console.log(length);
  const nextImage=()=>{
      console.log(current,length-1);
      setCurrent(current === length -1 ? 0 : current + 1 )
  }

  const prevImage=()=>{
      console.log('clicked');
      setCurrent(current === 0 ? length -1 : current - 1 )
  }
  return (
    <>
      <div className="border relative flex justify-center items-center h-[70vh] bg-[#F2F2F2] border-none">
        <div><img src="/src/assets/bannerbg.png" className="absolute top-0 left-0 object-cover" alt="" /></div>
        <div className="absolute text-xl text-red-600 font-bold justify-between w-full flex px-10">
          <button onClick={prevImage}>Left</button>
          <button onClick={nextImage}>Right</button>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Welcome to eco-mart</p>
            <h1>Fresh & Healthy <br/> Organic Food</h1>
            <h3>Sale Up to <span>30% off</span></h3>
            <p></p>
            <button>Shop now</button>
          </div>
        </div>
        {SliderData.map((slide, idx) => {
          return (
            <div key={idx} className={idx === current ? 'opacity-100':'opacity-0'}>
                {
                    idx === current && (
                      
                        <img src={slide.image} className="w-[1000px] h-[600px]" alt="" />
                    )
                }

            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;