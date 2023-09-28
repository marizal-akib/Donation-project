import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { useState } from "react";
import DonationCards from "../DonationCards/DonationCards";

const Home = () => {
  const donations = useLoaderData();

  const [keyword, setKeyword] = useState('');



  const bringKeyword = (broughtKeyword) =>{
    setKeyword(broughtKeyword);
  }
  console.log(keyword);


  
  

  return (
    <div>
      <div className=" md:max-w-7xl mx-auto"><Banner getKeyword={bringKeyword} ></Banner></div>

      
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-24 mb-24 gap-6">
                {
                    donations.filter((donation)=>{ 
                        return keyword.toLowerCase() === '' ? donation : donation.category.toLowerCase().includes(keyword.toLocaleLowerCase());
                    }).map(donation=><DonationCards key={donation.id} donation={donation}></DonationCards>)
                }
           
            </div>
    </div>
  );
};

export default Home;
