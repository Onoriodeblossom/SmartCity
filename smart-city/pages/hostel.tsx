import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import TableRow from "../components/roommates";
import { table } from "../const/table";
import { Checkbox } from "@mui/material";
import HeroOption from "../components/view/HeroOption";
import { Article, H1 } from "../components/styles";
import HostelCard from "../components/hostelCard/hotelCard";
import { Flex } from "../components/hostelCard/styles";
import LodgeCard from "../components/lodgeCard/lodgeCard";
import { MainContext } from "./_app";
import {RoundButton} from "../components/roundButton/roundButton"

const Hostel = () => {
  const CTX = useContext(MainContext);
  const [loading, setLoading] = useState(false);

  const getAllHostel = async () => {
    setLoading(true);
    try {
      const fetched = await fetch(`${CTX.url}accomodations`, {
        method: "GET",
        credentials: "include",
        // mode: "no-cors",
        headers: { "Content-Type": "application/json" },
      });
      const jsoned = await fetched.json();

      setLoading(false);
      console.log("jsoned HERE!!! ====> ");
      console.log("jsoned HERE!!! ====> ");
      console.log("jsoned HERE!!! ====> ");
      console.log("jsoned HERE!!! ====> ");
      console.log("jsoned HERE!!! ====> ");
      console.log("jsoned HERE!!! ====> ", jsoned);
      console.log("jsoned HERE!!! ====> ");
      console.log("jsoned HERE!!! ====> ");
      console.log("jsoned HERE!!! ====> ");
      console.log("jsoned HERE!!! ====> ");
    } catch (error) {
      setLoading(false);
      console.log("error ==> ", error);
    }
  };

  useEffect(() => {
    getAllHostel();
  }, []);

  const hostel = [
    {
      image: "/Assets/Agent.png",
    },
    {
      image: "/Assets/Agent.png",
    },
    {
      image: "/Assets/Agent.png",
    },
    {
      image: "/Assets/Agent.png",
    },
    {
      image: "/Assets/Agent.png",
    },
    {
      image: "/Assets/Agent.png",
    },
    {
      image: "/Assets/Agent.png",
    },
    {
      image: "/Assets/Agent.png",
    },
    
  ] 
    // const [becomeContact, setBecomeContant] = useState(false);
    return(
        <div>
        <Head>
          <title>Smart-city</title>
          <meta name="description" content="A Smart city project" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <Layout footer>
          <section className='hero_section  relative'>
          <HeroSection>
            <div className=' absolute left-[50%] top-[50%] md:top-[40%] xl:top-[45%] transform translate-x-[-50%] translate-y-[-50%] w-[100%] text-center text-white'>
              <h1 className='text-[25px] sm:text-[35px] md:text-[40px] xl:text-[52px] lg:text-[42px]  font-semibold'>Smart city</h1>
              <p className="text-[15px] my-2 md:text-lg lg:text-xl xl:text-2xl mx-auto w-[80%]">Tired of hostel hunting? we are here to ease your stress with our numerous hostel offers</p>
              <form
                className="bg-[#302121] w-[90%] md:w-[80%] opacity-80  mx-auto my-[4em] py-6 px-5"
              >
                <p className="text-[#BDBDBD]">Pay only #2000 to unlock 1 hostel location and only #10,000 to unlock 6 different locations</p>
                <div className="flex  mx-auto items-center justify-between flex-wrap my-4 lg:my-[2em]">
                  <div className="search-input">
                    <input type="text" className=" px-3 sm:px-4 py-1 lg:py-2 xl:py-3  text-white  mx-auto sm:mx-0   bg-transparent border border-white border-solid  rounded-[3px] placeholder-[#BDBDBD]" placeholder="Search Hostel" 
                    required
                    />
                  </div>
                  <button className="
                    px-3 sm:px-4 py-1 text-center text-[#1c214e] bg-white rounded-[3px] mx-auto sm:mx-0  mt-3 sm:mt-0  xl:py-3 xl:px-6">Search</button>
                  {/* <div className="room-type w-fit"> */}
                    <div style={{width:"50%", display:"flex", justifyContent:"space-around" }}>

                    <RoundButton text="Choose Room" number="1"/>
                 
                 <RoundButton text="Make Payment" number="2"/>
                  
                 <RoundButton text="Booking Comfirmation" number="3"/>
                    </div>
                    
              
                  {/* </div> */}
                  <div>
                  </div>   
                </div>
              </form>
            </div> 
          </HeroSection> 
        </section> 
        <div className=" h-[90px] lg:h-[100px]  bg-[#E5E5E5]">
        </div>
        <section 
        className="py-[3em] px-[2em] lg:px-[3em] lg:py-[4em]"
        >
          <Article>
              <H1>Explore Our Hostels by Rooms Types</H1>
            </Article>
            <Flex>
              {hostel.map((image) => (
                <HostelCard />
              ))}
            </Flex>
          </section>
          <section className="py-[3em] px-[2em] lg:px-[3em] lg:py-[4em]">
            <Article>
              <H1>Explore Our Hostels By Location</H1>
            </Article>
            <Flex>
              {hostel.map((image) => (
                <LodgeCard />
              ))}
            </Flex>
          </section>
          <section className="py-[3em] px-[2em] lg:px-[3em] lg:py-[4em]"></section>
        </Layout>
      </main>
    </div>
  );
};

export default Hostel;
