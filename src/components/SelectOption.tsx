"use client";

interface Props{
    text:string,
}

import { useState } from "react"
function SelectOption({text}:Props) {
    const [select, setselect] = useState<boolean>(false)
  return (
    <div className=" p-b-3 mb-3">

<button type="button" className={` ${select?'bg-green-500':'bg-slate-200'} p-2 rounded-xl`} onClick={()=>setselect(!select)}>{text}</button>
    </div>
  )
}

export default SelectOption