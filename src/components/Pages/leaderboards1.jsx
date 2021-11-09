import React,{Component} from 'react';
import PageIndicator from "../PageIndicator/PageIndicator";
import Navbar from "../Navbar/Navbar"
import {leaderboard} from "../DBMS/leaderboard.js";
import {questions} from "../DBMS/questions.js";
import {Line} from 'react-chartjs-2'

import Chart from "../Chart/Chart";
import Scrollbar from 'react-scrollbars-custom';
import { hide } from '@popperjs/core';
class leaderboards1 extends Component{
  constructor(props){

    super(props);
    this.state = {
      temp:100,
      set:[],
      avg:0,
      markssubavg:[],
      i:0,
      marks:[],
      j:leaderboard,
      z:questions["topic"][0].questions,
      Correct: props.score,
      time:{
        labels: ['Question', 'Time'],

        datasets:[
          {
            label:'Average Time',
            data:[],
            backgroundColor:[
              'rgba(54, 255, 54, 0.9)',
              'rgba(255, 99, 132, 0.9)',
            ]
          }
        ]
      },
      chartData:{
        labels: ['Correct', 'InCorrect'],

        datasets:[
          {
            label:'Results',
            data:[
              leaderboard[0].marks,
              questions["no_of_questions"]-leaderboard[0].marks,
              0
            ],
            backgroundColor:[
              'rgba(54, 255, 54, 0.9)',
              'rgba(255, 99, 132, 0.9)',
            ]
          }
        ]
      }
    }
  }
  static defaultProps = {
    Correct:0,
  }
  componentWillUnmount(){
    this.getChartData();
    console.log(this.state.Correct);
  }
  getChartData(){
    var i;
    for (i = 0; i<questions["no_of_questions"];i++)
    {
      this.state.time["datasets"][0].data.push(questions["topic"][0].questions[i].time);
      console.log(questions["topic"][0].questions[i].time);
    }
    this.setState({
      chartData:{},
      time:[]
    })
  }
  renderTableData() {
      return this.state.z.map((table, index) => {
         const { sno, time} = table //destructuring
         return (
            <tr key={sno}>
               <td>{sno}</td>
               <td>{time}</td>
            </tr>
         )
      })
   }
  sort() {
    let i = 0;
    let j=0 ;
    let k = this.state.j.length;
    let temp = 0;
    // for (i = 0; i<k ;i = i +1)
    // {
    //   for(j=1; j < (k-i); j++){
    //     {
    //       if(this.state.j[j-1].marks < this.state.j[j].marks)
    //       {
    //         temp = this.state.j[j-1];
    //         this.state.j[j-1] = this.state.j[j];
    //         this.state.j[j] = temp;
    //       }
    //     }
    // }
  // }
      return (
        <tr key={JSON.parse(sessionStorage.getItem("user")).regno}>
        <td>{JSON.parse(sessionStorage.getItem("user")).regno}</td>
        <td>{JSON.parse(sessionStorage.getItem("user")).name}</td>
        <td>{JSON.parse(sessionStorage.getItem("user")).Class}</td>
            <td>{this.state.j[0].marks}</td>
         </tr>
       )

  }

  render(){const user = JSON.parse(sessionStorage.getItem("user"));
  var markssub1 =[];
  var markssubavg =[];
  const markssub2 =[];
  const markssub3 =[];
  const markssub4 =[];
  var avg = 0;
  var avg2 = 0;

  var set = [];
  var set1 = [];
  const length = user.marks.length;
  for (let i = 0; i < length; i++){
    set.push(user.marks[i].subject);
    set1.push(user.marks[i].examName);
  }
  set = new Set(set)
  set1 = new Set(set1)
  let sets = Array.from(set);
  this.state.set = sets
  let sets1 = Array.from(set1);
  const setlen = sets.length;
  var marksub = new Array(setlen);
  for (let i = 0; i < setlen; i++)
  { 
  marksub [i] = [];
  }
  for (let i = 0; i < setlen; i++)
  { 
    for (let j = 0; j < length; j++)
    {
      if(user.marks[j].subject === sets[i])
      {
        markssub1.push(user.marks[j].marks);
        avg += parseInt(user.marks[j].marks, 10);
        avg2+=parseInt(user.marks[j].marks, 10);
      }
      
    }
    
    marksub[i].push(markssub1);
    markssubavg.push(avg2/(length/setlen));
    markssub1 = [];
    avg2=0;
    // if(user.marks[i].subject === "Maths")
    // markssub1.push(user.marks[i].marks);
    // else if(user.marks[i].subject === "Science")
    // markssub2.push(user.marks[i].marks);
    // else if(user.marks[i].subject === "Hindi")
    // markssub3.push(user.marks[i].marks);
    // else if(user.marks[i].subject === "English")
    // markssub4.push(user.marks[i].marks);
  } 
  
  avg /= length;
  avg = parseInt(avg,10);
  this.state.avg=avg
  this.state.markssubavg = markssubavg;
  let k = leaderboard;
  let m = questions["topic"][0].questions;
    return(
      <div>
        <Navbar/>
          <div className = "Status">
            <h1 className = "StatusText">Results</h1>
          </div>
          <div className = "chart2">
          <Line
          data={
            {
              labels: sets1,
              datasets: [
                {
                  label: sets[0],
                  data: marksub[0][0],
                  fill: false,
                  backgroundColor: 'rgb(198,213,126)',
                  borderColor: 'rgb(198,213,126)',
                },
                {
                  label: sets[1],
                  data: marksub[1][0],
                  fill: false,
                  backgroundColor: 'rgb(213, 126, 126)',
                  borderColor: 'rgb(213, 126, 126)',
                },
                {
                  label: sets[2],
                  data: marksub[2][0],
                  fill: false,
                  backgroundColor: 'rgb(246,215,167)',
                  borderColor: 'rgb(246,215,167)',
                },
                {
                  label: sets[3],
                  data: marksub[3][0],
                  fill: false,
                  backgroundColor: 'rgb(135,170,170)',
                  borderColor: 'rgb(135,170,170)',
                },
              ],
            }
          }
          height={200}
          width={10}
          options={{
            maintainAspectRatio:false,
            scales: {
              yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }]
              }
          }}
        />
        </div>  
          <Chart chartData={this.state.chartData}legendPosition="bottom"/>
          
          <div class="mainback3">
            <div  class="questions2" >
              <Scrollbar>
              <table id="table">
                <tr>
                  <th>Registration Number</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Marks</th>
                </tr>
                <tbody>
                  {this.sort()}
               </tbody>
              </table>
              <table id = "table1" class="table1">
                <tr>
                  <th>Question Number</th>
                  <th>Time</th>
                </tr>
                <tbody>
                  {this.renderTableData()}
               </tbody>
              </table>
              </Scrollbar>S
            </div>
          </div>
      </div>
    )
  }
}

export default leaderboards1;