import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowDropDownLine,RiUserAddFill } from "react-icons/ri";
import { FaBell ,FaChartLine,FaCartArrowDown} from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import "./HomeDashboard.scss"

const HomeDashboard = () => {
    const data = [
    { name: 'Level 1', value: 4000 },
    { name: 'Level 2', value: 3000 },
    { name: 'Level 3', value: 2000 },
    { name: 'Level 4', value: 2780 },
    { name: 'Level 5', value: 1890 },
  ];


const topProducts = [
  { id: 1, name: "Product A", popularity: 85, sales: '80%' },
  { id: 2, name: "Product B", popularity: 25, sales: '62%' },
  { id: 3, name: "Product C", popularity: 90, sales: '30%' },
  { id: 4, name: "Product D", popularity: 60, sales: '24%' },
];

  const customerData = [
    { name: 'Customer A', fulfillment: 80 },
    { name: 'Customer B', fulfillment: 60 },
    { name: 'Customer C', fulfillment: 90 },
    { name: 'Customer D', fulfillment: 75 },
  ];

  const CustomLegend = () => {
  return (
    <div style={{ marginTop: '10px', textAlign: 'center' }}>
      <span style={{ marginRight: '10px', color: 'rgb(201, 53, 102)' }}>● Value</span>
    </div>
  );
};
  return (
    <div className="home_dashboard_container">
      <div className="body_home_dashboard">
        <div className="sales_summary_home_dashboard">
          <h3>Today's Sales</h3>
          <p>Sales Summary</p>
          <div className="sales_summary_container">
            <div className="sales_summary_group1">
              <FaChartLine className='icon_sale_summary'/>
              <h3>$5K</h3>
              <h4>Total Sales</h4>
              <p>+10% from yesterday</p>
            </div>

             <div className="sales_summary_group2">
              <FaCartArrowDown className='icon_sale_summary'/>
              <h3>500</h3>
              <h4>Total Order</h4>
              <p>+8% from yesterday</p>
            </div>

             <div className="sales_summary_group3">
              <IoBagCheckSharp className='icon_sale_summary'/>
              <h3>9</h3>
              <h4>Product Sold</h4>
              <p>+2% from yesterday</p>
            </div>

             <div className="sales_summary_group4">
              <RiUserAddFill className='icon_sale_summary'/>
              <h3>12</h3>
              <h4>New Customer</h4>
              <p>+3% from yesterday</p>
            </div>
          </div>
          
        </div>
        <div className="chart_body_home_dashboard">
          <div className="chart_level_home_dashboard">
            <div className="title_chart_con_db">
              <p>Level</p>
            </div>
            <div className="chart_level_con">
              <BarChart width={280} height={250} data={data}>
                <XAxis dataKey="name" hide />
                <Tooltip />
                <Legend content={<CustomLegend />} />
                <Bar 
                  dataKey="value" 
                  fill="rgb(201, 53, 102)" 
                  barSize={20} 
                  radius={[5, 5, 0, 0]} 
                />
              </BarChart>
            </div>
          </div>

      <div className="chart_top_products_home_dashboard">
        <div className="title_chart_con_db">
          <p>Top products</p>
        </div>
        <div className="chart_top_product_con">
          <div className="item_chart_top_product_main">
            <p className='stt'>#</p>
            <p className='name'>Name</p>
            <p className='popularity'>Popularity</p>
            <p className='sale'>Sales</p>
          </div>
          {topProducts.map(product => (
            <div className="item_chart_top_product" key={product.id}>
              <p className='stt'>{product.id}</p>
              <p className='name'>{product.name}</p>
              <div className='popularity' style={{ width: `${product.popularity}%`, backgroundColor: 'rgb(201, 53, 102)', borderRadius: '5px', height: '20px' }}></div>
              <p className='sale'>{product.sales}</p>
            </div>
          ))}
        </div>
      </div>



          <div className="chart_customer_fulfillment_home_dashboard">
            <div className="title_chart_con_db">
              <p>Customer Fulfillment</p>
            </div>
            <div className="chart_customer_fulfillment_con">
                <p>đây là biểu đồ</p>
            </div>
          </div>

          <div className="chart_earnings_home_dashboard">
            <div className="title_chart_con_db">
              <p>Earnings</p>
            </div>
            <div className="chart_earnings_con">
              <p>đây là biểu đồ</p>
            </div>
          </div>

          <div className="chart_visitor_insights_home_dashboard">
            <div className="title_chart_con_db">
              <p>Visitor Insights</p>
            </div>
            <div className="chart_visitor_insights_con">
              <p>đây là biểu đồ</p>
            </div>
          </div>
        

        <div className="trending_now_body_home_dashboard">
          <div className="title_trending_now_con">
            <p>Trending now</p>
          </div>
          <div className="content_trending_now_con">
            <div className="trending_now_group_db">
              <img src="../img/collection.png" alt="" />
              <div className="detail_trending_now_group">
                <h3>Home decord rage</h3>
                <p>thông tin của nft hay collection gì đó </p>
              </div>
              <div className="detail_trending_now_group">
                <h3>Home decord rage</h3>
                <p>thông tin của nft hay collection gì đó </p>
              </div>
            </div>
             <div className="trending_now_group_db">
              <img src="../img/collection.png" alt="" />
              <div className="detail_trending_now_group">
                <h3>Home decord rage</h3>
                <p>thông tin của nft hay collection gì đó </p>
              </div>
              <div className="detail_trending_now_group">
                <h3>Home decord rage</h3>
                <p>thông tin của nft hay collection gì đó </p>
              </div>
            </div>
             <div className="trending_now_group_db">
              <img src="../img/collection.png" alt="" />
              <div className="detail_trending_now_group">
                <h3>Home decord rage</h3>
                <p>thông tin của nft hay collection gì đó </p>
              </div>
              <div className="detail_trending_now_group">
                <h3>Home decord rage</h3>
                <p>thông tin của nft hay collection gì đó </p>
              </div>
            </div>
             <div className="trending_now_group_db">
              <img src="../img/collection.png" alt="" />
              <div className="detail_trending_now_group">
                <h3>Home decord rage</h3>
                <p>thông tin của nft hay collection gì đó </p>
              </div>
              <div className="detail_trending_now_group">
                <h3>Home decord rage</h3>
                <p>thông tin của nft hay collection gì đó </p>
              </div>
            </div>
          </div>
        </div>

        <div className="customer_home_dashboard">
          <div className="title_search_customer_con">
            <p>Customer</p>
            <div className="search_customer_ccon">
              <input type="search" placeholder='Search..' />
              <IoMdSearch className='icon'/>
            </div>
          </div>

          <div className="detail_table_customer_con">
              <p>đây là bảng gì gì đó</p>
          </div>
          <div className="pagination_customer_detail_con">
            <p>Showing 1-4 out of 15 data</p>
            <p>nút phân trang</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDashboard
