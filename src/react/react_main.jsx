import React, {Component} from 'react'
import ReactDOM from "react-dom";
class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      message: 'hello world'
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react_app'))
