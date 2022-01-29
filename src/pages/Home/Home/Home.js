import React from 'react';
import CustomerReports from '../CustomerReports/CustomerReports';
import HomeProducts from '../HomeProducts/HomeProducts';
import SliderSection from '../SliderSection/SliderSection';

const Home = () => {
    return (
        <div>
            <SliderSection />
            <HomeProducts></HomeProducts>
            <CustomerReports></CustomerReports>
        </div>
    );
};

export default Home; <h1>This is home</h1>