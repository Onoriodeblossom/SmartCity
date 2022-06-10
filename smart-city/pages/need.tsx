import {useState} from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { FormGroup, FormControlLabel, Checkbox, FormControl,FormLabel, FormHelperText, MenuItem} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SelectOption from "../components/Select";


const Need = () => {
  return(
    <Layout>
    <div className="md:bg-[url('/Assets/background1.png')] py-4 w-full h-full">
      <div className="welcome_div py-7 w-full bg-white md:w-4/5 lg:w-3/4 xl:w-[60%] mx-auto">
          <div className="content w-[90%] md:w-2/3 lg:w-3/5 mx-auto">
            <header className='text-center'>
              <h2 className=' text-xl md:text-2xl lg:text-3xl font-bold tracking-wide '>In need of an accommodation?</h2>
              <p className='my-2 text-[#0D1E07] sm:text-sm lg:text-md'>Kindly fill in the following to enable your search</p>
            </header>
            <form className='my-7'>
              <div className="budget mb-3 mt-4">
                <label 
                htmlFor="budget"
                className="text-md text-[#0D1E07]font-normal">Budget</label><br/>
                <input 
                className='outline outline-1 outline-[#808080] w-full mt-2  px-4 py-[0.3em] md:py-[0.5em] rounded-sm ' 
                type='text'
                placeholder='Enter your budget range' 
                aria-label="Budget"
                aria-describedby="budget-helper-text"
                name="budget"
                required/>
              </div>
               <div className="location">
                 <label>Location</label>
                 <div className="flex flex-wrap items-center sm:justify-between my-[0.2em]">
                   <SelectOption
                    firstOption={'Country'}
                   />
                   <SelectOption
                    firstOption={'State'}
                   />
                   <SelectOption
                    firstOption={'City'}
                   />
                   <SelectOption
                    firstOption={'Community'}
                   />
                   <SelectOption
                    firstOption={'Street'}
                   />
                 </div>
               </div>
              <div className=" room_details my-5">
                <p>Room Details</p>
                <div className=" flex items-center justify-between border border-[#808080] border-solid rounded-md pl-3  my-[0.5em]">
                    <label htmlFor="roomDetails" className="label text-gray-400">
                    Tiled
                    </label>
                    <Checkbox 
                    name="roomDetails" />
                </div>
              </div>
              <div className="house_type mb-3 mt-4">
                <label 
                htmlFor="houseType"
                className="text-md text-[#0D1E07]font-normal">House Type</label><br/>
                <input 
                className='outline outline-1 outline-[#808080] w-full mt-2  px-4 py-[0.3em] md:py-[0.5em] rounded-sm ' 
                type='text'
                placeholder='Enter house type e.g Bungalow' 
                aria-label="House Type"
                aria-describedby="houseType-helper-text"
                name="houseType"
                autoComplete="off"
                required/>
              </div>

              <div className="numbers mb-3 mt-4">
                <label 
                htmlFor="numberOfPersons"
                className="text-md text-[#0D1E07]font-normal">Number of persons</label><br/>
                <input 
                className='outline outline-1 outline-[#808080] w-full mt-2  px-4 py-[0.3em] md:py-[0.5em] rounded-sm ' 
                type='text'
                placeholder='3 people' 
                aria-label="Number of persons"
                aria-describedby="numberOfPersons-helper-text"
                name="numberOfPersons"
                autoComplete="off"
                required/>
              </div>

              <div className="occupation_gender flex items-center justify-between flex-wrap">
                <div className="occupation w-full md:w-[45%] mb-3 mt-4">
                  <label 
                  htmlFor="occupation"
                  className="text-md text-[#0D1E07]font-normal">Occupation</label><br/>
                  <input 
                  className='outline outline-1 outline-[#808080] w-full mt-2  px-4 py-[0.3em] md:py-[0.5em] rounded-sm ' 
                  type='text'
                  placeholder='student' 
                  aria-label="Occupation"
                  aria-describedby="occupation-helper-text"
                  name="occupation"
                  autoComplete="off"
                  required/>
                </div>
                <div className="gender w-full md:w-[45%] mb-3 mt-4">
                  <label 
                  htmlFor="gender"
                  className="text-md text-[#0D1E07]font-normal">Gender</label><br/>
                  <input 
                  className='outline outline-1 outline-[#808080] w-full mt-2  px-4 py-[0.3em] md:py-[0.5em] rounded-sm ' 
                  type='text'
                  placeholder='Female' 
                  aria-label="gender"
                  aria-describedby="gender-helper-text"
                  name="gender"
                  autoComplete="off"
                  required/>
                </div>
              </div>
              <div className="phone_number mb-3 mt-4">
                <label 
                htmlFor="PhoneNumber"
                className="text-md text-[#0D1E07]font-normal">Phone Number</label><br/>
                <input 
                className='outline outline-1 outline-[#808080] w-full mt-2  px-4 py-[0.3em] md:py-[0.5em] rounded-sm ' 
                type='number'
                placeholder='+234' 
                aria-label="Phone Number"
                aria-describedby="PhoneNumber-helper-text"
                name="PhoneNumber"
                autoComplete="off"
                required/>
              </div>

              <div className="button flex items center justify-between my-9 text-sm sm:text-md flex-wrap">
                <Link href="#">
                    <button className="w-full sm:w-[40%] border border-[#2131C2] border-solid rounded-md  py-2 text-[#2131C2] hover:bg-blue-50">
                      Skip
                    </button>
                  </Link>
                  <Link href="#">
                    <button type="submit" className=" w-full sm:w-[40%]  rounded-md  py-2 my-3 sm:my-0 bg-[#2131C2] text-white">
                      Continue Search
                    </button>
                  </Link>
              </div>
            </form>
          </div>
      </div>
    </div>
  </Layout>   
  )
}

export default Need;