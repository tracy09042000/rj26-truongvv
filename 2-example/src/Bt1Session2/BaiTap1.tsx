import React, { Component } from 'react'
import './style.css'
import Logo1 from './1.jpg'



type Props = {
  title: string,
  product: string,
  name: string
  gen: string,
  sex: string
}



type State = {}

class BaiTap1 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section>
        <div className='div1'>
          <img src={Logo1} alt="" />
          <div className='div2'>
            <h1>{this.props.title}</h1>
            <p>{this.props.product}</p>
            <p>{this.props.name}</p>
            <p>{this.props.gen}</p>
            <p>{this.props.sex}</p>

          </div>
        </div>
      </section>
    )
  }
}

export default BaiTap1