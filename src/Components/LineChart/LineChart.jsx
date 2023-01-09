import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export default function LineChart() {

  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        display:true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Car Statistics',
        fontSize:30,
        color:'black',
      },
    },
  };
  
  const labels =['7 PM', '9 PM', '11 PM', '1 PM', '3 PM', '5 PM', '7 PM',"9 PM"];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Day',
        data: [25, 35, 45, 65, 61,59,29,22],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 2,
      },
      {
        label: 'Week',
        
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Month',
       
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
