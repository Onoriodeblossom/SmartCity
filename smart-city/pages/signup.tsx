import Head from 'next/head'
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { FormGroup, FormControlLabel, Checkbox, CircularProgress } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ErrorMessage from '../components/ErrorMessage'


interface Props {
  siteTitle?: string
}

const Signup:React.FC<Props> = ({siteTitle}) => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);


const label = () => {
  return(
    <div className='text-sm'>
     By creating an account, you confirm that you accept Smart city <a
     className='text-blue-500 hover:text-blue-700'
      href='#'>Terms and Condition</a> and <a
      className='text-blue-500 hover:text-blue-700' href='#'> Privacy Policy</a>
    </div>

  )
}
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    // if(password.length < 6) {
    //   setError(' Password must be at least 6 characters long');
    // }
    
    console.log('submit')
  };



  return(
    <div>
      <Head>
        <title>Smart-city</title>
				<link rel="icon" href = "Assets/logo.png" />
				<meta name="smart-city" content="A product by Evergreen" />
				<title>{siteTitle? siteTitle: 'Smart-city'}</title>
			</Head>
			<main>
       <div className="md:bg-[url('/Assets/background1.png')] sm:fixed w-full h-full">
         <div className="welcome_div py-7 w-full bg-white  md:w-4/5 lg:w-3/4 sm:absolute left-[50%] top-[50%] sm:transform sm:translate-x-[-50%] sm:translate-y-[-50%]">
            <div className="content w-[90%] md:w-2/3 lg:w-3/5 mx-auto">
              <header className='text-center'>
                <h2 className=' text-xl md:text-2xl lg:text-3xl font-bold tracking-wider '>Create a free account</h2>
                <p className='my-3 sm:text-sm lg:text-md'>Join our amazing clients in getting good and clean accommodation at affordable rates and enjoy our great hospitality</p>
              </header>
              
              <form onSubmit={handleSubmit} className='mt-5'>
              <ErrorMessage message = "Password must be at least 6 characters long"/>
                <div className="email mb-3 mt-4">
                   <label 
                   htmlFor="name"
                   className="text-md text-[#0D1E07]font-normal">Full Name</label><br/>
                   <input 
                   className='outline outline-1 outline-[#808080] w-full mt-2  px-4 py-[0.5em] rounded-sm ' 
                   type='text'
                   placeholder='Enter your full name' 
                   required/>
                 </div>
                  <div className="email mb-3 mt-4">
                   <label 
                   htmlFor="email"
                   className="text-md text-[#0D1E07]font-normal">Email Address</label><br/>
                   <input 
                   className='outline outline-1 outline-[#808080] w-full mt-2  px-4 py-[0.5em] rounded-sm ' 
                   type='email'
                   placeholder='Enter your email address' 
                   required/>
                 </div>
                 <div className="password mb-3">
                  <label 
                   htmlFor="password"
                   className=" text-md text-[#0D1E07]font-normal">Create Password</label><br/>
                  <div className=' relative outline outline-1 outline-[#808080]  mt-2  px-4 py-[0.5em] rounded-sm '>
                    <input 
                     className='w-[90%] outline-none' 
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password'
                    required/>
                    <span 
                     onClick={() => setShowPassword(!showPassword)}
                    className=' cursor-pointer absolute right-4 '>
                      {!showPassword? <VisibilityOutlinedIcon
                      style={{color: '#808080'}}
                      /> : <VisibilityOffOutlinedIcon style={{color: '#808080'}}/>}
                    </span>
                  </div> 
                </div>

                <div className="password mb-3">
                  <label 
                   htmlFor=" confirm password"
                   className=" text-md text-[#0D1E07]font-normal">Confirm Password</label><br/>
                  <div className=' relative outline outline-1 outline-[#808080]  mt-2  px-4 py-[0.5em] rounded-sm '>
                    <input 
                    
                     className='w-[90%] outline-none' 
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Enter your password'
                    required/>
                    <span 
                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className=' cursor-pointer absolute right-4 '>
                      {!showConfirmPassword? <VisibilityOutlinedIcon
                      style={{color: '#808080'}}/> : <VisibilityOffOutlinedIcon 
                      style={{color: '#808080'}}/>}
                    </span>
                  </div> 
                </div>
                <div className="terms and condition w-full xs:w-fit  ">
                  <FormControlLabel 
                  disableTypography = {true}
                  sx={{
                    fontSize: 15,
                  }}
                  
                  control={<Checkbox
                  onChange={() => setAcceptTerms(!acceptTerms)}
                  size='small'
                  />} label= {label()}/>
                </div>
                 <div className="button text-center mt-10 lg:mt-12">
                   <button 
                   disabled={!acceptTerms}
                   className={`bg-[#2131C2] text-white font-medium text-sm  sm:text-md py-[0.5em] px-[5em] rounded-md hover:bg-blue-800 ${!acceptTerms? 'opacity-60 cursor-not-allowed' : ''}`} type='submit'> {loading? <CircularProgress 
                   size={20} color = "inherit" />: 'Create Account' }</button>
                   <div className='text-sm lg:text-md mt-2'>External user? <Link href={'/login'}>
                   <a className='text-blue-600 hover:underline'>Login</a></Link></div>
                 </div>
              </form>
            </div>
         </div>
       </div>
			</main>
    </div>
  )
};

export default Signup;

