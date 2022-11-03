import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import TableRow from "../components/roommates";
import { table } from "../const/table";
import { Checkbox } from "@mui/material";


const Hostel :React.FC = () =>{
    // const [becomeContact, setBecomeContant] = useState(false);
    return(
        <Layout footer>
            <HeroSection>
            <div className=' absolute left-[50%] top-[40%] md:top-[30%] xl:top-[45%] transform translate-x-[-50%] translate-y-[-50%] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-center'>
            <h1 className='text-[27px] sm:text-[35px] md:text-[40px] xl:text-[55px] lg:text-[42px] text-white font-semibold'>Contact Us</h1>
            {/* <div>Contact us for help</div> */}
            </div> 

            </HeroSection>

            <div className="right w-[100%]  lg:w-[50%] xl:w-[40%] flex 
          flex-col  justify-between">

            </div>

        </Layout>
        
    )
}

export default Hostel;