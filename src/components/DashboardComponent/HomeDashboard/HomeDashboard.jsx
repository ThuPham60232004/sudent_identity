import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowDropDownLine,RiUserAddFill } from "react-icons/ri";
import { FaBell ,FaChartLine,FaCartArrowDown} from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

import "./HomeDashboard.css"

const HomeDashboard = () => {
  return (
    <div className="home_dashboard_container">
      <div className="navbar_home_dashboard">
        <div className="search_input_home_dashboard">
          <input type="search" placeholder='Search here..'/>
            <IoSearchSharp/>
        </div>
        <div className="feature_user_home_dashboard">
          <div className="announcement_home_dashboard">
            <FaBell/>
          </div>
          <div className="info_user_home_dashboard">
            <img src="../img/collection.png" alt="" />
          </div>
          <div className="dropdown_home_dashboard">
            <RiArrowDropDownLine/>
          </div>
        </div>
      </div>
      <div className="body_home_dashboard">
        <div className="sales_summary_home_dashboard">
          <h3>Today's Sales</h3>
          <p>Sales Summary</p>
          <div className="sales_summary_container">
            <div className="sales_summary_group">
              <FaChartLine/>
              <h3>$5K</h3>
              <div className="title_sales_summary_group">
                <h4>Total Sales</h4>
                <p>+10% from yesterday</p>
              </div>
            </div>

            <div className="sales_summary_group">
              <FaCartArrowDown/>
              <h3>500</h3>
              <div className="title_sales_summary_group">
                <h4>Total Order</h4>
                <p>+8% from yesterdayy</p>
              </div>
            </div>

            <div className="sales_summary_group">
              <IoBagCheckSharp/>
              <h3>9</h3>
              <div className="title_sales_summary_group">
                <h4>Product Sold</h4>
                <p>+2% from yesterday</p>
              </div>
            </div>

            <div className="sales_summary_group">
              <RiUserAddFill/>
              <h3>12</h3>
              <div className="title_sales_summary_group">
                <h4>New Customer</h4>
                <p>+3% from yesterday</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="chart_body_home_dashboard">
          <div className="chart_level_home_dashboard">
            <div className="title_chart_con_db">
              <p>Level</p>
            </div>
            <div className="chart_level_con">
              <p>đây là biểu đồ</p>
            </div>
          </div>

          <div className="chart_top_products_home_dashboard">
            <div className="title_chart_con_db">
              <p>Top products</p>
            </div>
            <div className="chart_top_product_con">
              <p>đây là biểu đồ</p>
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
            </div>
            <div className="trending_now_group_db">
              <img src="../img/collection.png" alt="" />
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
            </div>
          </div>
        </div>

        <div className="customer_home_dashboard">
          <div className="title_search_customer_con">
            <p>Customer</p>
            <div className="search_customer_con">
              <input type="search" placeholder='Search..' />
              <IoMdSearch/>
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
  )
}

export default HomeDashboard
