import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar"
import PageIndicator from "../PageIndicator/PageIndicator"
import {DashboardItems} from "../DBMS/DashboardItems.js";
import "../Pagecss/BulkUpload.css";
import "../Pagecss/UserProfile.css";

class resource extends React.Component
{
  constructor(props){
  super(props);
  this.state ={
    fileName:""
  };
  this.inpuElement = null;
  this.elementChange = this.elementChange.bind(this);
  }
  elementChange(){
    console.log(this.inpuElement.files[0].name);
    this.setState({ fileName: this.inpuElement.files[0].name });
  }
  render(){
  const { fileName } = this.state;
  let file = null;

   file = fileName 
      ? ( <span>File Selected - {fileName}</span>) 
      : ( <span>Choose a file...</span> );
  return(
    <div>
      <Navbar />
        <div className = "Status">
          <h1 className = "StatusText">Resourses</h1>
        </div>
      <div className ="mainBody">
        <div className="grid-container1">
        <form ref='uploadForm' id='uploadForm' action='https://xenoclass.herokuapp.com/upload' method='post' encType="multipart/form-data">
              
              <input ref={(input) => { this.inpuElement = input;}} onChange={this.elementChange} className="inputfile" name="sampleFile" id="file" type="file" accept=".png"/>
              <label className ="b5" for="file">Choose a file</label>
              <input className ="b6" type='submit' value='Upload!' />
              
              <label htmlFor="file">{file}</label>
              </form>  
        </div>
      </div>
    </div>

  )
}
}
export default resource;
