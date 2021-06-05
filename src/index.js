import ReactDOM from "react-dom";
import React, { useState } from 'react'
const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allVotes = good + neutral + bad

   //display a single statistic that is used by statistics

   const Statistic = (props) => {
    return (
      <p>{props.text}{props.value}</p>
    )
  }




// all the statistics that are displayed, but read from a different component

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
      <Statistic  text="Good = " value={props.good}/>
      <Statistic text="Neutral = " value={props.neutral}/>
      <Statistic  text="Bad = " value={props.bad}/>
      <Statistic text="Amount of votes =" value={props.allVotes}/>
      <Statistic  text="Positive votes = " value= {(100 / props.allVotes) * props.good + " %"}/>
      </div>
    )
  }



  return (
    <div class="ispentwaytoomuchtimefiguringoutwhythisisnotworkinganditturnsoutijustneedaparentelement">
      <h1>feedbck</h1>
      <Button text="good" value2={good} newValue={setGood}/>
      <Button text="neutral" value2={neutral} newValue={setNeutral}/>
      <Button text="bad" value2={bad} newValue={setBad} />      
      <Statistics good={good} neutral={neutral} bad={bad} allVotes={good+neutral+bad}/>
      </div>
  );
};

// defining buttons
const Button = (props) => {
  return (
    <button

    onClick={() => 
      props.newValue(props.value2 + 1)}>

  {props.text}</button>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));