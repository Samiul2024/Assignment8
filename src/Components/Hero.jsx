import React, { useState } from 'react';
import bannerImg from '../assets/banner-img-1.png'
import Button from './ui/Button';

const Hero = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState('')
    // console.log(searchText);
    return (
        <div
            className="h-[550px] w-full rounded-3xl bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >
            {/* Overlay to make text more readable */}
            <div className="absolute inset-0 opacity-50 rounded-2xl"></div>

            {/* Content over the image */}
            <div className="relative z-10 text-center px-4 md:px-48 text-white space-y-4">
                <h1 className="font-bold text-5xl">
                    It avoids subjective claims or exaggeration that might raise red flags legally
                </h1>
                <p className="text-gray-200">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
                
            </div>
        </div>
    );
};

export default Hero;