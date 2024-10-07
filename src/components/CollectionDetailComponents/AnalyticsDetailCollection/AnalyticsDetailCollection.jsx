import React from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./AnalyticsDetailCollection.css"

const AnalyticsDetailCollection = () => {
  return (
    <div className="AnalyticsDetailCollection">
      <div className="AnalyticsDetailCollection_filter">
        <div className="container_bars_analytics">
          <FaBars className='icon_bars_analytics'/>
        </div>
        <div className="container_search_analytics">
          <input type="search" placeholder='Search' />
          <IoMdSearch className='icon_search_analytics_detail'/>
        </div>
        <div className="container_filter_date_analytics">
          <p>Last 7 days</p>
          <RiArrowDropDownLine className='icon_dropdown_filter_date_analytic'/>
        </div>
      </div>


      <div className="AnalyticsDetailCollection_body">
        <div className="AnalyticsDetailCollection_body_left">
          <div className="dropdown_analytics_con_left">
            <p>Category</p>
            <div className="number_dropdown_analytics">
              <p>37</p>
              <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

          <div className="dropdown_analytics_con_left">
            <p>Grader</p>
            <div className="number_dropdown_analytics">
              <p>17</p>
               <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

          <div className="dropdown_analytics_con_left">
            <p>Set</p>
            <div className="number_dropdown_analytics">
              <p>500</p>
              <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

          <div className="dropdown_analytics_con_left">
            <p>Grade</p>
             <div className="number_dropdown_analytics">
              <p>38</p>
              <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>
          
          <div className="dropdown_analytics_con_left">
            <p>Year</p>
            <div className="number_dropdown_analytics">
              <p>106</p>
               <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

           <div className="dropdown_analytics_con_left">
            <p>Event</p>
            <div className="number_dropdown_analytics">
              <p>32</p>
             <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

           <div className="dropdown_analytics_con_left">
            <p>Language</p>
            <div className="number_dropdown_analytics">
              <p>14</p>
              <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

           <div className="dropdown_analytics_con_left">
            <p>Card number</p>
            <div className="number_dropdown_analytics">
              <p>106</p>
             <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>
          <div className="dropdown_analytics_con_left">
            <p>Title/PKMN</p>
            <div className="number_dropdown_analytics">
              <p>500</p>
              <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

          <div className="dropdown_analytics_con_left">
            <p>Card Type</p>
            <div className="number_dropdown_analytics">
              <p>106</p>
              <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

          <div className="dropdown_analytics_con_left">
            <p>Property</p>
            <div className="number_dropdown_analytics">
              <p>106</p>
             <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>
          
          <div className="dropdown_analytics_con_left">
            <p>Title/Subject</p>
            <div className="number_dropdown_analytics">
              <p>106</p>
             <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

          <div className="dropdown_analytics_con_left">
            <p>State</p>
            <div className="number_dropdown_analytics">
              <p>106</p>
             <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>

          <div className="dropdown_analytics_con_left">
            <p>Serial</p>
            <div className="number_dropdown_analytics">
              <p>106</p>
         <RiArrowDropDownLine className='icon_dropdown_analytic_con_left'/>
            </div>
          </div>
        </div>

        <div className="AnalyticsDetailCollection_body_right">
          <div className="container_analytics_body_right">
           <div className="thong_ke_volume_sales_floor_price">
            <div className="thongke_volume">
              <p className='title_thongke'>Volume</p>
              <p className='value_thongke'>193 ETH</p>
              <p className={`percent_thongke ${-9 < 0 ? 'negative' : 'positive'}`}>-9%</p>
            </div>
            <div className="thongke_sales">
              <p className='title_thongke'>Sales</p>
              <p className='value_thongke'>13,740</p>
              <p className={`percent_thongke ${-3 < 0 ? 'negative' : 'positive'}`}>-3%</p>
            </div>
            <div className="thongke_floor_price">
              <p className='title_thongke'>Floor price</p>
              <p className='value_thongke'>0.0023 ETH</p>
              <p className={`percent_thongke ${17 >= 0 ? 'positive' : 'negative'}`}>+17%</p>
            </div>
          </div>



            <div className="chart_analytics_collection">

              <div className="chart_con">
                <div className="title_volume_and_price_chart">
                  <p>Price and Price</p>
                </div>
                <div className="chart_volume_and_price_con">
                  <p>đây là biểu đồ </p>
                </div>
              </div>

              <div className="chart_con">
                <div className="title_floor_price_chart">
                  <p>Floor price</p>
                </div>
                <div className="chart_floor_price_con">
                  <p>đây là biểu đồ </p>
                </div>
              </div>

              <div className="chart_con">
                <div className="title_listing_chart">
                  <p>Listings</p>
                  <div className="filter_price_listing_chart">
                   <p>Price</p>
                   <RiArrowDropDownLine className='icon_dropdown_chart_con'/>
                  </div>
                </div>
                <div className="chart_listing_con">
                  <p>đây là các item listing </p>
                </div>
              </div>


              <div className="chart_con">
                <div className="title_sales_char">
                  <p>Sales</p>
                  <div className="checkbox_sales_char">
                    <input type="checkbox" name="" id="" />
                    <p>Outliers</p>
                    
                  </div>
                </div>
                <div className="chart_sales_con">
                  <p>đây là biểu đồ </p>
                </div>
              </div>


              <div className="chart_con">
                <div className="title_sales_item_char">
                  <p>Sales</p>
                </div>
                <div className="item_sales_con">
                  <p>đây là list item</p>
                </div>
              </div>


              <div className="chart_con">
                <div className="title_price_distribution_chart">
                  <p>Price Distribution</p>
                  <div className="dropdown_price_distribution">
                     <p>0.0001 ETH</p>
                   <RiArrowDropDownLine className='icon_dropdown_chart_con'/>
                  </div>
                </div>
                <div className="char_price_distribution_con">
                  <p>đây là biểu đồ</p>
                </div>
              </div>

              <div className="chart_con">
                <div className="title_owner_distribution_char">
                  <p>Owner Distribution</p>
                  <p className='sub_title_chart_con'>8,585</p>
                </div>
                <div className="chart_owner_distribution_con">
                  <p>đây là biểu đồ</p>
                </div>
              </div>

              <div className="chart_con">
                <div className="title_owner_char">
                  <p>Owner</p>
                  <p className='sub_title_chart_con'>Top 1000</p>
                </div>
                <div className="char_owner_con">
                  <p>đây là biểu đồ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDetailCollection