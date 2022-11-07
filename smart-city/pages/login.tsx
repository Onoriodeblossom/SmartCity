import Head from "next/head";
import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ErrorMessage from "../components/ErrorMessage";
import { setEnvironmentData } from "worker_threads";

interface Props {
  siteTitle?: string;
}

const LoginPage: React.FC<Props> = ({ siteTitle }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message,setMessage] = useState()
  const [email, setEmail] =useState("")
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(email,password)
    setLoading(true);
  }

  
 

  return (
    <div>
      <Head>
        <title>Smart-city</title>
        <link rel="icon" href="Assets/logo.png" />
        <meta name="smart-city" content="A product by Evergreen" />
        <title>{siteTitle ? siteTitle : "Smart-city"}</title>
      </Head>
      <main>
        <div className="md:bg-[url('/Assets/background1.png')] sm:fixed w-full h-full">
          <div className="welcome_div py-9 pt-12 w-full bg-white  md:w-4/5 lg:w-3/4 xl:w-[60%] sm:absolute left-[50%] top-[50%] sm:transform sm:translate-x-[-50%] sm:translate-y-[-50%]">
            <div className="content w-[90%] md:w-2/3 lg:w-3/5 mx-auto">
              <header className="text-center">
                <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold tracking-wider ">
                  Welcome Back
                </h2>
                <p className="my-2 sm:text-md lg:text-lg">
                  Welcome back, please re-enter your details
                </p>
              </header>

              <form onSubmit={handleSubmit} className="mt-5">
                {/* <ErrorMessage message = 'Incorrect email or password. try again!'/> */}
                <div className="email mb-3 mt-4">
                  <label
                    htmlFor="email"
                    className="text-md text-[#0D1E07]font-normal"
                  >
                    Email Address
                  </label>
                  <br />
                  <input
                    className="outline outline-1 outline-[#808080] w-full mt-2  px-4 py-[0.5em] rounded-sm "
                    type="email"
                    value={email}
                    onChange={event=> setEmail(event.target.value)} 
                    
                    placeholder="Enter your email address"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="password mb-3">
                  <label
                    htmlFor="password"
                    className=" text-md text-[#0D1E07]font-normal"
                  >
                    Password
                  </label>
                  <br />
                  <div className=" relative outline outline-1 outline-[#808080]  mt-2  px-4 py-[0.5em] rounded-sm ">
                    <input
                      className="w-[90%] outline-none"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="off"
                      value={password} 
                      onChange={event=> setPassword(event.target.value)} 
                                        
                      // onChange={changeHandler}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className=" cursor-pointer absolute right-4 "
                    >
                      {!showPassword ? (
                        <VisibilityOutlinedIcon style={{ color: "#808080" }} />
                      ) : (
                        <VisibilityOffOutlinedIcon
                          style={{ color: "#808080" }}
                        />
                      )}
                    </span>
                  </div>
                </div>
                <div className="next flex flex-wrap xs:flex-nowrap items-center justify-between text-center">
                  <div className="remember_me w-full xs:w-fit  ">
                    <FormControlLabel
                      disableTypography={true}
                      sx={{
                        fontSize: 15,
                      }}
                      control={<Checkbox size="small" />}
                      label="Remember Me"
                    />
                  </div>
                  <div className="forgot_password w-full xs:w-fit mt-3 xs:mt-0">
                    <a
                      className="text-[#2131C2] font-sans hover:underline hover:text-blue-700"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="button text-center my-10 lg:my-14">
                  <button
                    className="bg-[#2131C2] text-white font-medium text-md py-[0.5em] px-[5em] rounded-md hover:bg-blue-800"
                    // type="submit"
                    onClick={()=>handleSubmit}
                  >
                    {" "}
                    {loading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      "Sign in"
                    )}
                  </button>
                  <div className="next flex flex-wrap xs:flex-nowrap mt-7 items-center justify-center text-center">
                    <div>Dont have an account?</div>
                    <div className="forgot_password w-full xs:w-fit mt-3 xs:mt-0">
                      <a
                        className="text-[#2131C2] font-sans hover:underline m-2 hover:text-blue-700"
                        href="#"
                      >
                        SignUp
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;

