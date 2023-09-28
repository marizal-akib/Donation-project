/* eslint-disable react/prop-types */
import React from "react";
import { getDonation } from "../../Utility/localStorage";
import Chart from 'react-apexcharts'


const PieChart = ({totalDonations}) => {
  
  const usersDonations = getDonation(); 

  
  const totalInt = parseInt(totalDonations.length);
  const donateInt = parseInt(usersDonations.length);
  
  console.log(totalInt , donateInt);
  return (
    <React.Fragment>
        <div className="container mx-auto">
            <Chart
            type="pie"
            width={1200}
            height={400}

            series={[totalInt,donateInt]}

            

            options={ {
                labels:['Total Donation',"Your Donations"],

                colors:[ "#b11226",'#00A36C'],
                legend:{
                    position:'bottom',
                },
                responsive:[
                    {
                        breakpoint:1024,
                        options: {
                            chart: {
                              width: 980,
                              height:350,
                            },
                            legend: {
                              position: 'bottom'
                            }
                        }
                    },
                    {
                        breakpoint:770,
                        options: {
                            chart: {
                              width: 760,
                              height:340,
                            },
                            
                            legend: {
                                position: 'bottom'
                            }
                        }
                    },
                    {
                        breakpoint:435,
                        options: {
                            chart: {
                              width: 425,
                              height:370,
                            },
                            legend: {
                              position: 'bottom'
                            }
                        }
                    },
                    {
                        breakpoint:380,
                        options: {
                            chart: {
                              width: 375,
                              height:320,
                            },
                            
                            legend: {
                              position: 'bottom'
                            }
                        }
                    },
                    {
                        breakpoint:395,
                        options: {
                            chart: {
                              width: 380,
                              height:320,
                            },
                            
                            legend: {
                              position: 'bottom'
                            }
                        }
                    }
                ],
            }}

            >


            </Chart>

        </div>
    </React.Fragment>
  );
};

export default PieChart;
