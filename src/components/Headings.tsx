
interface Props{
  heading:string,
  subHeading:string ,
}


function Headings({heading,subHeading}:Props) {
  return (
<>
    <h6 className="text-xl font-semibold mb-4">{heading}</h6>
    <p className=" text-sm text-slate-500 mb-5">{subHeading}</p>
</>
  )
}

export default Headings