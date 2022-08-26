import Link from "next/link"
import styled from "styled-components";

const Logo = ({footer}) => {
  return (
    <div>
      <Link href="/">
        <a className=" inline-flex items-center justify-center ">
          <div>
          <img className=" w-[35px] h-[32px] md:w-[40px] md:h-[35px] lg:w-[45px] lg:h-[40px]" alt="logo" src="./Assets/logo.png"/>
          </div>
        <div className=" ml-1 text-white">
          <div  className=" font-normal text-2xl leading-0 tracking-wider w-fit">
           Smartcity
          </div>
            <div className="text-[12px] font-sans font-light text-[#D0DCFC]">
            {footer}
          </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Logo