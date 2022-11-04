import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { IoIosHeartDislike } from 'react-icons/io';
import { FcLike } from 'react-icons/fc';


// interface Props {
//   userprops: IUsers
// }

// interface IUsers {
//   id: number,
//   name: string,
//   address: string,
//   age: number
//   number: number
// }
// interface state {
//   number: number
// }

interface IAppProps {
}

interface IAppState {
  // number: number,
  color: string
}


class ItemUserClass extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      // number: 1,
      color: "red"
    };
  }

  // handleOnClick = () => {
  //   this.setState((prevState: IAppState) => ({
  //     number: prevState.number + 1,
  //   }));
  // };
  
  handlered = () =>{
    this.setState({
      color: "red"
    }  
    )
  }

  handleblue = () =>{
    this.setState({
      color: "blue"
    })
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* <h1 >{this.state.number}</h1>
        <div>ClassComponent</div>
        {this.state.number === 0 && "default value"}
        <button disabled={this.state.number >= 10} onClick={this.handleOnClick}>Plus</button> */}
        {/* ---------------- */}
        {/* <p style={{color:this.state.color}}>{this.state.color}</p>
        <button disabled={this.state.color === "red"} onClick={this.handlered}>red</button>
        <button disabled={this.state.color === "blue"} onClick={this.handleblue}>blue</button> */}

        
        

        <h3> <AiOutlineStar /></h3>
        <h3><AiFillStar/></h3>
        <h3><AiOutlineDislike/></h3>
        <h3><AiOutlineLike/></h3>
        <h3><IoIosHeartDislike/></h3>
        <h3><FcLike/></h3>


        
      </div>
    )

  }
}

export default ItemUserClass