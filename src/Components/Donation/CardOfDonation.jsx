/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CardOfDonation = ({ donation }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl flex flex-row">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-start">
            <Link to={`/donationD/${donation.id}`}>
          <button className="btn btn-primary">View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CardOfDonation;
