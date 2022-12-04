import React from "react";

import ReactApexChart from "react-apexcharts";

class ApexBar extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               data: [44, 55, 41, 64, 22, 43, 21],
            },
            {
               data: [53, 32, 33, 52, 13, 44, 32],
            },
         ],
         options: {
            chart: {
               type: "bar",
               height: 230,
               toolbar: {
                  show: false,
               },
            },
            plotOptions: {
               bar: {
                  horizontal: false,
                  columnWidth: "60%",
                  endingShape: "rounded",
               },
            },
            colors: ["#FF9432", "#1EA7C5"],
            legend: {
               show: false,
               position: "top",
               horizontalAlign: "left",
            },
            dataLabels: {
               enabled: false,
            },
            stroke: {
               show: true,
               width: 10,
               colors: ["transparent"],
            },
            xaxis: {
               categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            },
         },
      };
   }

   render() {
      return (
         <div id="chart">
            <ReactApexChart
               options={this.state.options}
               series={this.state.series}
               type="bar"
               height={430}
            />
         </div>
      );
   }
}
export default ApexBar;
