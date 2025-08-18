const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} ex1={exercises1} part2={part2} ex2={exercises2} part3={part3} ex3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} ex={props.ex1} />
      <Part part={props.part2} ex={props.ex2} />
      <Part part={props.part3} ex={props.ex3} />
    </div>
  )
}


const Part = (props) => (
  <p>{props.part} {props.ex}</p>
)

const Total = (props) => (
  <p>
    Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
  </p>
)
export default App