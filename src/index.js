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
      <Part parts={props.p[0].name} exs={props.p[0].exs} />
      <Part parts={props.p[1].name} exs={props.p[1].exs} />
      <Part parts={props.p[2].name} exs={props.p[2].exs} />
    </div>
  );
};


const Total = (props) => {
  return (
    <div>
      <p>

        {props.p[0].exs + props.p[1].exs + props.p[2].exs}
      </p>
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

const App = () => {
  const course = "Half Stack application development";
  const p = [
    {
      name: "Fundamentals of React = ",
      exs: 10,
    },
    {
      name: "Using props to pass data = ",
      exs: 7,
    },
    {
      name: "State of a component = ",
      exs: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content p={p} />
      <Total p={p} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));