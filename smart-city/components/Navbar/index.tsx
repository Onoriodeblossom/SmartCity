import { Li, Nav } from '../styles'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../Logo'


const NavBar:React.FC = () => {
  return(
    <Nav>
      <div>
        <Logo
         footer/>
      </div>
      <div> 
        <ul className='flex items-center'>
          <Li>
            <Link href="/">
              <a>Home</a>
            </Link>   
          </Li>
          <Li>  
            <Link href="/about">
              <a>About</a>
            </Link>
          </Li>
          <Li>
            <Link href="/hostel">
              <a>Hostel</a>
            </Link>
          </Li>
          <Li>
            <Link href="/roommates">
              <a>Room mates</a>
            </Link>
          </Li>
          <Li>
            <Link href="/contact-us">
              <a>Contact Us</a>
            </Link>
          </Li>
        </ul>
      </div>
      <div>
        <button className = ' bg-white text-[#2131C2] px-3 py-2 rounded-sm font-normal text-sm md:text-md lg:text-lg'>
          <Link href="/post ">
            <a>Post Hostel</a>
          </Link>
        </button>
      </div>  
    </Nav>
  )
}

export default NavBar