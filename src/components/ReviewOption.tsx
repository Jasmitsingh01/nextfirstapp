'use client';

import React, { useState } from 'react'
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";

function ReviewOption() {
  const [active,setactive]=useState('');
  return (
    <div className=' flex pb-3'>
<label  className=' me-5 flex items-center '>
  <input type="radio" name="option" className={`hidden`} onClick={()=>setactive('no')} />
  <span className={` flex ${active==='no'? 'text-coloroption':null} font-semibold `}><FaThumbsDown size={40} className={`mx-3 ${active==='no'? 'text-coloroption': 'text-slate-400'}`}/> No</span>
</label>
<label className=' mx-5 flex items-center '>
  <input type="radio" name="option" className={`hidden`} onClick={()=>setactive('yes')}/>
  <span className={` flex ${active==='yes'? 'text-coloroption':null} font-semibold`}><FaThumbsUp size={40} className={`mx-3 ${active==='yes'? 'text-coloroption': 'text-slate-400'}`}/> Yes</span>
</label>

    </div>
  )
}

export default ReviewOption;