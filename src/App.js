import React, { Component } from 'react';
import './App.css'
import TodoInput from './containers/todoapp';
// import Texts from './utils/texts';
// import Lifecycle from './component/lifecycle'
class App extends Component {

  render() {
    return (
      <div>
        <p><b> TO-DO APPLICATION </b></p>

        <TodoInput />
        
        {/* <Texts/> */}
      </div>

    )
  }
}
export default App;