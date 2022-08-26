import Head from 'next/head'
//import { useMediaPredicate } from "react-media-hook";
import Footer from './Footer'
import NavBar from './Navbar'
import MobileNavbar from './Navbar/mobile'


 interface Props {
    siteTitle?: string
    children: React.ReactNode
    footer?: boolean
 }

const Layout:React.FC<Props> = ({children, siteTitle,footer}) => {
  //const biggerThan768 = useMediaPredicate("(min-width: 768px)");

  return(
    <div>
			<Head>
				<link rel="icon" href = "Assets/logo.png" />
				<meta name="smart-city" content="A product by Evergreen" />
				<title>{siteTitle? siteTitle: 'Smart-city'}</title>
			</Head>
			<main>
        <header>
          <div className='hidden md:block'>
            <NavBar/>
          </div>
          <div className = "md:hidden">
            <MobileNavbar/>
          </div>
        </header>
				{children}
        {footer? <Footer/> : null}
			</main>
    </div>
  )
}

export default Layout;