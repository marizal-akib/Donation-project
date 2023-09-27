/* eslint-disable react/prop-types */

import DonationCards from "../DonationCards/DonationCards";



const DonationsChart = ({donation}) => {

    
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-24 mb-24 gap-6">
                {
                    donation.map(donation=><DonationCards key={donation.id} donation={donation}></DonationCards>)
                }
           
            </div>
        </div>
    );
};

export default DonationsChart;