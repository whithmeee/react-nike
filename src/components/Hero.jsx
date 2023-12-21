import React from 'react';
import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import { shoes, statistics } from '../constants';
import Button from './Button';
import ShoeCard from './ShoeCard';

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = React.useState(bigShoe1);

    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start  max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-red-400">Our Summer Collections</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-red-400 inline-block mt-3">Nike</span>
                    Shoes
                </h1>

                <p className="text-gray-400 text-lg font-montserrat leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active
                    life.
                </p>

                <Button label="Shop now" iconURl={arrowRight} />

                <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
                            <p className="leading-7 text-gray-400 font-montserrat">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" w-full flex justify-center relative items-center xl:min-h-screen flex-1 max-xl:py-40 bg-primary-400 bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="bigShoe1"
                    width={600}
                    height={500}
                    className="object-contain relative z-10"
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm: px-6">
                    {shoes.map((shoe) => (
                        <div key={shoe.bigShoe}>
                            <ShoeCard
                                imgURL={shoe}
                                bigShoeImg={bigShoeImg}
                                setBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
