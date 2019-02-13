import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [{
            name: 'Roger',
            age: 32
        }, {
            name: 'Sheila',
            age: 30
        }]
    };

    switchNameHandler = (newName) => {
        this.setState({persons: [{
            name: newName,
            age: 32
        }, {
            name: 'Sheila',
            age: 30
        }]})
    };

    changeNameHandler = (event) => {
        this.setState({persons: [{
            name: 'Roger',
            age: 32
        }, {
            name: event.target.value,
            age: 30
        }]})
    };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
          <button onClick={this.switchNameHandler.bind(this, 'Rogelio')}>Click Me!</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Surf</Person>
          <Person click={this.switchNameHandler.bind(this, 'Roger')}
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                    changed={this.changeNameHandler} />
      </div>
    );
  }
}

export default App;
