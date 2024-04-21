"use client"
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import style from './Chart.module.css';


const ChartComponent = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [selectedCoin,setSelectedCoin] = useState( {
    name: "Coin1",
     maxValue: 200,
     months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'August', 'October', 'November', 'December'],
     data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40,210 ],
  })
  const coins = [
    {
      name: "Coin1",
       maxValue: 200,
       months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'August', 'October', 'November', 'December'],
       data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40,210 ],
    },
    {
      name: "Coin2",
       maxValue: 120,
       months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'August', 'October', 'November', 'December'],
       data: [15, 59, 4, 82, 30, 67, 69, 21, 15, 70, 14, 13, 55, 150],
    },
    {
      name: "Coin3",
       maxValue: 350,
       months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'August', 'October', 'November', 'December'],
       data: [165, 59, 40, 181, 56, 45, 40, 65, 59, 29, 14, 156, 55, 400],
    }
  ]
  const [levels,setLevels] = useState(2)
  const [initialInvestments,setInitialInvestments] = useState(false)
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    const selectedCoin = coins.find(coin => coin.name === event.target.value);
    setSelectedCoin(selectedCoin);
 
  };
  const  handleLevelsChange = (event)=>{
    setLevels(parseInt(event.target.value))
  }
  const handleInitialInvestment = (event)=>{
    setInitialInvestments(event.target.value)

  }
  const chartRef = useRef(null);
  const maxValue = 200;
  const datax = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'August', 'October', 'November', 'December']
  
  const levelNames = Array.from({ length: levels }, (_, index) => `# ${index + 1}`);
  const levelRange = 20
  const datay = [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 210]
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: selectedCoin.months,
        datasets: [{
          label: selectedCoin.name,
          data: selectedCoin.data,
          fill: false,
          borderColor: '#0000B9',
          tension: 0.4,

        }]
      },
      options: {
        scales: {
          y: {
            position: 'right',
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return '$' + value; // Format y-axis labels as currency
              }
            }
          }
        },
        plugins: {
          tooltip: {
            enabled: false
          }
        },
        animation: {
          onComplete: function (animation) {
            const chartInstance = animation.chart;
            const ctx = chartInstance.ctx;
            const chartArea = chartInstance.chartArea;
            const maxValueY = chartInstance.scales.y.getPixelForValue(selectedCoin.maxValue); // Get the pixel position for y-axis value 70
            const maxValueYAverage = chartInstance.scales.y.getPixelForValue(selectedCoin.maxValue - selectedCoin.maxValue * (25 / 100)); // Get the pixel position for y-axis value 70
            const yValue2 = chartInstance.scales.y.getPixelForValue(80);  
            const customSellPrice = chartInstance.scales.y.getPixelForValue(120); 
            const lineWidth = chartArea.right * -0.5; 


           

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(chartInstance.chartArea.left, maxValueY);
            ctx.lineTo(chartInstance.chartArea.right, maxValueY);
            ctx.strokeStyle = 'brown';
            ctx.stroke();

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(chartInstance.chartArea.left, maxValueYAverage);
            ctx.lineTo(chartInstance.chartArea.right, maxValueYAverage);
            ctx.strokeStyle = 'orange';
            ctx.stroke();

            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([5, 5]);

            ctx.moveTo(chartInstance.chartArea.left, yValue2);
            ctx.lineTo(chartInstance.chartArea.right, yValue2);
            ctx.strokeStyle = 'green'; // Dotted line color
            ctx.stroke();
            ctx.restore();



             ctx.save();
            ctx.beginPath();
            ctx.setLineDash([5, 5]);

            ctx.moveTo(chartInstance.chartArea.left, customSellPrice);
            ctx.lineTo(chartInstance.chartArea.right, customSellPrice);
            ctx.strokeStyle = 'pink';
            ctx.stroke();
            ctx.restore();

            for (let i = 0; i < levels; i++) {
              if (levels % 2 === 0) {
                const yPos = customSellPrice - (levels / 2) * levelRange + (i + 1) * levelRange - levelRange / 2;
                ctx.save();
                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.moveTo(chartArea.right, yPos);
                ctx.lineTo(chartArea.right + lineWidth, yPos);
                ctx.strokeStyle = 'purple';
                ctx.stroke();
                ctx.restore();

                const labelX = chartArea.right + lineWidth - 20;
                const labelY = yPos
                ctx.fillStyle = 'purple';
                ctx.fillText(levelNames[levelNames.length - i - 1], labelX, labelY);
              }
              else {
                const yPos = customSellPrice - (Math.ceil(levels / 2)) * levelRange + (i + 1) * levelRange;
                ctx.save();
                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.moveTo(chartArea.right, yPos);
                ctx.lineTo(chartArea.right + lineWidth, yPos);
                ctx.strokeStyle = 'purple';
                ctx.stroke();
                ctx.restore();
                const labelX = chartArea.right + lineWidth - 20;
                const labelY = yPos
                ctx.fillStyle = 'purple';
                ctx.fillText(levelNames[levelNames.length - i - 1], labelX, labelY);
              }


            }
           
          }
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, [selectedCoin,levels]);
const applications = [{id:1,}]
  return (
    <>
    <div className={`flex flex-col items-center`} >
      <canvas ref={chartRef} className={style.chartCanvas} />
    </div>
    <div className='flex flex-col items-center w-full mt-20'> 
      <select
        value={selectedCoin ? selectedCoin.name : ''}
        onChange={handleSelectChange}
        className=" block appearance-none w-2/12 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-indigo-500"
      >
        <option value="" className='text-white font-bold'>Select a coin</option>
        {coins.map((coin, index) => (
          <option key={index} value={coin.name}>{coin.name}</option>
        ))}
      </select> 
    </div>
    <div className='flex flex-row items-center justify-evenly w-full h-auto   mt-16'>
      <div className='flex flex-col items-center justify-evenly h-auto w-3/12'>
        <div className='w-full h-[2px] bg-orange-900'></div>
        <div className='mt-4 w-full flex-col items-center  py-4 border border-black'><h2 className='text-center text-xl font-bold'>Price Prediction</h2></div>
         
      </div>
      <div className='flex flex-col items-center justify-evenly h-auto w-3/12'>
        <div className='w-full h-[2px] bg-orange-500'></div>
        <div className='mt-4 w-full flex-col items-center  py-4 border border-black'><h2 className='text-center text-xl font-bold'>Max Ladder Sell Price</h2></div>
         
      </div>
      <div className='flex flex-col items-center justify-evenly h-auto w-3/12'>
        <div className='w-full h-[2px]  border-t-2 border-pink-500 border-dashed'></div>
        <div className='mt-4 w-full flex-col items-center  py-4 border border-black'><h2 className='text-center text-xl font-bold'>Custom Prive Sell Level</h2></div>
         
      </div>
    </div>
    <div className='flex flex-row items-end justify-evenly w-full h-auto   mt-16'>
      <div className='flex flex-col items-center justify-evenly h-auto w-3/12 '>
        <div className='w-full h-[2px]  border-t-2 border-green-500 border-dashed'></div>
        <div className='mt-4 w-full flex-col items-center  py-4 border border-black'><h2 className='text-center text-xl font-bold'>Average Purchase Price</h2></div>
         
      </div>
      <div className='flex flex-col items-center justify-evenly h-auto w-3/12'> 
      <h2 className='font-bold'>13</h2>
        <div className='mt-4 w-full flex-col items-center  py-4 border border-black'><h2 className='text-center text-xl font-bold'># of Tokens owned</h2></div>
         
      </div>
      <div className='flex flex-col items-center justify-evenly h-auto w-3/12'> 
      <h2 className='font-bold'>$ 25</h2>

        <div className='mt-4 w-full flex-col items-center  py-4 border border-black'><h2 className='text-center text-xl font-bold'>Initial Investment</h2></div>
         
      </div>
    </div>
    <div className='flex flex-row justify-center items-center w-full mt-20'> 
      <select
        value={levels}
        onChange={handleLevelsChange}
        className=" block appearance-none w-2/12 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-indigo-500"
      > 
      {[...Array(30).keys()].map((level) => (
    <option key={level + 1} value={level + 1}>{level + 1}</option>
  ))}
         
      </select> 
    
      <select
        value={initialInvestments}
        onChange={handleInitialInvestment}
        className="ml-8 block appearance-none w-2/12 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-indigo-500"
      > 
    <option value={true}>yes</option>
    <option value={false}>no</option>
  
         
      </select> 
     
    </div>
    {/* <div className={`overflow-x-auto`}>
          <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
            <thead>
              <tr>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Company name
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Role
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Location
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Status
                </th>
                <th
                  className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
                >
                  Cancel Application
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td className={`px-4 py-4 border text-center `}>
                    {application.companyname}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {application.position}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    {application.location}
                  </td>
                  <td
                    className={`px-4 py-4 border text-center font-bold  ${
                      application.status === "reject"
                        ? "text-red-600"
                        : application.status === "pending"
                        ? "text-blue-600"
                        : application.status === "approve"
                        ? "text-green-500"
                        : ""
                    }`}
                  >
                    {application.status === "approve"
                      ? "approved"
                      : application.status === "reject"
                      ? "rejected"
                      : application.status}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    <button
                      className="text-lg bg-red-600 text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => {
                        handleCancelApplication(application._id);
                        console.log(
                          "application_id__application table:",
                          application._id
                        );
                      }}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
        currentPage={currentPage}
        totalPages={pages}
        onPageChange={setCurrentPage}
      />
        </div> */}
  </>
  );
};

export default ChartComponent;
