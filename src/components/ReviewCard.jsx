import React from 'react';

import { star } from '../assets/icons';

const ReviewCard = ({ review }) => {
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <img
                    src={review.imgURL}
                    alt="review-img"
                    className="rounded-full object-cover w-[120px] h-[120px]"
                />

                <p className="mt-5 max-w-sm text-center text-info">{review.feedback}</p>

                <div className="mt-3 flex justify-center items-center gap-2.5">
                    <img
                        width={24}
                        height={24}
                        className="object-contain m-0"
                        src={star}
                        alt="start"
                    />

                    <p className="text-xl font-montserrat text-slate-gray">({review.rating})</p>
                </div>

                <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
                    {review.customerName}
                </h3>
            </div>
        </>
    );
};

export default ReviewCard;
