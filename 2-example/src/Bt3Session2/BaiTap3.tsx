import React, { Component } from 'react'
import './style.css'
import Logo3 from './3.jpg'

type Props = {
    title: string,
    topic: string,
    copyright: string
}

type State = {}

class BaiTap3 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='div1'>
                <img src={Logo3} alt="" />
                <div className='div2'>
                    <p className='title'>{this.props.title}</p>
                    <p className='topic'>{this.props.topic}</p>
                    <p className='coppyright'>{this.props.copyright}</p>
                </div>
            </div>
        )
    }
}

export default BaiTap3