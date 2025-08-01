import User from "./User";
import React from "react";
class Aboutus extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor is called");
  }
  componentDidMount() {
    console.log("Parent component is mounted");
  }
  render() {
    console.log("Parent render is called");
    return (
      <div>
        <User name={"First"} designation={"Co-Founder & CEO"}></User>
        <User name={"Second"} designation={"Co-Founder & CEO"}></User>
        <User name={"Third"} designation={"Co-Founder & CEO"}></User>
      </div>
    );
  }
}

export default Aboutus;
