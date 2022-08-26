import React from  'react'
const HeroOption = ({title, options}) => {
   
  return (
    <>
    <p className="mb-1 font-semibold text-[16px] lg:text-[18px]">{title}</p>
    <select 
      className="text-[#E6EAEE] bg-transparent cursor-pointer outline-none text-sm"
    >
      {options.map((result:string, index:any) => {
        return (
        <React.Fragment
        key={index}
        > 
          <option
          className="bg-[#302121] text-[#E6EAEE]"
          >{result}</option>
        </React.Fragment>
        )
      })}
    </select>
    </>
  )
}

export default HeroOption;