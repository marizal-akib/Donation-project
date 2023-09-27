import { useLoaderData } from "react-router-dom";
import CardOfDonation from "./CardOfDonation";
import { useEffect, useState } from "react";
import { getDonation } from "../../Utility/localStorage";



const Donation = () => {
    const donations = useLoaderData();
    const [dataLength, setDataLength] = useState(4);
    const [submittedDonation, setSubmittedDonation] = useState([]);


    useEffect(()=>{
        const storedDonationId = getDonation();
        if(donations.length>0){

          const donated = [];

          for(const id of storedDonationId){
            const donation = donations.find(donation => donation.id === id );
            if(donation){
                donated.push(donation)
            }
          }
          setSubmittedDonation(donated)

        }


    },[donations])

    return (
        <div className="flex flex-col items-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-4 mb-5">
            {
                submittedDonation.slice(0,dataLength).map((donation) =><CardOfDonation 
                    key={donation.id} 
                    donation={donation}></CardOfDonation>)
            }
            </div>
            <div className={ dataLength === submittedDonation.length ? 'hidden' : ''}>
                <button onClick={() =>setDataLength(submittedDonation.length)}
                className=" btn btn-primary m-5">Show All </button>
            </div>
        </div>
    );
};

export default Donation;