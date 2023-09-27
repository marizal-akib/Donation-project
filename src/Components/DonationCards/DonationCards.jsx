import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCards = ({ donation }) => {

    const {picture,title,category,category_bg,card_bg,text_button_bg} = donation;
  return (
    <div style={{background:card_bg}} className="card shadow-xl">
      <figure>
        <img
        className="max-w-[300] max-h-[190]"
          src={picture}
          alt={title}
        />
      </figure>
      <div className="card-body ">
        <div className="card-actions justify-start">
          <div style={{background:category_bg , color:text_button_bg}} className="border pl-1 px-1 text-xs font-semibold ">{category}</div>
        </div>
        <p style={{color:text_button_bg}} className="text-base font-semibold ">
          <Link>
          {title}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DonationCards;
