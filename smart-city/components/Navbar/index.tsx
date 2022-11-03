import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Li, Nav } from '../styles';
import Logo from '../Logo';


const NavBar:React.FC = () => {
 const {pathname} = useRouter();
  
 const  route = (path:any) => {
   const routeStyle = 'border-b-[3px] border-solid border-[#F28E13]'
   if(pathname === path){
     return routeStyle
   }
 }



  return(
    <Nav>
      <div>
        <Logo
         footer/>
      </div>
      <div className='flex items-center'> 
        <ul className='flex items-center mr-4'>
          <Li className = {route('/')}>
            <Link href="/">
              <a>Home</a>
            </Link>   
          </Li>
          <Li className = {route('/about')}>  
            <Link href="/about">
              <a>About</a>
            </Link>
          </Li>
          <Li>
            <Link href="/about">
              <a>Hostel</a>
            </Link>
          </Li>
          <Li className = {route('/roommates')}>
            <Link href="/roommates">
              <a>Room mates</a>
            </Link>
          </Li>
          <Li className = {route('/contact')}>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </Li>
          {/* <Li>
            <Link href="/contact-us">
              <a>Contact Us</a>
            </Link>
          </Li> */}
        </ul>
        <div>
        <button className = ' bg-white text-[#2131C2] px-3 py-2 rounded-sm font-normal text-sm md:text-md lg:text-lg'>
          <Link href="/post ">
            <a>Post Hostel</a>
          </Link>
        </button>
      </div> 
      </div>
       
    </Nav>
  )
}

export default NavBar