// import { ChakraProvider, Text, CircularProgress, Flex, Box, Heading, FormControl, FormLabel, Input,  Button, InputGroup, InputRightElement, Checkbox, CheckboxGroup, Icon } from '@chakra-ui/react'
// import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
// import ErrorMessage from '../components/ErrorMessage'

// const LoginPage:React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handlePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if(password.length < 6) {
//       setError(' Password must be at least 6 characters long');
//     }
//     //setError('Invalid email or password');

//     // setIsLoading(true);
//     //  try {
//     //    await userLogin({email, password});
//     //    dispatch(updateLoginState(true));
//     //   setIsLoading(false);
//     //   setShowPassword(false);
//     // } catch (error) {
//     //
//     //   setIsLoading(false);
//     //   setEmail('');
//     //   setPassword('');`
//     //   setShowPassword(false);
//     // }
//     console.log('submit')
//   };

//   return (
//     <div className=' sm:bg-blue-500 fixed top-0  bottom-0 left-0 right-0'>
//           <ChakraProvider>
//             <Flex py={3} position = 'absolute' top ={['50%']}  left = {'50%'} transform = {'translate(-50%, -50%)'} width={['100%', '90%','90%','70%','60%']} align="center" justifyContent="center" backgroundColor={'white'}   >
//               <Box p={[8]} width={["100%", "100%", "100%", "80%"]} maxWidth = '700px' >
//                 <Box textAlign="center">
//                   <Heading fontSize={['xl', '2xl', '3xl', '4xl']} letterSpacing = {2}>Welcome Back</Heading>
//                   <Text fontSize = 'md' mt={2} >Welcome back please re-enter your details</Text>
//                 </Box>
//                 <Box my={10} textAlign="left">
//                   <form onSubmit={handleSubmit}>
//                     {error && <ErrorMessage message={error} />}
//                     <FormControl isRequired>
//                       <FormLabel >
//                         <span className='font-normal text-md text-[ #0D1E07]'>
//                         Email Address
//                         </span>
//                         </FormLabel>
//                       <Input
//                       fontSize = {['sm', 'md']}
//                       onChange={event => setEmail(event.currentTarget.value)}
//                       borderColor={"#808080"} type="email" placeholder="Enter your email address"/>
//                     </FormControl>
//                     <FormControl mt={4} isRequired>
//                       <FormLabel>
//                       <span className='font-normal text-md text-[ #0D1E07]'>
//                         Password
//                       </span>
//                       </FormLabel>
//                       <InputGroup>
//                         <Input
//                         fontSize = {['sm', 'md']}
//                         onChange={event => setPassword(event.currentTarget.value)}
//                         borderColor={"#808080"} type= {showPassword ? 'text': 'password'} placeholder="Enter your password"/>
//                         <InputRightElement  width="3rem">
//                           <Button  h="1.5rem" size="sm" onClick=
//                             {handlePasswordVisibility}>
//                             {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
//                           </Button>
//                         </InputRightElement>
//                       </InputGroup>
//                     </FormControl>
//                     <div className='flex  flex-wrap align-center justify-between mt-6 mx-auto w-[65%] xs:w-full text-sm sm:text-md'>
//                       <Checkbox>
//                         <span className='font-normal text-sm sm:text-md text-[ #0D1E07]'>
//                         Remember me
//                         </span>
//                       </Checkbox>
//                       <a className='text-[#2131C2] mt-2 xs:mt-0' href='#'>Forgot Password?</a>
//                     </div>
//                     <div className='mx-auto w-[80%] sm:w-[40%] mt-10'>
//                       <Button color={'white'}  background={'#2131C2'}  _hover={{ background: "#2131C2", color: "white",}} variant="solid"   width="100%"  type="submit">
//                         {isLoading ?
//                         <CircularProgress isIndeterminate size="24px" color="#2131C2" />
//                         : 'Sign In'}
//                       </Button>
//                     </div>
//                   </form>
//                 </Box>
//               </Box>
//             </Flex>
//           </ChakraProvider>
//     </div>
//   );
// };

// export default LoginPage;
