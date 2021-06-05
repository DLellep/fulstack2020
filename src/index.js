import React from "react";
import ReactDOM from "react-dom";
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part parts={props.p1} exs={props.ex1} />
      <Part parts={props.p2} exs={props.ex2} />
      <Part parts={props.p3} exs={props.ex3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.parts} {props.exs}
    </p>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises =
        {props.ex1 + props.ex2 + props.ex3}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const p1 = "Fundamentals of React = ";
  const ex1 = 10;
  const p2 = "Using props to pass data = ";
  const ex2 = 7;
  const p3 = "State of a component = ";
  const ex3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        p1={p1}
        p2={p2}
        p3={p3}
        ex1={ex1}
        ex2={ex2}
        ex3={ex3}
      />
      <Total
        ex1={p1.exs}
        ex2={p2.exs}
        ex3={p3.exs}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));