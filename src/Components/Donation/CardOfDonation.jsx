/* eslint-disable react/prop-types */
import tinycolor from 'tinycolor2';
import { Link } from "react-router-dom";
import {BiDollar} from 'react-icons/bi'

const CardOfDonation = ({ donation }) => {
  const {  picture_re, title, category, category_bg, card_bg, text_button_bg,price } =
    donation;
  const textBtnColor = tinycolor(text_button_bg).darken(20).toString();
  const categoryColor = tinycolor(category_bg).brighten(25).toString();
  return (
    <div style={{background:card_bg}} className="card w-12/12 shadow-xl flex flex-row">
      <figure>
        <img className="w-56 h-52" src={picture_re} alt={title} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          <div
            style={{ background: categoryColor, color: textBtnColor }}
            className="border pl-1 px-1 text-xs font-semibold "
          >
            {category}
          </div>
        </div>
        <p className="text-xl font-bold">
          {title}
        </p>
        <div style={{ color:textBtnColor }} className='flex items-center'>
        <BiDollar></BiDollar>
        <p className='font-semibold' style={{ color:textBtnColor }}>
        {price}
        </p>
        </div>
        <div className="card-actions justify-start ">
          <Link to={`/donationD/${donation.id}`}>
            <button style={{ background:textBtnColor}} className="btn text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardOfDonation;
