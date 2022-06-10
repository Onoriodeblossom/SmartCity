import {useState} from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import {  Checkbox} from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';



const Request:React.FC = () => {
  const [label, setLabel] = useState('Others');
  const [openSelect, setOpenSelect] = useState(false);

  const handleChange = (event:any) => {
    setLabel(event.target.textContent);
    setOpenSelect(false);
    console.log(event.target.textContent);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  }

	return(
		<Layout>
       <div className="md:bg-[url('/Assets/background1.png')] sm:fixed w-full h-full">
         <div className="welcome_div py-7 w-full bg-white  md:w-4/5 lg:w-3/4 xl:w-[60%] sm:absolute left-[50%] top-[40%] sm:transform sm:translate-x-[-50%] sm:translate-y-[-50%]">
            <div className="content w-[90%] md:w-2/3 lg:w-3/5 mx-auto">
              <header className='text-center'>
                <h2 className=' text-xl md:text-2xl lg:text-3xl font-bold tracking-wide '>Hey dear, what do you want?</h2>
                <p className='my-3 text-[#0D1E07] sm:text-sm lg:text-md'>Welcome back please enter your details</p>
              </header>
              <form onSubmit={handleSubmit} className='my-14'>
                <div className="have_accommodation flex items-center justify-between border border-[#808080] border-solid rounded-md pl-3  my-4  ">
                  <label htmlFor="haveAccommodation" className="label">
                  I have an accomodation
                  </label>
                  <Checkbox 
                  name="haveAccommodation" />
                </div>

                <div className="have_accommodation flex items-center justify-between border border-[#808080] border-solid  rounded-md pl-3  my-6  ">
                     <label htmlFor="needAccommodation" className="label">
                      I need accomodation
                     </label>
                    <Checkbox 
                    name="needAccommodation" 
                     />
                </div>
                 
                 <div className="others relative">
                  <div className=" flex items-center justify-between border border-[#808080] border-solid  rounded-md py-2 px-3  ">
                  <div className="label">
                    {label}
                  </div>
                  <div 
                  onClick={() => setOpenSelect(!openSelect)}
                  className="icon border border-solid border-[#2131C2] cursor-pointer h-fit w-fit">
                    {openSelect ? <KeyboardArrowUpOutlinedIcon
                     className="text-[#2131C2] text-md "
                    /> : <KeyboardArrowDownOutlinedIcon
                    className="text-[#2131C2] text-md "
                    />} 
                  </div>
                  </div>
                  {openSelect && 
                   <div className="drop-down bg-[#2131C2] text-white w-[120px] rounded-lg absolute top-[-1] right-0 transition ease-in-out  duration-1000">
                   <ul className="transition ease-in-out  duration-1000">
                     <li 
                     onClick={handleChange}
                     className="border-b border-white border-solid p-2 cursor-pointer hover:bg-blue-900 rounded-t-lg  ">Roommates</li>
                     <li 
                     onClick={handleChange}
                     className="border-b border-white border-solid p-2 cursor-pointer hover:bg-blue-900">Host</li>
                     <li 
                     onClick={handleChange}
                     className="p-2 cursor-pointer hover:bg-blue-900 rounded-b-lg">Sell</li>
                   </ul>
                </div>
               }
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

export default Request;