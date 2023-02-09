

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import HeroOption from "../components/view/HeroOption";
import { Article, H1 } from "../components/styles";
import HostelCard from "../components/hostelCard/hotelCard";
import CardBg from "../public/Assets/cardBg.png";
import ImageCard from "../components/imageCard/imageCard.component";
import { FlexibleDiv } from "../components/flexibleDiv/flexibleDiv.component";
import PriceCard from "../components/priceCard/priceCard.component";
import SectionHeader from "../components/sectionHeader/sectionHeader.component";
import ImageTextCard from "../components/imageTextCard/imageTextCard.component";
import TestimonialCard from "../components/testimonialCard/testimonialCard.component";
import ReviewSection from "../components/reviewSection/reviewSection.component";
import ScrollingDiv from "../components/Carousel/index";
import HostelInfo from "../components/HostelInfo/HostelInfo.component";
import FormSection from "../components/formSection/formSection.component";
import { RoundButton } from "../components/roundButton/roundButton";
import {HostelForm} from "../components/hostelForm/hostel-form"

const PostHostel = () => {
  // const [becomeContact, setBecomeContant] = useState(false);
  const ImageTextCardData = [
    { cardText: "hello this" },
    { cardText: "hello this" },
    { cardText: "hello this" },
    { cardText: "hello this" },
    { cardText: "hello this" },
    { cardText: "hello this" },
    { cardText: "hello this" },
    { cardText: "hello this" },
    { cardText: "hello this" },
    { cardText: "hello this" },
  ];

  const testimonialData = [
    {
      name: "Hinata",
      image: CardBg,
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo esse facere sunt temporibus accusantium quaerat ?",
    },
    {
      name: "Hinata",
      image: CardBg,
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo esse facere sunt temporibus accusantium quaerat ?",
    },
    {
      name: "Hinata",
      image: CardBg,
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo esse facere sunt temporibus accusantium quaerat ?",
    },
  ];

  return (
    <div>
      <Head>
        <title>Smart-city</title>
        <meta name="description" content="A Smart city project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout footer>
          <section className="hero_section  relative">
            <HeroSection>
              <div className=" absolute left-[50%] top-[50%] md:top-[40%] xl:top-[45%] transform translate-x-[-50%] translate-y-[-50%] w-[100%] text-center text-white">
                <h1 className="text-[25px] sm:text-[35px] md:text-[40px] xl:text-[52px] lg:text-[42px]  font-semibold">
                Vacating a house ? upload the house to get paid 
                </h1>
                <p className="text-[15px] my-2 md:text-lg lg:text-xl xl:text-2xl mx-auto w-[80%]">
                Get paid #10,000 by making available the information about the vacating space to prospective tenant.
                </p>
                <button className=" bg-white text-[#2131C2] px-10 py-3 rounded-sm font-normal text-sm md:text-md lg:text-lg">Post Hotel</button>
              </div>
            </HeroSection>
          </section>
          {/* <div className=" h-[90px] lg:h-[120px]  bg-[#E5E5E5]"></div> */}
          <FlexibleDiv flexDirection="column" boxedLayout>
            <SectionHeader text="Pay #2000 to unlock 1  hostel location pay #10,000 to unlock 6 different locations" />
            <FlexibleDiv>
              <ImageCard icon width="55%" resWidth="50%" />
              <FlexibleDiv width="40%">
                <ImageCard
                  height={"32vh"}
                  width="100%"
                  resWidth="100%"
                  resHeight="24vh"
                />
                <ImageCard
                  height={"32vh"}
                  width="100%"
                  resWidth="100%"
                  resHeight="24vh"
                />
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>

          <FlexibleDiv
            flexDirection="column"
            boxedLayout
            paddingVertical="5rem"
          >
            <ScrollingDiv
          scrollCardBg="transparent"
          scrollOuterBg="transparent"
          scrollCardGaps="0 1rem"
        >
          {ImageTextCardData.map(({ cardText }) => (
            <ImageTextCard />
          ))}
        </ScrollingDiv>


          </FlexibleDiv>

      

          
             <Article>
              <H1>Upload accommodation space  here</H1>
            </Article>
            <HostelForm/>




        

        </Layout>
      </main>
    </div>
  );
};

export default PostHostel;
