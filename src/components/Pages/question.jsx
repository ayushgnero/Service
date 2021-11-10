import React,{Component} from 'react';
import PageIndicator from "../PageIndicator/PageIndicator";
// import Timer from "../Timer/timer";
import {questions} from "../DBMS/questions.js";
import {DashboardItems} from "../DBMS/DashboardItems.js";
import {leaderboard} from "../DBMS/leaderboard.js";
import axios from "axios";
import Scrollbar from "react-scrollbars-custom";
class question extends Component{
      // const
      // const HandelQuestion = (index) => {
      //       return (this.state.i = index-1);
      //     }
      constructor(props){
        super(props);
        this.state = {
          i: 1,
          j:DashboardItems[0],
          k:JSON.parse(sessionStorage.getItem("test"))[0].topic[0].questions,
          z:leaderboard[0],
          a:JSON.parse(sessionStorage.getItem("test"))[0],
          examName:questions.name,
          subject:questions.course_id,
          flag:[],
          answer:[],
          answer1:[],
          count: 1,
          marks:0,
          regno:""
        };
        this.nextClick = this.nextClick.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.flagClick = this.flagClick.bind(this);
        this.HandelAnswer = this.HandelAnswer.bind(this);
        this.HandelQuestion = this.HandelQuestion.bind(this);
        this.Submit = this.Submit.bind(this);
      }
      HandelQuestion = (index) =>{
        //console.log(index.sno);
        //console.log(this.state.answer1);

        //if(this.state.answer1[state.i] || this.state.answer1[(state.i+1)%15])


        if(this.state.answer1[index.sno -1])
        {
          var id ='testvalue'+this.state.answer1[index.sno -1];
          document.getElementById(id).checked=true;
        }
        else
        {
          let ele1 = document.getElementById('testvalue1');
          ele1.checked = false;
          let ele2 = document.getElementById('testvalue2');
          ele2.checked = false;
          let ele3 = document.getElementById('testvalue3');
          ele3.checked = false;
          let ele4 = document.getElementById('testvalue4');
          ele4.checked = false;         
        }

        this.setState((state)=>{
          let x = document.getElementById(state.i);
          x = document.getElementById(state.i);
          x.style.backgroundColor = "#DECBB1";
          x = document.getElementById(index.sno);
          x.style.backgroundColor = "#048998";
            return {
              i: index.sno,
              j: questions[this.i]
            }

          })
      }
      HandelAnswer =(index)=>{
        this.state.answer[this.state.i-1] = this.state.k[this.state.i-1].option[index];
        this.state.answer1[this.state.i-1] = index+1;
        // console.log(index);
        // if(this.state.k[this.state.i-1].option[index].isCorrect){
        //   this.state.marks = this.state.marks+1;
          // console.log(this.state.marks);
        //}
      }
      Submit(e){
        for(var i=0;i<this.state.answer.length;i++)
        {
          if(this.state.answer[i].isCorrect){
            this.state.marks = this.state.marks+1;
        }
      }
        // console.log('Marks');
        // console.log(this.state.marks);

        
        // console.log(this.state.regno,"\t\t",this.state.marks);
        e.preventDefault();
        const marks = { 
          regno:JSON.parse(sessionStorage.getItem("user")).regno,
          examName:this.state.examName,
          subject:this.state.course_id,
          marks: this.state.marks
        }
        axios.post('https://xenoclass.herokuapp.com/append',marks)
        .then((res) => {
              console.log("uploaded");
          })
        
        this.setState({
          examName:"",
          regno:"",
          course_id:"",
          marks: ""
          })
          leaderboard[0].marks = this.state.marks;
          this.props.history.push('/leaderboards1');
      }

