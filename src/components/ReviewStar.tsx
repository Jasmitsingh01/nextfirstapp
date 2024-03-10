'use client';

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ReviewStar() {
 const [Hover, setHover] = useState<any>(null);
 const [current,setcurrent]=useState <any>(null);
  return (
    <div className=" flex">
      {
        [...Array(5)].map((item,index)=>{
          const CurrentStar=index+1;
          return (
            <label key={index} onMouseOut={()=>setHover(null)} className=" mb-3" >
               <input type="radio" name="star" onClick={()=>setcurrent(index+1)} className=" hidden"/>
              <FaStar size={50} onMouseEnter={()=>setHover(index+1)}  className={index< current || Hover ?"text-colorStar" : " text-slate-300"}/>
            </label>
          );
        })
      }
    </div>
  )
}

export default ReviewStar