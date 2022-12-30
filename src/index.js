import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  // console.log(props);
  return (
    <p>
      {props.parts.name} {props.parts.exercises}
    </p>
  );
};

const Content = (props) => {
  // console.log(props)
  return (
    <div>
      <Part parts={props.course.parts[0]} />
      <Part parts={props.course.parts[1]} />
      <Part parts={props.course.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  // console.log(props)
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {

    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
