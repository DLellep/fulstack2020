import ReactDOM from "react-dom";
import React, { useState } from 'react'
const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allVotes = good + neutral + bad

  const Statistics = (props) => {
    if(allVotes==0) {
      return (
        <div><h1>statistics</h1>
          <p>{allVotes} votes have been given</p>
        </div>
      )
    }
    return (
      <div>
      <h1>statisitics</h1>
      <p>Good = {props.good}</p>
      <p>Neutral = {props.neutral}</p>
      <p>Bad =  {props.bad}</p>
      <p>Amount of votes  =  {props.allVotes}</p>
      <p>Positive votes = {(100 / props.allVotes) * props.good + " %"}</p>
      </div>
    )
  }



  return (
    <div class="ispentwaytoomuchtimefiguringoutwhythisisnotworkinganditturnsoutijustneedaparentelement">
      <h1>feedbck</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} allVotes={good+neutral+bad}/>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));