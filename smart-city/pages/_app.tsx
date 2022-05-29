import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

interface Props{
  Component: React.ComponentType
  pageProps: any
}


const  MyApp:React.FC<Props> = ({ Component, pageProps }) => {
  return(
    // <ChakraProvider>
      <Component {...pageProps}/>
    // </ChakraProvider>  
  )  
}

export default MyApp
