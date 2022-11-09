import React, { Component } from 'react'

export class User extends Component {
  setUser=()=>{
    this.props.setUser(this.props.name)
  }
  render() {
    return (
        <div className="user-box" onClick={this.setUser}>{this.props.name}</div>
    )
  }
}

export default User;