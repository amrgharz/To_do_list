import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Input = ({ text, number,addlist }) => (
  <div>
    {number}
    <input type="checkbox" />
    {text}
    <br />
  </div>
);
class Comp extends React.Component {
  constructor(props) {
    super(props);
    let start = 0;
    if (props.start) {
      start = props.start;
    }
    this.state = { counter: start ,
    term:'' ,
    items: []
    };
  }
  onChange = (event)=> {
    this.setState({term:event.target.value});
  }
  onSubmet = (event)=>{
    event.preventDefault();
    const newItems = [ ...this.state.items, this.state.term]
    console.log(newItems)
    this.setState({
      term:'',
      items:newItems
    });

  }

  increment() {
    var counter = this.state.counter + 1;
    this.setState({ counter });
  }
  decrement() {
    var counter = this.state.counter - 1;
    this.setState({ counter });
  }
  reset() {
    var resetcounter = (this.state.counter = 0);
    this.setState({ resetcounter });
  }
  

  render() {
    return (
      <div>
      <form calssname="copm" onSubmit={this.onSubmet}>
        <input value={this.state.term} onChange={this.onChange}/>
        <button>submet</button>
      </form>.
        {this.state.items.map(item=><h1>{item}</h1>)}
        <br/>
        {this.props.name}
        {this.state.counter}

        <button onClick={() => this.increment()}>+</button>
        {this.state.counter}
        <button onClick={() => this.decrement()}>-</button>
        <button onClick={() => this.reset()}>reset</button>
      </div>
    );
  }
}

const App = () => (
  <div style={styles}>
    <Hello name="My To Do List!" />
    <Comp/>
    <Input number="1" text="CodeSandBox To Do List" />
    <Input number="2" text="Research Decentralized Web" />
    <Input number="3" text="My Final Project Idea" />
  </div>
);

render(<App />, document.getElementById("root"));
