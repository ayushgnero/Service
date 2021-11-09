import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar";
import PageIndicator from "../PageIndicator/PageIndicator";
import '../Pagecss/UserProfile.css';
import axios from 'axios';
import '../Pagecss/BulkUpload.css';
import {DashboardItems} from "../DBMS/DashboardItems.js";
import DropZone from '../dropzone/DropZone';
import Dropzone from 'react-dropzone'


class bulkupload extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      fileName:"",
      class:"",
      subject:"",
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
          <h1 className = "StatusText">Bulk Upload</h1>
          <h3 className = "StatusText">Upload</h3>
        </div>
        
          <div class="mainback1">
              <DropZone/>
          <form ref='uploadForm' 
                id='uploadForm' 
                action='http://localhost:8080/file/upload' 
                method='post' 
                encType="multipart/form-data"
                >
              
              <input ref={(input) => { this.inpuElement = input;}} onChange={this.elementChange} className="inputfile" name="sampleFile" id="file" type="file" accept=".png"/>
              <label className ="b5" for="file">Choose a file</label>
              <input className ="b6" type='submit' value='Upload!' />
              <label htmlFor="file">{file}</label>
              </form>     
          </div>  
      </div>
    )
  }
}

export default bulkupload;
