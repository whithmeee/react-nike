import { shoe8 } from '../assets/images';
import Button from './Button';

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full">
            <div className=" flex flex-1 flex-col">
                <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-sm">
                    We Provide You <span className="text-coral-red">Super Quality </span>
                    Shoes
                </h2>

                <p className="mt-4 lg:max-w-lg info-text">
                    Ensuring premium comfort and style, our meticulously crafted footwear is
                    designed to elevate your experiense, providing you with unmatched quality,
                    innovation, and a touch of elegance
                </p>

                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedictation to detail and excellence ensures your satisfaction
                </p>

                <div className="mt-11">
                    <Button label="View Details" />
                </div>
            </div>

            <div className="flex-1 justify-center items-center">
                <img width={570} height={522} src={shoe8} alt="shoe8" className="object-contain" />
            </div>
        </section>
    );
};

export default SuperQuality;
