import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Logo from '../Logo';
import { Li, Nav } from '../styles';


const MobileNavbar = () => {
   const [visible, setVisible] = useState(false)

  return (
    <Nav>
      <div>
        <Logo
        footer/>
      </div>
      <div> 
        <MenuOutlinedIcon 
        onClick = {() => {
          setVisible(!visible)
        }}
        className = 'cursor-pointer text-white text-[35px] hover:text-gray-200'
        />
      </div> 
      {visible &&  <div className='mobile fixed z-10 top-0 right-0 bg-gradient-to-r from-[#101861] to-[#2131C2] w-2/3 h-full '>
         <aside>
          <div className="header  py-4 px-3 relative w-full flex justify-between">
          {/* <Logo
          footer/> */}
          <div></div>
          <CloseOutlinedIcon
          onClick = {() => {
            setVisible(false)
          }}
          className='text-white cursor-pointer text-[35px]'
          />
           </div>
          <div className="list mt-[3em] mx-4">
            <ul>
            <li className='my-3 text-white text-lg'>
              <Link href="/">
                <a>Home</a>
              </Link>   
            </li>
            <li className='my-3 text-white text-lg'>  
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className='my-3 text-white text-lg'>  
              <Link href="/hostel">
                <a>Hostels</a>
              </Link>
            </li>
            <li className='my-3 text-white text-lg'>  
              <Link href="/rommates">
                <a>Room mates</a>
              </Link>
            </li>
            <li className='my-3 text-white text-lg'>  
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
            </ul>
              <button className = ' bg-white text-[#2131C2] px-3 py-2 rounded-sm font-normal text-sm md:text-md lg:text-lg'>
                <Link href="/post ">
                  <a>Post Hostel</a>
                </Link>
              </button>
          </div>
         </aside>
       </div>}  
    </Nav>
  )
}

export default MobileNavbar



{/* <button className = ' bg-white text-[#2131C2] px-3 py-2 rounded-sm font-normal text-sm md:text-md lg:text-lg'>
          <Link href="/post ">
            <a>Post Hostel</a>
          </Link>
        </button> */}