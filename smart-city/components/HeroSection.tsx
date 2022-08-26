
const HeroSection = ({children}) => {
    return (
        <div className="bg-[url('/Assets/background2.png')]  w-[100%] h-[60vh] sm:h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat   ">
           {children}
        </div>
    );
};

export default HeroSection;