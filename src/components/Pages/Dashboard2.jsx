import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar"
import PageIndicator from "../PageIndicator/PageIndicator"
import {DashboardItems} from "../DBMS/DashboardItems2.js";
import "../Pagecss/BulkUpload.css";
import "../Pagecss/UserProfile.css";

const Dashboard2 = () =>
{
  return(
    <div>
      <Navbar />
        <div className = "Status">
          <h1 className = "StatusText">Dashboard</h1>
        </div>
      <div className ="mainBody">
        <div className="grid-container1">
          {DashboardItems.map((item, index) => {
                        return (
                          <div className =" grid-item1 btn-border-2" onclick="location.href='{item.title}';">
                            <a className="dashtext" href={item.url} >{item.title}</a>
                          </div>
                        )
                    })}
        </div>
      </div>
    </div>

  )
}
export default Dashboard2;
