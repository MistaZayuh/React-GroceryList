import React from 'react';
import './App.css';

class App extends React.Component {
  state = { 
    grocs: [
      {id: 1, name: "Milk", bought: true },
      {id: 2, name: "Bread", bought: false },
      {id: 3, name: "Egg", bought: true },
    ]
  };

  renderGrocs = () => {
    const { grocs, } = this.state
    return grocs.map( groc => 
      <li key={ groc.id }>{ groc.name }</li> 
    );
  };
  render() {
    return(
      <div>
        <ul>
          { this.renderGrocs() }
        </ul>
      </div>
    );
  };
};

export default App;
