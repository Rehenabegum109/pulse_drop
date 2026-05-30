import AntiBotProtection from "./antibotProtecton";

import FAQSection from "./faq";
import Footer from "./footer";

import GlobalCommunity from "./global";
import Hero from "./hero";
import HowItWorks from "./howItworks";
import TestimonialsSection from "./testimonial";
import WhyLimitedDrop from "./whyLimitedDrop";


const Home = () => {
    return (
        <div>
         
         <Hero/>
         <HowItWorks/>
         <WhyLimitedDrop/>
         <AntiBotProtection/>
         <GlobalCommunity/>
         <TestimonialsSection/>
         <FAQSection/>
    <Footer/>

        </div>
    );
};

export default Home;