
const HeroSection = ({children}) => {
    return (
        <div className="bg-[url('/Assets/background2.png')]  w-[100%] h-[400px] md:h-[90vh] bg-cover bg-center bg-no-repeat   ">
           {children}
        </div>
    );
};

export default HeroSection;