import React from 'react';
import HomeBanner from '../components/HomeBanner';
import bannerImg from '../assets/images/world.svg'
import Features from '../components/Features';
import About from '../components/About';
import TrainerDetails from '../components/TrainerDetails';


const Home = () => {
    return (
        <div className=' md:mt-24 mt-10' id='overview'>
            <HomeBanner
                banner={bannerImg}
                heading={'Supply Chain Management & Commercial Course'}
                subHeading={'Become an Entrepreneur or Get Promoted in Your Job'}
                subHeading2={"Only 3 Slots Left"}
                courseFee={"Course fee ৳40,000/- only"}
                btn1={'Enroll Now'}
            // btn2={'Discount'}
            />
            <Features />
            <About />
            <TrainerDetails />
        </div>
    );
};

export default Home;