import PieChart from "./PieChart";

const Statistics = () => {
    const totalDonations = useLoaderData();
    const usersDonations = getDonation();

    
    return (
        <div>
            <PieChart></PieChart>

        </div>
    );
};

export default Statistics; 