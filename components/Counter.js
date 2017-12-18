class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     number: 1
    }
  }
  increment(event) {
    this.setState({
      number: this.state.number + 1
    })
  }

  decrement(event) {
    this.setState({
      number: Math.max(1, this.state.number - 1)
    })
  }
  render() {
    return (
      <div>
        <img src={this.props.image} alt="Bloc Logo"/>
        <h2>Current program: {this.props.label}</h2>
        <h3>Current week: {this.state.number}</h3>
        <button onClick={this.increment.bind(this)}>Increment</button>
        <span style={{marginRight:'20px'}}></span>
        <button onClick={this.decrement.bind(this)}>Decrement</button>
        <p>Current Date: {this.props.date.toLocaleDateString()}</p>
      </div>
    );
  }
}

const info = {
  date: new Date(),
  image: 'https://avatars0.githubusercontent.com/u/1441485?v=4&s=280',
}

Counter.defaultProps = {
  label: "Web Developer Track"
}

ReactDOM.render(
  <Counter
    date={info.date}
    image={info.image}/>,document.getElementById('app')
);
