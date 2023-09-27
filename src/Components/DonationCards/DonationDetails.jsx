import { useLoaderData, useParams } from "react-router-dom";
import { BiDollar } from 'react-icons/bi';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../Utility/localStorage";
import tinycolor from 'tinycolor2';


const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id); 
    const donation = donations.find(donation => donation.id === idInt)
    
    const handelDonate = () =>{
        saveDonation(idInt),
        toast("Thank you for your donation");
    } 
    
    const textBtnColor = tinycolor(donation.text_button_bg).darken(20).toString();
    
    return (
        <div  className="flex flex-col justify-center   ">
            <div className="md:pt-12 pt-4 ">
            <img className=" w-11/12 mx-auto" src={donation.picture} alt="" />
            <div className="md:relative md:block  md:mx-auto  md:bottom-24 md:left-0 md:w-11/12 md:h-24 md:bg-black opacity-70 hidden "></div>

            </div>
            <div className="flex justify-center md:relative md:bottom-44 mt-3 md:justify-start md:ml-[78px]">

            <button  onClick={handelDonate} style={{background:textBtnColor}} className="flex items-center btn text-white ">Donate <BiDollar></BiDollar>{donation.price}</button>
            </div>
            <h1 className="md:relative md:bottom-36 md:text-2xl text-xl md:text-left text-center font-bold md:ml-10 ">{donation.title}</h1>

            <p className="md:relative md:bottom-36 m-3 md:text-left text-center md:ml-10 mb-8">{donation.description}</p>
            <ToastContainer/>
            
        </div>
    );
};

export default DonationDetails;