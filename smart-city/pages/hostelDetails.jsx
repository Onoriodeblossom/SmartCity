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

const HostelDetails = () => {
  // const [becomeContact, setBecomeContant] = useState(false);
  const ImageTextCardData = [
    { cardText: "Kitchen" },
    { cardText: "Bedroom" },
    { cardText: "Basement" },
    { cardText: "Bath room" },
    { cardText: "Sitting room" },
    { cardText: "woardrob" },
    { cardText: "Others" },
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
                  Smart city
                </h1>
                <p className="text-[15px] my-2 md:text-lg lg:text-xl xl:text-2xl mx-auto w-[80%]">
                  Tired of hostel hunting? we are here to ease your stress with
                  our numerous hostel offers
                </p>
                <form className="bg-[#302121] w-[90%] md:w-[80%] opacity-80  mx-auto my-[4em] py-6 px-5">
                  <p className="text-[#BDBDBD]">
                    Pay only #2000 to unlock 1 hostel location and only #10,000
                    to unlock 6 different locations
                  </p>
                  <div className="flex  mx-auto items-center justify-between flex-wrap my-4 lg:my-[2em]">
                    <div className="search-input">
                      <input
                        type="text"
                        className=" px-3 sm:px-4 py-1 lg:py-2 xl:py-3  text-white  mx-auto sm:mx-0   bg-transparent border border-white border-solid  rounded-[3px] placeholder-[#BDBDBD]"
                        placeholder="Search Hostel"
                        required
                      />
                    </div>
                    <button
                      className="
                    px-3 sm:px-4 py-1 text-center text-[#1c214e] bg-white rounded-[3px] mx-auto sm:mx-0  mt-3 sm:mt-0  xl:py-3 xl:px-6"
                    >
                      Search
                    </button>
                    <div className="room-type w-fit">
                      <HeroOption
                        title="Room Type"
                        options={["Self contained", "Shared", "Both"]}
                      />
                    </div>
                    <div className="Location w-fit">
                      <HeroOption
                        title="Location"
                        options={["Ekosodin", "BDPA", "osasogie"]}
                      />
                    </div>
                    <div className="price-range w-fit">
                      <HeroOption
                        title="Price range"
                        options={["#150-200k", "#200k-300k", "#300k-500k"]}
                      />
                    </div>
                    <div></div>
                  </div>
                </form>
              </div>
            </HeroSection>
          </section>
          {/* <div className=" h-[90px] lg:h-[120px]  bg-[#E5E5E5]"></div> */}
          <FlexibleDiv flexDirection="column" boxedLayout>
            <SectionHeader text="Perculiar Hostels" />
            <FlexibleDiv>
              <ImageCard icon />
              <PriceCard />
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
            <HostelInfo />
          </FlexibleDiv>

          <FlexibleDiv flexDirection="column" boxedLayout>
            <SectionHeader text="What people have to say about the hostels" />
            <FlexibleDiv resFlexDirection="row">
              {testimonialData.map(({ name, testimonial, image }) => (
                <TestimonialCard
                  testimonial={testimonial}
                  name={name}
                  image={image}
                />
              ))}
            </FlexibleDiv>
          </FlexibleDiv>

          <FlexibleDiv
            flexDirection="column"
            boxedLayout
            paddingVertical="5rem"
          >
            <ReviewSection />
          </FlexibleDiv>

          <FlexibleDiv flexDirection="column" boxedLayout>
            <SectionHeader text="Recommended Hostels" />
            <FlexibleDiv></FlexibleDiv>
          </FlexibleDiv>
        </Layout>
      </main>
    </div>
  );
};

export default HostelDetails;
