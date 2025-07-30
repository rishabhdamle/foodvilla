import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, designation } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{designation}</h2>
      </div>
    );
  }
}

export default User;
