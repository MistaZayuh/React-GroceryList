import React from "react";
class DeleteForm extends React.Component {
  state = { name: "" };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.deleteItem(this.state.name);
    this.setState({ name: "", });
  };
  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  };
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          required 
          placeholder="Remove an item" 
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    );
  };
};
export default DeleteForm;