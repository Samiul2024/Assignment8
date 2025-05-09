import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhonesContainer from '../Components/PhonesContainer';
import { useLoaderData } from 'react-router';
import SuccessSection from '../Components/Success';

const Home = () => {
    // data
    const data = useLoaderData()
    const [phones, setPhones] = useState(data)
    // console.log(data);
    const handleSearch = (e, text) => {
        e.preventDefault()
        if (text === '') return setPhones(data)
        // console.log(text);
        const searchedPhones = data.filter(phone =>
            phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase())
            ||
            phone?.brand?.toLowerCase().split(' ').includes(text.toLowerCase()) === true)

        // console.log(searchedPhones);
        setPhones(searchedPhones)
    }
    return (
        <div>
            <Hero handleSearch={handleSearch} />
            <PhonesContainer phones={phones} />
            <SuccessSection />
        </div>
    );
};

export default Home;