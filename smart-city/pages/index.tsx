import React, {useState} from "react";
import Head from 'next/head';
import Image from 'next/image';
import Layout from "../components/Layout";


 const Home:React.FC = () => {
  return (
    <div>
      <Head>
        <title>Smart-city</title>
        <meta name="description" content="A Smart city project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout footer>
          <h2 className='text-2xl '>Smart-city</h2>
        </Layout> 
      </main>
    </div>
  )
}

export default Home;
