import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
        avatar_url: "https.image.com",
      },
    };
    console.log("Child constructor is called");
  }
  async componentDidMount() {
    // const data = await fetch(" https://api.github.com/users/rishabhdamle");
    // const json = await data.json();
    // this.setState({ userInfo: json });
    // console.log("Child component is mounted");
    // console.log(json);
    this.timer = setInterval(() => {
      console.log("Namste react OP");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child component did upated");
  }

  componentWillUnmount() {
    console.log("Child component is unmounted");
    clearInterval(this.timer);
  }

  render() {
    // const { name, location } = this.props;

    console.log("Child render is called");
    return (
      <div>
        {/* <div>
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
        </div> */}
        <div>
          <h2>{this.state.userInfo.name}</h2>
          <h2>{this.state.userInfo.location}</h2>
          <img src={this.state.userInfo.avatar_url}></img>
        </div>
      </div>
    );
  }
}

export default User;
