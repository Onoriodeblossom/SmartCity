import Link from "next/link";
import Logo from "./Logo";
import { FooterDiv } from './styles'

const Footer:React.FC = () =>{
   return(
    <FooterDiv>
      <div className="upper-footer bg-[#2131C2] text-white flex flex-wrap px-5 py-4 justify-between">
        <div className="logo_details w-full md:w-fit min-w-[150px]">
          <Logo
          footer ="Trust and simplicity"
          />
          <div className="socials flex items-center  mt-5">
            <a href="#" title="Linkedln ">
              <img className="mr-5 w-[17px]" src="Assets/Linkedln.png" alt="linkedin" />
            </a>
            <a href="#" title="Twitter">
              <img  className="mr-5 w-[18px]" src="Assets/Twitter.png" alt="twitter" />
            </a>
            <a href="#" title="Facebook">
              <img className="mr-5 w-[10px]" src="Assets/Facebook.png" alt="facebook" />
            </a>
            <a href="#" title="Instagram">
              <img className="mr-5 w-[16px]" src="Assets/Instagram.png" alt="instagram" />
            </a> 
          </div>
        </div>
        <div className="company text-[17px] w-full md:w-fit mt-10 md:mt-0 min-w-[150px]">
          <p  className="font-[600] text-[18px] lg:text-[22px]">Company</p>
          <ul className="text-[#D0DCFC]">
          <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>About Us</a>
              </Link>
            </li>
            <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>Hostels</a>
              </Link>
            </li>
            <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>Roomies</a>
              </Link>
            </li>
            <li className="text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>Locations</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="legal text-[17px] w-full md:w-fit mt-5 md:mt-0 min-w-[150px]">
        <p  className="font-[600] text-[18px] lg:text-[22px]">Legal</p>
          <ul className="text-[#D0DCFC]">
          <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>Terms and conditions</a>
              </Link>
            </li>
            <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>Cookies policy</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="learn text-[17px] w-full md:w-fit mt-5 md:mt-0 min-w-[150px]">
        <p  className="font-[600] text-[18px] lg:text-[22px]">Learn</p>
          <ul className="text-[#D0DCFC]">
          <li className="my-3  text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>Blog</a>
              </Link>
            </li>
            <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>FAQ</a>
              </Link>
            </li>
            <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>Help Center</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact text-[17px] w-full md:w-fit mt-5 md:mt-0 min-w-[150px]">
        <p  className="font-[600] text-[18px] lg:text-[22px]">Contact</p>
          <ul className="text-[#D0DCFC]">
          <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>Smartcity@gmail.com</a>
              </Link>
            </li>
            <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>support@smartcity.com</a>
              </Link>
            </li>
            <li className="my-3 text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>+234802333785</a>
              </Link>
            </li>
            <li className="text-[15px] sm:text-[17px] ">
              <Link href="#">
                <a>54, Alimosho LGA Lagos Nigeria</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lower-footer text-[#333333] text-md md:text-lg text-center py-3">
        All right reversed ©  Smartcity 2022
      </div>
    </FooterDiv>
   )
}
export default Footer;