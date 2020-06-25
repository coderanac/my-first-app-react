import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <section>
        <img src={this.props.photo} alt="cute cate"/>
        <p>
          theme: {this.props.name}
        </p>
      </section>
    );
  }
}

export default User;