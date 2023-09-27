import { Link } from "react-router-dom";
import tinycolor from 'tinycolor2';

/* eslint-disable react/prop-types */
const DonationCards = ({ donation }) => {

  
  const {id,picture,title,category,category_bg,card_bg,text_button_bg} = donation;
  const textBtnColor = tinycolor(text_button_bg).darken(20).toString();
  const categoryColor =tinycolor(category_bg).brighten(25).toString();
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
          <div style={{background:categoryColor , color:textBtnColor}} className="border pl-1 px-1 text-xs font-semibold ">{category}</div>
        </div>
        <p style={{color:textBtnColor}} className="text-base font-semibold ">
          <Link to={`/donationD/${id}`}>
          {title}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DonationCards;
