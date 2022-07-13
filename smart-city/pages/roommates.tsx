import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import TableRow from "../components/roommates";
import { table } from "../const/table";
import { Checkbox } from "@mui/material";



const Roommates:React.FC = () => {
  const [becomeRoommate, setBecomeRoommate] = useState(false);

  return(
    <Layout footer>
    <>
      <section className='hero_section  relative'>
        <HeroSection>
          <div className=' absolute left-[50%] top-[50%] md:top-[40%] xl:top-[45%] transform translate-x-[-50%] translate-y-[-50%] w-[100%] text-center text-white'>
            <h1 className='text-[25px] sm:text-[35px] md:text-[40px] xl:text-[52px] lg:text-[42px]  font-semibold'>Desperately in need of a roommate?</h1>
            <p className="text-[15px] my-2 md:text-lg lg:text-xl xl:text-2xl mx-auto w-[80%]">We have you connect to trusted, reliable and loving roommate</p>
            <form>
              <div className="flex w-[60%] lg:w-[40%] xl:w-[30%] mx-auto items-center justify-between flex-wrap mt-6 lg:mt-[3em]">
                <input type="text" className=" px-3 sm:px-4 py-1 sm:py-2 xl:py-3  text-white w-[90%] mx-auto sm:mx-0 sm:w-[75%]  bg-transparent border border-white border-solid  rounded-[3px] placeholder-white" placeholder="Search here" />
                <button className="
                px-3 sm:px-4 py-1 sm:py-2 text-center text-[#1c214e] bg-white rounded-[3px] mx-auto sm:mx-0 w-[60%] mt-3 sm:mt-0 sm:w-[20%] xl:py-3">Search</button>      
              </div>
            </form>
          </div> 
        </HeroSection>  
      </section> 
      <section className="table_div px-6 lg:px-[3em] my-9 lg:my-[3em] font-sans ">
        <div className="top flex items-center justify-between">
          <div className="head">
           <h1 className="font-bold text-md lg:text-lg xl:text-xl tracking-wide">Available Roomie</h1>
          </div>
          <div className="sort-filter flex">
             <div className=" mr-2 sm:mr-4 md:mr-5  sort flex items-center">
                <img style={{width:'17px', height: '17px'}} src="/Assets/sort.png" alt="sort"/>
                <span className="text-[14px] font-bold text-[#4B506D] ml-2">Sort</span>
             </div>
             <div className=" ml-2 sm:ml-4 md:ml-5 filter flex items-center">
             <img style={{width:'17px', height: '17px'}} src="/Assets/filter.png" alt="filter"/>
                <span className="text-[14px] font-bold text-[#4B506D] ml-2">Filter</span>
             </div>
          </div>
        </div>
        <div className=" w-full block overflow-x-auto">
        <table className="">
          <thead className="text-left">
            <tr>
              <th>Rommie Bio</th>
              <th>Contact Info</th>
              <th>Address</th>
              <th>Date</th>
              <th>Action</th>
              <th>Hosting</th>
            </tr>
          </thead>
          <tbody className="font-semibold">
            {table?.map((item, index) => {
              return <TableRow
               key={index} 
               {...item} 
               />
            }
            )}
          </tbody>
        </table>
        </div>
        <div className="view_all text-center mt-[1rem]">
          <button className="text-center text-[#2131C2] border border-solid border-[#2131C2] rounded-md px-[1em] py-1 md:px-[2em]  lg:px-[3em] md:py-2 hover:bg-[#f4f5ff] hover:text-[#2131C2] text-sm md:text-md">View All</button>
        </div>
      </section>
      <section className="text-white">
        <div className=' bg-[#2131C2] mt-8 mb-4 flex items-center justify-center flex-col py-6 lg:py-[3em] text-center'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide my-2'>Desired Roommate not found ?</h1>
          <p className='my-1 md:my-2 lg:text-lg'>We help you connect to trusted, reliable and loving roommate</p>
            <button 
            onClick={() => setBecomeRoommate(true)}
            className='my-4 md:my-5 w-fit text-sm md:text-md  py-2 sm:py-3 px-4 lg:px-5 border border-white border-solid rounded-sm hover:text-gray-300 hover:border-gray-300'>Fill a form </button>
          </div>
      </section>
      { becomeRoommate && <section className="my-[3em]">
         <div className="rommate_form px-4 w-full sm:w-[70%] sm:px-0 mx-auto md:[50%] lg:w-[50%] xl:w-[35%]">
             <h1 className="font-bold text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">Become a roomie</h1>
             <form>
               <div className="upload_roomate w-fit my-3 md:my-5 mx-auto">
                <div className="image border-[3px] border-[#DFE0EB] border-solid  rounded-full text-center w-[70px] md:w-fit my-3 mx-auto">
                <img 
                  src='/Assets/upload.png' 
                  alt='user'
                  width={100} 
                  height={100}
                  className="rounded-full p-[0.3em]  "  
                  />
                </div>
                <button className="bg-[#2131C2] text-white text-sm py-1 px-3 md:text-md md:py-2 md:px-4 rounded-md "><span>Upload</span><span className="hidden md:inline"> new avatar </span></button>
               </div>
               <div className="name my-2">
                  <label htmlFor="name" className="text-sm md:text-md text-[#0D1E07]"> Name</label>
                  <input 
                  type="text" 
                  className="px-3 text-sm  my-1 outline-none sm:px-4 py-1 sm:py-2 text-[#808080] w-[100%]   bg-transparent border border-[#808080] border-solid  rounded-[3px] placeholder-[#808080]" placeholder="Enter Name" 
                  aria-label="Enter Name"
                  name="name"
                  autoComplete="off"
                  required
                  />
               </div>
               <div className="hostel_location my-2">
                  <label htmlFor="hostelLocation" className="text-sm md:text-md text-[#0D1E07]">Hostel Location</label>
                  <input
                  type="text"
                  className="px-3 text-sm outline-none my-1 sm:px-4 py-1 sm:py-2 text-[#808080] w-[100%]   bg-transparent border border-[#808080] border-solid  rounded-[3px] placeholder-[#808080]" placeholder="Enter Hostel Location"
                  aria-label="Enter Hostel Location"
                  name="hostelLocation"
                  autoComplete="off"
                  required
                  />
               </div>
               <div className="gender my-2">
               <label htmlFor="gender" className="text-sm md:text-md  text-[#0D1E07]">Gender</label>
                  <input
                  type="text"
                  className=" text-sm px-3 outline-none my-1 sm:px-4 py-1 sm:py-2 text-[#808080] w-[100%]   bg-transparent border border-[#808080] border-solid  rounded-[3px] placeholder-[#808080]" placeholder="Female"
                  aria-label="Gender"
                  name="gender"
                  autoComplete="off"
                  required
                  />
               </div>
               <div className="phone_number my-2">
                <label 
                htmlFor="PhoneNumber"
                className="text-sm md:text-md text-[#0D1E07]">Phone Number</label><br/>
                <input 
                className=' text-sm px-3 my-1 outline-none sm:px-4 py-1 sm:py-2 text-[#808080] w-[100%]   bg-transparent border border-[#808080] border-solid  rounded-[3px] placeholder-[#808080]' 
                type='number'
                placeholder='+234' 
                aria-label="Phone Number"
                aria-describedby="PhoneNumber-helper-text"
                name="PhoneNumber"
                autoComplete="off"
                required/>
              </div>
              <div className=" room_details my-5">
                <p className="text-sm md:text-md text-[#0D1E07]">Room Details</p>
                <div className=" flex items-center justify-between border border-[#808080] border-solid rounded-md pl-3  my-[0.5em]">
                    <label htmlFor="roomDetails" className="label text-sm  sm:text-md text-#333333">
                    Are you open to hosting someone?
                    </label>
                    <Checkbox 
                    name="roomDetails" />
                </div>
              </div>
              <div className="description">
                <label htmlFor="description" className="text-sm md:text-md text-[#0D1E07]">Description</label>
                <textarea
                className=" text-sm px-3 outline-none my-1 sm:px-4 py-1 sm:py-2 text-[#808080] w-[100%]   bg-transparent border border-[#808080] border-solid h-[150px] resize-none  rounded-[3px] placeholder-[#808080]" placeholder="Enter Short details about yourself"
                aria-label="Enter Description"
                name="description"
                autoComplete="off"
                required
                />
              </div>
              <div className="button flex items-center justify-between w-full my-8">
                <button type="submit" className=" text-white text-sm py-1 px-3 md:text-md md:py-2 md:px-4 rounded-md w-[40%] bg-gradient-to-r  from-[#101861] to-[#2131C2] ">Upload</button>
                <button 
                onClick={() => setBecomeRoommate(false)}
                type="button" className="text-sm py-1 px-3 md:text-md md:py-2 md:px-4 rounded-md border border-[#2131C2] border-solid w-[40%] text-[#2131C2]">
                    Cancel
                </button>
              </div>
             </form>
         </div>
      </section>
}
    </>
  </Layout>
  )
}

export default Roommates;