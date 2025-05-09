import React from "react";
import CountUp from "react-countup";
import successLawyer from '../assets/success-doctor.png';
import successCases from '../assets/success-patients.png';
import successReview from '../assets/success-review.png';
import successStaffs from '../assets/success-staffs.png';
import { FaUsers, FaAward, FaProjectDiagram, FaGlobe } from "react-icons/fa";

const stats = [
    {
        icon: <img src={successLawyer} alt="Doctor" className="w-10 h-10" />, number: 199, title: "Total Lawyer"
    },
    {
        icon: <img src={successReview} alt="Doctor" className="w-10 h-10" />, number: 467, title: "Total Reviews"
    },
    { icon: <img src={successCases} alt="Doctor" className="w-10 h-10" />, number: 1900, title: "Cases Initiated" },
    { icon: <img src={successStaffs} alt="Doctor" className="w-10 h-10" />,number: 300, title: "Total Stuffs" },
];

const SuccessSection = () => {
    return (
        <>
            <section className="py-12 ">
                <div className="flex flex-col gap-4 px-6 text-center md:items-center pb-4">
                    <h1 className="font-bold text-4xl text-center">
                        We Provide Best Law Services
                    </h1>
                    <p>
                        Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.
                    </p>
                </div>
                <div className="py-4">
                    <div className="max-w-6xl mx-auto  px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-base-300 shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
                                >
                                    <div className="text-blue-600 mb-3">{item.icon}</div>
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        <CountUp end={item.number} duration={40} suffix="+" />
                                    </h2>
                                    <p className="mt-2 text-gray-600 text-lg">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SuccessSection;