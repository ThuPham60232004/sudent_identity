import React from 'react';
import ReactECharts from 'echarts-for-react';
import './BinanceChart.scss';
const candlestickData = [
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
  ['2024/07/25', 570, 600, 560, 580],
  ['2024/07/26', 580, 620, 570, 600],
  ['2024/07/27', 600, 610, 580, 590],
  ['2024/07/28', 590, 615, 580, 605],
  ['2024/07/29', 605, 625, 590, 610],
  ['2024/07/30', 610, 630, 600, 615],
];

const volumeData = [
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
  ['2024/07/25', 120000],
  ['2024/07/26', 130000],
  ['2024/07/27', 125000],
  ['2024/07/28', 150000],
  ['2024/07/29', 160000],
  ['2024/07/30', 140000],
];

const option = {
    backgroundColor: '#FFFFFF',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      backgroundColor: '#F0F0F0',
      borderWidth: 1,
      borderColor: '#CCCCCC',
      padding: 10,
      textStyle: {
        color: '#000000'
      },
      position: function (pos, params, el, elRect, size) {
        const obj = { top: 10 };
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
    grid: [
      {
        left: '10%',
        right: '10%',
        height: '60%',
        containLabel: true
      },
      {
        left: '10%',
        right: '10%',
        top: '75%',
        height: '15%',
        containLabel: true
      }
    ],
    xAxis: [
      {
        type: 'category',
        data: candlestickData.map(item => item[0]),
        scale: true,
        boundaryGap: false,
        axisLine: { lineStyle: { color: '#000000' } },
        axisLabel: {
          margin: 15 
        },
        axisTick: {
          show: false
        }
      },
      {
        type: 'category',
        gridIndex: 1,
        data: volumeData.map(item => item[0]),
        axisLine: { lineStyle: { color: '#000000' } },
        axisLabel: {
          margin: 15 
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        scale: true,
        axisLine: { lineStyle: { color: '#000000' } },
        splitLine: { show: false },
        axisLabel: {
          margin: 10 
        },
        axisTick: {
          show: false
        }
      },
      {
        scale: true,
        gridIndex: 1,
        axisLine: { lineStyle: { color: '#000000' } },
        splitLine: { show: false },
        axisLabel: {
          margin: 10 
        },
        axisTick: {
          show: false
        }
      }
    ],
    dataZoom: [
      {
        type: 'inside',
        xAxisIndex: [0, 1],
        start: 50,
        end: 100
      },
      {
        show: true,
        xAxisIndex: [0, 1],
        type: 'slider',
        top: '85%',
        start: 50,
        end: 100
      }
    ],
    series: [
      {
        name: 'Candlestick',
        type: 'candlestick',
        data: candlestickData.map(item => [item[1], item[2], item[3], item[4]]),
        itemStyle: {
          color: function(params) {
            return params.value[1] < params.value[3] ? '#00FF00' : '#FF0000';
          },
          color0: '#FF0000',
          borderColor: '#00FF00',
          borderColor0: '#FF0000'
        }
      },
      {
        name: 'Volume',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: volumeData.map(item => item[1]),
        itemStyle: {
          color: function(params) {
            return params.value >= 0 ? '#00FF00' : '#FF0000';
          }
        }
      }
    ]
  };

const BinanceChart = () => {
  return (
    <div className="BinanceChartDashboard">
         <div className="DashboardContainer">
             <div className="candlestick-chart-container">
                <ReactECharts option={option} style={{ height: '500px', width: '100%' }} />
             </div>
        </div>
    </div>
  );
};

export default BinanceChart;
