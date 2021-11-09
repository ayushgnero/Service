import React,{Component} from 'react';
import Navbar from "../Navbar/Navbar";
import PageIndicator from "../PageIndicator/PageIndicator";
import DropZone from '../dropzone/DropZone';
import axios from 'axios'
class bulkuser extends React.Component
{
  constructor(){
        super();
        this.state={
          name:'',
          regno:'',
          password:'',
          Class:'',
          role:'',
          gender:"",
          address:"",
          phone:"",
          city:"",
          error:"",
          bitrthdate:""
        }
              this.changeFirst = this.changeFirst.bind(this)
      this.changeLast = this.changeLast.bind(this)
      this.changeclass = this.changeclass.bind(this)
      this.changepassw = this.changepassw.bind(this)
      this.changeacc = this.changeacc.bind(this)
      this.changegen = this.changegen.bind(this)
      this.add = this.add.bind(this)
      this.ph = this.ph.bind(this)
      this.city = this.city.bind(this)
      this.bitrthdate = this.bitrthdate.bind(this)
      this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    
      changeFirst(event){
      this.setState({
        name:event.target.value,
      })
    }
    bitrthdate(event){
      this.setState({
        bitrthdate:event.target.value,
      })
    }
    city(event){
      this.setState({
        city:event.target.value,
      })
    }
    changegen(event){
      this.setState({
        gender:event.target.value,
      })
    }
    add(event){
      this.setState({
        address:event.target.value,
      })
    }
    ph(event){
      this.setState({
        phone:event.target.value,
      })
    }
    changeLast(event){
      this.setState({
        regno:event.target.value,
      })
    }
     changeclass(event){
      this.setState({
        Class:event.target.value,
      })
    }
    changepassw(event){
      this.setState({
        password:event.target.value,
      })
    }
    changeacc(event){
      this.setState({
        role:event.target.value,
      })
    }
    // Submit Form
    submitForm(event){
      event.preventDefault()
      const registered = {
        name:this.state.name,
        regno:this.state.regno,
        role:this.state.role,
        Class: this.state.Class,
        password: this.state.password,
        gender: this.state.gender,
        address: this.state.address,
        phone: this.state.phone,
        city: this.state.city,
        bitrthdate: this.state.bitrthdate,
      }
      axios.post('http://localhost:4000/Register', registered)
      .then((res) => {
        this.state.error = res.data.message;
        console.log(this.state.error,res.data.message);
        var x = document.getElementById("snackbar");
        
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      })
      
      this.setState({
        name:"",
        regno:"",
        role:"",
        Class: "",
        password: "",
        gender:"",
        address:"",
        phone:"",
        city:"",
        bitrthdate:""
        })
    }
  render(){
    document.body.style.overflow = "hidden"
  return(
    <div>
    <Navbar />
    <div className = "Status">
      <h1 className = "StatusText">Admin Dashboard</h1>
    </div>
    <div className="mainBody3">
      <h1></h1>
      <div className ="form">
        <h2 className="headbulkuser">
          STUDENTS LIST
        </h2>
        <h3 className= "subbulkuser">
        Filter the results based on the following
        </h3>
        <h3  className= "subbulkuser">
        the following parameters
        </h3>
        <div className= "grid-container2">
          <div className="grid-item2">
          <p className="titlebulkuser">Full Name
          </p>
          <input value={this.state.name} name="name" onChange={this.changeFirst} type="text" className="inputbulkuser"></input>
          </div>
          
          <div className="grid-item2">
          <p className="titlebulkuser">Registration Number
            </p>
          <input value={this.state.regno} name="regno" onChange={this.changeLast} type="text" className="inputbulkuser"></input>

          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Class
          </p>
          <input value={this.state.Class} name="Class" onChange={this.changeclass} type="text" className="inputbulkuser"></input>

          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Role
          </p>
          <input value={this.state.role} name="role" onChange={this.changeacc} type="text" className="inputbulkuser"></input>
          </div>
        
          <div className="grid-item2">
          <p className="titlebulkuser">Password
            </p>
          <input value={this.state.password} name="password" onChange={this.changepassw} type="password" className="inputbulkuser"></input>

          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Gender
          </p>
          <input value={this.state.gender} name="gender" onChange={this.changegen} type="text" className="inputbulkuser"></input>
          </div>
          
          <div className="grid-item2">
          <p className="titlebulkuser">Phone Number
            </p>
          <input value={this.state.phone} name="phone" onChange={this.ph} type="text" className="inputbulkuser"></input>

          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">Address
          </p>
          <input value={this.state.address} name="address" onChange={this.add} type="text" className="inputbulkuser"></input>

          </div>
          <div className="grid-item2">
          <p className="titlebulkuser">City
          </p>
          <input value={this.state.city} name="city" onChange={this.city} type="text" className="inputbulkuser"></input>
          </div>
        
          <div className="grid-item2">
          <p className="titlebulkuser">Birth-Date
            </p>
          <input value={this.state.bitrthdate} name="bitrthdate" onChange={this.bitrthdate} type="text" className="inputbulkuser"></input>

          </div>
        </div>
        <div className="formsbutton">
          <div className="grid-container1">

            <input type="submit" onClick={this.submitForm} className="grid-item3 sub" />

          </div>
        </div>
      </div>
      <div id="snackbar">{this.state.error}</div>

      <div>
        <div className="content1">
      
        </div>
      </div>
      </div>
    </div>
    )
  }
}
export default bulkuser;
