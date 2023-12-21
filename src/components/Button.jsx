const Button = ({ label, iconURl, bgColor, textColor, borderColor, fullWidth }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 text-lg
            ${
                bgColor
                    ? `${bgColor} ${textColor} ${borderColor} rounded-full`
                    : 'bg-red-400 rounded-full text-white border-red'
            } 'rounded-full ${fullWidth && 'w-full'}'`}>
            {label}
            {iconURl && <img className="ml-2 rounded-full w-5 h-5" src={iconURl} alt="arrow" />}
        </button>
    );
};

export default Button;