      componentDidMount() {
      
       let x = document.getElementById(0);
       x.style.backgroundColor = '#048998';
       x.style.color = "#f6f5f5";
       const {startCount} = this.props
        this.setState({
          count: this.state.a.duration
        })
        this.doIntervalChange()
       this.setState((state)=>
     {
       let i =0;

       let len = state.k.length;
       for (i=1;i<len+1;i++)
       {
         this.setState(prevState => ({
          flag: [...prevState.flag, 'false'],
          answer: [...prevState.flag, '0'],
          answer1: [...prevState.flag, '0']
        }));
       }
     }

      )
      }
      flagClick(){
        this.setState((state)=>{
          let x = document.getElementById(state.i);
          let temp = state.i;
          x.style.backgroundColor = "purple";
          state.flag[state.i-1] = 'true';
          return{
              i:state.i,
              flag:state.flag
          };

        })

      }
      nextClick() {
        this.setState((state) => {
          let ele1 = document.getElementById('testvalue1');
          ele1.checked = false;
          let ele2 = document.getElementById('testvalue2');
          ele2.checked = false;
          let ele3 = document.getElementById('testvalue3');
          ele3.checked = false;
          let ele4 = document.getElementById('testvalue4');
          ele4.checked = false;

          // console.log('Question No',[state.i+1]%this.state.k.length)
          // console.log('option',this.state.answer1[(state.i)%this.state.k.length]);

          if(this.state.answer1[(state.i)%this.state.k.length])
          {            
            // console.log('Answer Exist');
            // console.log(this.state.answer1[(state.i)%this.state.k.length]);
            var id ='testvalue'+this.state.answer1[(state.i)%this.state.k.length];
            // console.log(id);
            document.getElementById(id).checked=true;            
          }

          let x = document.getElementById(state.i);
          let len = state.k.length;
          if (state.i<len)
            {
              if (state.flag[state.i]!='true')
              {
                x = document.getElementById(state.i);
                x.style.backgroundColor = "#DECBB1";
                x.style.color = "#121212";
                x = document.getElementById(state.i+1);
                x.style.backgroundColor = "#048998";
                x.style.color = "#f6f5f5";
              }

              return {
                i: state.i + 1,
                j: questions[state.i]};
          }
          else
          {

              x = document.getElementById(state.i);
              x.style.backgroundColor = "#DECBB1";
              x.style.color = "#121212";
              if (state.flag[0]!='true'){
              x = document.getElementById(1);
              x.style.backgroundColor = "#048998";
              x.style.color = "#f6f5f5";
              }
            return {i: 1,
              j: questions[0]};

          }
        });
      }
      prevClick() {
        this.setState((state) => {
          let ele1 = document.getElementById('testvalue1');
          ele1.checked = false;
          let ele2 = document.getElementById('testvalue2');
          ele2.checked = false;
          let ele3 = document.getElementById('testvalue3');
          ele3.checked = false;
          let ele4 = document.getElementById('testvalue4');
          ele4.checked = false;

          if(this.state.answer1[state.i-2])
          {            
            var id ='testvalue'+this.state.answer1[state.i-2];
            document.getElementById(id).checked=true;            
          }

          let x = document.getElementById(state.i);
          let len = state.k.length;

          if (state.i > 1)
          {
            if (state.flag[state.i-1]!='true')
            {
              x = document.getElementById(state.i);
              x.style.backgroundColor = "#DECBB1";
              x.style.color = "#121212";
              x = document.getElementById(state.i - 1);
              x.style.backgroundColor = "#048998";
              x.style.color = "#f6f5f5";
              return {i: state.i - 1,
              j: questions[state.i -2]};
            }
          }
          else
          {
            x = document.getElementById(state.i);
            x.style.backgroundColor = "#DECBB1";
            x.style.color = "#121212";
            // if (state.flag[4]!='true')
            // {
            x = document.getElementById(len);
            x.style.backgroundColor = "#048998";
            x.style.color = "#f6f5f5";
          // }
            return {i: len,
              j: questions[len-1]};
          }
        });
      }
      

      doIntervalChange = () => {
        const {count} = this.state
          this.myInterval = setInterval(() => {
          this.setState(prevState => ({
            count: prevState.count - 1
          }))
          let mm = Math.floor(this.state.count/60);
          let ss = this.state.count % 60;
          document.getElementById("timer").innerHTML = `${mm}:${ss}`;
          if (this.state.count === 0)
          {
            this.Submit();
          }
          this.state.k[this.state.i - 1].time += 1;
        }, 1000)
      }
      componentWillUnmount () {
        clearInterval(this.myInterval)
      }
    render()
    {
      console.log(questions["topic"][0].questions);
      console.log("mongo",JSON.parse(sessionStorage.getItem("test"))[0].topic[0].questions);
      let temp = questions;
      let temp2 = leaderboard;
      let item = this.state.j;
      let item3 = this.state.k;
      // console.log(this.state.k[0].sno);
      let item1 = this.state.k[this.state.i-1];

      return(
      <div>
        <div className = "Status">
          <h1 className = "StatusText">{temp["name"]}</h1>
        </div>
        <div>
          <div class="mainback1">
         

            <div class="questions1001">
            <Scrollbar style={{marginTop:5 }}>
              {JSON.parse(sessionStorage.getItem("test"))[0].topic[0].questions.map((item, index) => {
                            return (
                              <div className ="grid-item1001" href={item3[index].question}  onClick={() => this.HandelQuestion(item)}>
                                <p className="dashtext1" onClick={() => this.HandelQuestion(index)}>{item3[index].question}</p>
                              </div>
                            )
                        })}
                        </Scrollbar>
            </div>
            
            <div  class="questions111">
                <h3 className="question111">{item1.question}</h3>
                <br></br>
                  <form>
                    <input className="option" type="radio" id="testvalue1" name="choose" value="testvalue1" onClick={() => this.HandelAnswer(0)}/>
                      <label className="option" for="testvalue1">{item1.option[0].option1}</label><br/>
                    <input className="option" type="radio" id="testvalue2" name="choose" value="testvalue2" onClick={() => this.HandelAnswer(1)}/>
                      <label className="option" for="testvalue2">{item1.option[1].option2}</label><br/>
                    <input className="option" type="radio" id="testvalue4" name="choose" value="testvalue3" onClick={() => this.HandelAnswer(2)}/>
                      <label className="option" for="testvalue1">{item1.option[2].option3}</label><br/>
                    <input className="option" type="radio" id="testvalue3" name="choose" value="testvalue4" onClick={() => this.HandelAnswer(3)}/>
                      <label className="option" for="testvalue2">{item1.option[3].option4}</label><br/>
                  </form>
            </div>



            <div class="qustion-uploaded">
              <div class="question-numbers">
                <h2 id = "timer"></h2>
                <h3>Questions</h3>
                <hr class="hr"></hr>
                <div className="grid-container3">
                  {JSON.parse(sessionStorage.getItem("test"))[0].topic[0].questions.map((item, index) => {
                                return (
                                  <div id={item.sno} className ="grid-item5" value={item.sno}>
                                    <p style={{fontSize:20}} className = "">{item.sno}</p>
                                  </div>
                                    // <li key={index}>
                                    //     <a className={item.cName} href={item.url}>
                                    //     {item.title}
                                    //     </a>
                                    // </li>
                                )
                            })}
                </div>

              </div>
              <button className ="b3" onClick={this.nextClick}>Next Question</button>
              <button className ="b3" onClick={this.prevClick}>Prev Question</button>
              <button className ="b3" onClick={this.Submit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )}
}
export default question;
