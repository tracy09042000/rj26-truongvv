import React, { Component } from 'react'

interface Props {
    userprops : IUsers
}

interface IUsers {
    id: number,
    name: string,
    address: string,
    age: number
}



class ItemUserClass extends Component<Props> {
    

  render() {
    return (
        <>
        <p>{this.props.userprops.name}</p>
        <p>{this.props.userprops.address}</p>
        <p>{this.props.userprops.age}</p>
    </>
    )
  }
}

export default ItemUserClass