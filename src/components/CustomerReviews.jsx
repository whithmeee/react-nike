import React from 'react';
import { reviews } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import ReviewCard from './ReviewCard';

const CustomerReviews = () => {
    const [sliderPrev, setSlider] = React.useState(2);

    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say?
            </h3>

            <p className="info-text mt-4 text-center max-w-lg m-auto">
                Hear genuine stories from our statisfied Customers about their exceptional
                experiences with us.
            </p>

            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                <Swiper
                    slidesPerView={sliderPrev}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                    {reviews.map((review) => (
                        <SwiperSlide className="cursor-pointer">
                            <ReviewCard key={review.customerName} review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CustomerReviews;
