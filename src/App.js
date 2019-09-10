import React from 'react';
import './App.css';
import List from "./List";
import GroceryForm from "./GroceryForm"

class App extends React.Component {
  state = { 
    grocs: [
      {id: 1, name: "Milk", bought: true },
      {id: 2, name: "Bread", bought: false },
      {id: 3, name: "A nice Egg in this trying time", bought: true },
    ]
  };

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  addItem = (name) => {
    const groc = { id: this.getUniqId(), name, bought: false };
    this.setState({ grocs: [groc, ...this.state.grocs] });
  };
  handleClick = (id) => {
    this.setState({
      grocs: this.state.grocs.map( groc => {
        if (groc.id === id) {
          return { ...groc, bought: !groc.bought };
        }
        return groc;
      })
    });
  };
  render() {
    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List 
          name="Grocery List" 
          grocs={this.state.grocs} 
          handleClick={this.handleClick} 
        />
      </div>
    );
  };
};
export default App;