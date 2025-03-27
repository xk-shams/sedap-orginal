// import React, { useEffect, useRef } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = (props) => {
//   const chartRef = useRef(null);
//   useEffect(() => {
//     const chart = chartRef.current;

//     if (chart) {
//       const ctx = chart.ctx;
//       ctx.font = "bold 20px Arial";
//       ctx.fillStyle = "#000"; 
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText("81%", chart.width / 2, chart.height / 2);
//     }
//   }, []);

//   const data = {
//     labels: ["Total Order", "Remaining"],
//     datasets: [
//       {
//         data: [props.foiz, props.qoldiq],
//         backgroundColor: [props.color, "#ECECEC"], 
//         hoverBackgroundColor: ["#A93226", "#D5D8DC"],
//         borderWidth: 0,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     cutout: "70%",
//     plugins: {
//       legend: {
//         display: false, 
//       },
//       tooltip: {
//         enabled: false,
//       },
//     },
//   };

//   return (
//     <div style={{ width: "200px", height: "200px", position: "relative" }}>
//       <Doughnut ref={chartRef} data={data} options={options} />
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           fontSize: "20px",
//           fontWeight: "bold",
//           color: "#000",
//         }}
//       >
//         <h2>{props.foiz}%</h2>
//       </div>
//     </div>
//   );
// };

// export default PieChart;