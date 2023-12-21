import { star } from '../assets/icons';
const PopularProductCard = ({ product }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm items-center">
            <img className="w-[280px] h-[280px]" src={product.imgURL} alt="" />

            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} width={24} height={24} alt="star" />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">
                    ({product.rating})
                </p>
            </div>

            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
                {product.name}
            </h3>
            <p className="font-semibold font-palanquin mt-2 text-coral-red">{product.price}</p>
        </div>
    );
};

export default PopularProductCard;
