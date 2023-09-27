import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DonationsChart from "../DonationsChart/DonationsChart";


const Home = () => {
    const donation = useLoaderData();
    // console.log(donation);
    return (
        <div>
            <div className=" md:max-w-7xl mx-auto">
            <Banner></Banner>

            </div>
            <DonationsChart donation={donation} ></DonationsChart>
        </div> 
    );
};

export default Home;