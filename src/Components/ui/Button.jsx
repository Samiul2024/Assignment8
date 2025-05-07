import React from 'react';

const Button = ({ label, type, onClick }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className="relative btn rounded-4xl bg-green-600 text-white hover:bg-amber-300 hover:text-indigo-400 inline-block text-lg group cursor-pointer">
            {label}
        </button>
    );
};

export default Button;