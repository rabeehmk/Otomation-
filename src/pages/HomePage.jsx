import React from 'react';
import Hero from '../components/Hero';
import HomeExtras from '../components/HomeExtras';
import Partners from '../components/Partners';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import IndustriesSection from '../components/IndustriesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FounderNote from '../components/FounderNote';

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeExtras />
            <Partners />
            <ServicesSection />
            <SolutionsSection />
            <IndustriesSection />
            <WhyChooseUs />
            <FounderNote />
        </>
    );
};

export default HomePage;
