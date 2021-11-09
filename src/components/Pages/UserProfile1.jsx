import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar"
import PageIndicator from "../PageIndicator/PageIndicator"
import '../Pagecss/UserProfile.css';
import {ReactSession} from 'react-client-session';

// import {UserDetails} from "../DBMS/Users2.js";
const UserProfile1 = () =>
{
  return (
    <div className="App">

      <Navbar />
      <div className = "Status">
          <h1 className = "StatusText">Profile</h1>
        </div>      <div className="mainBody1">
        <div className="userDisplay">
        <img  class = "img" src = "https://wallpaperaccess.com/full/1134174.jpg" />
        <h1 className = "Username">{JSON.parse(sessionStorage.getItem("user")).name}</h1>
            <h3 className = "UserEmail">{JSON.parse(sessionStorage.getItem("user")).regno}</h3>
        </div>
        <div className = "UserDetails">
          <div className ="Left">
            <p className = "Head-L">Gender</p>
            <h2 className = "Content-L">{JSON.parse(sessionStorage.getItem("user")).gender}</h2>
            <hr className = "Underline-L"></hr>
            <p className = "Head-L">Address</p>
            <h2 className = "Content-L">{JSON.parse(sessionStorage.getItem("user")).address}</h2>
            <hr className = "Underline-L"></hr>
            <p className = "Head-L">Member Type</p>
            <h2 className = "Content-L">{JSON.parse(sessionStorage.getItem("user")).role}</h2>
            <hr className = "Underline-L"></hr>
          </div>
          <div className="Right">
            <p className = "Head-R">Phone Number</p>
            <h2 className = "Content-R">{JSON.parse(sessionStorage.getItem("user")).phone}</h2>
            <hr className = "Underline-R"></hr>
            <p className = "Head-R">City</p>
            <h2 className = "Content-R">{JSON.parse(sessionStorage.getItem("user")).city}</h2>
            <hr className = "Underline-R"></hr>
            <p className = "Head-R">Birth Date</p>
            <h2 className = "Content-R">{JSON.parse(sessionStorage.getItem("user")).bitrthdate}</h2>
            <hr className = "Underline-R"></hr>
          </div>
        </div>


      </div>
    </div>
  );
}
export default UserProfile1;
