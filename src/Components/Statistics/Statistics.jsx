// import React, { PureComponent } from 'react';

import { useLoaderData } from "react-router-dom";
import PieChart from "./PieChart";

// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const totalDonations = useLoaderData();


    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <PieChart totalDonations={totalDonations}></PieChart>
        </div>
    );
};

export default Statistics;