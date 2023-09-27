import { useLoaderData, useParams } from "react-router-dom";
import { BiDollar } from 'react-icons/bi';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../Utility/localStorage";


const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id); 
    const donation = donations.find(donation => donation.id === idInt)

    const handelDonate = () =>{
        saveDonation(idInt),
        toast("Thank you for your donation");
    } 

    return (
        <div  className="flex flex-col justify-center items-center h-screen">
            <img className="w-2/3 mt-6 mx-auto" src={donation.picture} alt="" />
            <button onClick={handelDonate} style={{background:donation.text_button_bg}} className="flex items-center btn text-white ">Donate <BiDollar></BiDollar>{donation.price}</button>
            <h1>{donation.title}</h1>
            <p>{donation.description}</p>
            <ToastContainer/>
            
        </div>
    );
};

export default DonationDetails;