import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

export default function BarChar() {
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
       
        Title,
        Tooltip,
        Legend
      );
      
       const options = {
        responsive: true,
        legend:{
          display:true,
          position:'right'
        },
        plugins: {
        
          title: {
            display: true,
            text: 'Miles Statistics',
            fontSize:30,
            color:'black',
          },
        },
      }
      
      const labels = ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Day',
            data: [65, 59, 80, 69, 56,45,35],
            backgroundColor: ' #2884FF',
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
      }
      
  return (
    <Bar   options={options} data={data} />
  )
}
