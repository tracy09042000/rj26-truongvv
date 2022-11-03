import React, { Component } from 'react'
import Logo2 from './2.jpg'
import './style.css'

type Props = {
    title: string,
    name: string,
    money: string
}

type State = {}

class BaiTap2 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='div1'>
                <img src={Logo2} alt="" />
                <div className='div2'>
                    <h6>{this.props.title}</h6>
                </div>
                <div className='div3'>
                    <p className='name'>{this.props.name}</p>
                    <p className='money'>{this.props.money}</p>
                </div>

            </div>
        )
    }
}

export default BaiTap2