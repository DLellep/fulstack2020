import ReactDOM from "react-dom";
import React, { useState } from 'react'
const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allVotes = good + neutral + bad

  return (
    <div class="ispentwaytoomuchtimefiguringoutwhythisisnotworkinganditturnsoutijustneedaparentelement">
      <h1>feedbck</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <h1>statisitics</h1>
      <p>Good = {good}</p>
      <p>Neutral = {neutral}</p>
      <p>Bad =  {bad}</p>
      <p>Amount of votes  =  {allVotes}</p>
      <p>Positive votes = {(100 / allVotes) * good + " %"}</p>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));