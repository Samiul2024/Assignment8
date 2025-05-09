import React from 'react';
import { Link } from 'react-router';
import Button from './Button';

const EmptyState = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-6xl text-center p-16'>You havn't Booked Any Appointment</h1>
            <Link to='/'>
                <Button label='Go To Homepage' />
            </Link>
        </div>
    );
};

export default EmptyState;