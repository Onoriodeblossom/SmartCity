import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import {Article, H1} from '../components/styles'



const Box = ({src, title, details}) => {
  return(
    <div className='lg:w-[300px] xl:w-[370px]  my-9 px-4 md:px-8 py-7 shadow-md rounded-md shadow-[rgba(33, 49, 194, 0.15)]'>
      <img src={src} alt={title} width={70} height={70}/>
      <h2 className='my-3 text-lg font-semibold'>{title}</h2>
      <p>{details}</p>
    </div>
  )
}

const HomeSample = () => {
  return (
    <div className='relative w-fit'>
      <div>
        <Image 
        src='/Assets/homesample.png' 
        alt='home'
        width={700} 
        height={500}
        quality = {100}
        />
      </div>
      <div className='absolute hidden md:block top-[70%] right-[5%] w-[40%]'>
        <Image 
        src='/Assets/homesample.png'
        alt = 'home' 
        width={500} 
        height={350}
        quality = {100}
        />
      </div> 
    </div>
  )
}

const Team = ({src, name, role}) => {
  return(
    <div className=' my-3 lg:my-0 w-fit mx-auto  sm:w-[300px] lg:w-[300px] xl:w-[370px]'>
      <Image 
      src={src} 
      alt={name} 
      width={500} 
      height={450}/>
      <h2 className=' px-2 my-3 text-lg xl:text-xl font-bold'>{name}</h2>
      <p className='px-2'>{role}</p>
    </div>
  )
}



const About = () => {
  return (
    <Layout footer>
      <div>
        <section className='hero_section relative'>
          <HeroSection>
            <div className=' absolute left-[50%] top-[40%] md:top-[30%] xl:top-[45%] transform translate-x-[-50%] translate-y-[-50%] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-center'>
              <h1 className='text-[27px] sm:text-[35px] md:text-[40px] xl:text-[55px] lg:text-[42px] text-white font-semibold'>This is who we are and what we do</h1>
            </div> 
          </HeroSection>  
        </section>
        <div className=''>
        <section className='my-9  px-6 md:px-[3em]'>
            <Article>
              <H1>Our Goals, Objectives and Values</H1>
              <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Article>
            <div className='box mt-[2em] lg:mt-[6em]  mb-[3em] flex items-center justify-between flex-wrap'>
              <Box
                src= 'Assets/homesample.png'
                title='Fast'
                details='Search for your dream hostel bby location by campus.You have the freedom to search for different hostels available on the platform'
              />
              <Box
                src= 'Assets/homesample.png'
                title='Easy'
                details='Search for your dream hostel bby location by campus.You have the freedom to search for different hostels available on the platform'
              />
              <Box
                src= 'Assets/homesample.png'
                title='Reliable'
                details='Search for your dream hostel bby location by campus.You have the freedom to search for different hostels available on the platform'
              />
            </div>
        </section>
        <div className='bg-[#E5E5E5] px-6 md:px-[3em] py-2 lg:py-[4em]'>
          <section className = "my-9 md:my-[5em]">
            <div className='flex justify-between  flex-wrap'>
              <div className='left md:mx-auto lg:mx-0 lg:w-[50%]  xl:w-[45%]'>
                <HomeSample/>
              </div>
              
              <article className='right mt-[40px] md:mt-[100px] lg:mt-[0px] lg:w-[45%] flex flex-col justify-between'>
              <h1 className='font-bold text-md sm:text-lg
                md:text-xl lg:text-2xl xl:text-3xl tracking-wide'>We Provide hostels</h1>
                <div className="details xl:text-lg my-5 md:mt-auto">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu</p>
                  <p className = "my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.</p>
                </div>
                
                <button className=' bg-gradient-to-r from-[#101861] to-[#2131C2] text-white py-1 px-6 rounded-sm text-sm lg:text-lg xl:text-xl  mt-auto w-fit'>Start Searching Now</button>
              </article> 
            </div> 
          </section>
          
          <section className = " mt-[5em] mb-[4em] lg:mt-[10em]">
            <div className='lg:flex justify-between  flex-wrap'>
              <article className='left md:mx-auto lg:mx-0  mt-[40px] md:mt-[100px] lg:mt-[0px] lg:w-[45%] flex flex-col justify-between'>
              <h1 className='font-bold text-md sm:text-lg
                md:text-xl lg:text-2xl xl:text-3xl tracking-wide'>Agents/Individuals /Landlord can post</h1>
                <div className="details xl:text-lg my-5 md:mt-auto">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu</p>
                  <p className = "my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.</p>
                </div>
                
                <button className=' bg-gradient-to-r from-[#101861] to-[#2131C2] text-white py-1 px-6 rounded-sm text-sm lg:text-lg xl:text-xl mb-5 lg:mb-0 lg:mt-auto w-fit'>Post a hostel Now</button>
              </article> 
              <div  className='right md:mx-auto lg:mx-0  my-4 lg:my-0 lg:w-[50%]  xl:w-[45%] w-fit'>
                <HomeSample/>
              </div> 
            </div> 
          </section>
        </div>
        <section className='my-9 lg:mt-[4em] mb-[3em] lg:mb-[5em]  px-6 md:px-[3em]'>
            <Article>
              <H1>This is why you should choose us </H1>
              <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ullamcorper habitant mattis a malesuada vestibulum. Magna sit egest.</p>
            </Article>
            <div className='box mt-[2em] lg:mt-[6em] mb-[3em] flex items-center justify-between flex-wrap'>
              <Box
                src= 'Assets/homesample.png'
                title='Search for a hostel'
                details='Search for your dream hostel bby location by campus.You have the freedom to search for different hostels available on the platform'
              />
              <Box
                src= 'Assets/homesample.png'
                title='Pick your choice of Hostel'
                details='Search for your dream hostel bby location by campus.You have the freedom to search for different hostels available on the platform'
              />
              <Box
                src= 'Assets/homesample.png'
                title='Pick your choice of Hostel'
                details='Search for your dream hostel bby location by campus.You have the freedom to search for different hostels available on the platform'
              />
            </div>
        </section>
        <section className=' py-2 lg:py-9 bg-[#E5E5E5] text-white'>
          <div className='text-center bg-[#2131C2] my-8 py-7 md:py-8 pb-[3em] md:pb-[5em] lg:pb-[8em]'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide my-2'>Desprately in need of a roommate?</h1>
            <p className='my-1 md:my-2 lg:text-lg'>We help you connect to trusted, reliable and loving roommate</p>
            <Link href='/hostels'>
              <a>
              <button className='my-4 md:my-5 w-fit text-sm md:text-md  py-2 sm:py-3 px-4 lg:px-5 border border-white border-solid rounded-sm hover:text-gray-300 hover:border-gray-300'>See Available Roomie</button>
              </a>
            </Link>
            <p className='my-1 md:my-2 lg:text-lg'>Be the first to get hot hostel updates, subscribe to our news letter Today</p>
          </div>
        </section>
        <section className="section_7 my-[2em] lg:my-[7em] lg:mb-[8em] px-6 lg:px-[3em]">
          <div className='heading text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide my-4 md:my-[1em] text-center'>
            <h1>Our Team</h1>
          </div>
          <div className='team flex items-center justify-between flex-wrap'>
            <Team
            src={'/Assets/Agent.png'}
              name='Agent Club'
              role='Partner'
            />
            <Team
            src={'/Assets/Happy.png'}
              name='Happy'
              role='CEO'
            />
            <Team
            src={'/Assets/Emma.png'}
              name='Emma'
              role='Partner'
            />
          </div>  
        </section>
        </div>
      </div>
    </Layout>
  )
}
export default About;