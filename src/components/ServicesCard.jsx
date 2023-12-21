import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16 w-full">
            <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
                <img width={24} height={24} src={service.imgURL} alt="service-img" />
            </div>
            <h3 className="text-2xl font-bold mt-5">{service.label}</h3>
            <p className="mt-10 text-slate-gray">{service.subtext}</p>
        </div>
    );
};

export default ServicesCard;
