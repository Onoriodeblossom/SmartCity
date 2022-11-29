import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Li, Nav } from "../styles";
import Logo from "../Logo";

const NavBar2 = () => {
  const { pathname } = useRouter();

  const route = (path: any) => {
    const routeStyle = "border-b-[3px] border-solid border-[#F28E13]";
    if (pathname === path) {
      return routeStyle;
    }
  };

  return (
    <Nav>
      <div>
        <Logo footer />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center mr-4">
      
   
        <button className=" bg-white text-[#2131C2] px-3 py-2 rounded-sm font-normal text-sm md:text-md lg:text-lg">
            <Link href="/signup ">
              <a>SIGN UP</a>
            </Link>
          </button>
        </ul>
        <div>
          <button className=" bg-white text-[#2131C2] px-3 py-2 rounded-sm font-normal text-sm md:text-md lg:text-lg">
            <Link href="/login ">
              <a>LOGIN</a>
            </Link>
          </button>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar2;
