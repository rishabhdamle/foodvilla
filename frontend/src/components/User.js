import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      salaryPackage: "1cr",
    };
    console.log("Child constructor is called");
  }
  componentDidMount() {
    console.log("Child component is mounted");
  }
  render() {
    const { name, designation } = this.props;
    const { count, salaryPackage } = this.state;
    console.log("Child render is called");
    return (
      <div>
        <h1>Name : {name}</h1>
        <h2>Designation : {designation}</h2>
        <h3>No of years in the company : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h3>Total package : {salaryPackage}</h3>
        <button
          onClick={() => {
            this.setState({
              salaryPackage: (this.state.salaryPackage = "2cr"),
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default User;
