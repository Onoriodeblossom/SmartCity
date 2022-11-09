import React, {useState} from "react";
import Head from 'next/head';
import Image from 'next/image';
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import HeroOption from "../components/view/HeroOption";
import LoginPage from "./login";


 const Homes:React.FC = () => {
  return (

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
              <p className="text-[#BDBDBD]">Tip * All tenants get  to pay ony #10,000 2 days after packing in</p>
              <div className="flex  mx-auto items-center justify-between flex-wrap my-4 lg:my-[2em]">
                <div className="search-input">
                  <input type="text" className=" px-3 sm:px-4 py-1 lg:py-2 xl:py-3  text-white  mx-auto sm:mx-0   bg-transparent border border-white border-solid  rounded-[3px] placeholder-[#BDBDBD]" placeholder="Search Hostel" 
                  required
                  />
                </div>
                <div className="room-type w-fit">
                  <HeroOption
                    title="Room Type"
                    options={["Self contained","Shared", "Both"]}
                  />
                </div>
                <div className="Location w-fit">
                <HeroOption
                    title="Location"
                    options={["Ekosodin","BDPA", "osasogie"]}
                  />
                </div>
                <div className="price-range w-fit">
                <HeroOption
                  title="Price range"
                  options={["#150-200k", "#200k-300k", "#300k-500k"]}
                  />
                </div>
                <div>
                  <button className="
                    px-3 sm:px-4 py-1 text-center text-[#1c214e] bg-white rounded-[3px] mx-auto sm:mx-0  mt-3 sm:mt-0  xl:py-3 xl:px-6">Search</button>
                </div>   
              </div>
            </form>
          </div> 
        </HeroSection> 
        <div className="stat flex items-center justify-between bg-white shadow-xl absolute top-[92%] w-[70%] left-[15%] right-[15%] py-3 px-9">
          <div>
          <h1 className=" font-semibold text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px]">100+</h1>
          <p>Locations</p>
          </div>
          <div>
          <h1 className=" font-semibold text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px]">100+</h1>
          <p>Locations</p>
          </div>
          <div>
          <h1 className=" font-semibold text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px]">100+</h1>
          <p>Locations</p>
          </div> 
        </div> 
      </section> 
      <div className=" h-[90px] lg:h-[120px]  bg-[#E5E5E5]">
      </div>
      <section 
      className="py-[3em] px-[2em] lg:px-[3em] lg:py-[4em]"
      >
        <div className="flex justify-between flex-wrap">
          <div className="left w-[50%] mx-auto lg:mx-0  lg:w-[45%] xl:w-[35%] mb-6 lg:mb-0">
            <Image
              src="/Assets/video.png"
              alt="vid"
              width={550}
              height={700}
              quality={100}
            />
          </div>
          <div className="right w-[100%]  lg:w-[50%] xl:w-[40%] flex 
          flex-col  justify-between">
            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] xl:text-[32px] font-bold">
              This is who we are and what we do 
            </h1>
            <ul className="list-disc list-inside">
              <li>
                <span className="text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-semibold">Hostel Renting Services</span>
                  <p className="text-[14px] my-2 md:text-[15px] lg:text-[16px] xl:text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ullamcorper habitant mattis a malesuada vestibulum. Magna sit egestas accumsan sagittis. Morbi ictum.
               </p>
              </li>
              <li className="my-[2em]">
                <span className="text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-semibold">Post Hostel by Landlords/Agent/Occupants</span>
                <p className="text-[14px] my-2 md:text-[15px] lg:text-[16px] xl:text-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ullamcorper habitant mattis a malesuada vestibulum. Magna sit egestas accumsan sagittis. Morbi ictum.
                </p>
              </li>
              <li>
                <span className="text-[15px] md:text-[17px] lg:text-[17px] xl:text-[20px] font-semibold">Get Rommates To Pair With</span>
                <p className="text-[14px] my-2 md:text-[15px] lg:text-[16px] xl:text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ullamcorper habitant mattis a malesuada vestibulum. Magna sit egestas accumsan sagittis. Morbi ictum.
                </p>
              </li>
            </ul>
            <button
             className="bg-gradient-to-r from-[#101861] to-[#2131C2] rounded-sm text-sm lg:text-md py-2 px-4 text-white
             w-[250px] hover:bg-blue-500 hover:text-white" 
            >
              Play the video for more info
            </button>
          </div>
        </div>
      </section>
   
   

        </Layout> 
      </main>
    </div>
  )
}

export default Homes;
