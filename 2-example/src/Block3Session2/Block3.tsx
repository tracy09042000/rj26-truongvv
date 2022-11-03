import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css'


type Props = {
    title: string,
    total: string
    color: string,
    icon: string
}

type State = {}

class Block3 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="flex-container">
                <div style={{background: this.props.color}} className='block'>
                    {/* <i className='fa-brands fa-facebook-f icon'></i> */}
                    <i style={{textAlign:"left", paddingLeft:"5%", paddingTop:"20px", fontSize:"70px"}} className={this.props.icon}></i>
                    <div className='content'>
                        <p className='title'>{this.props.title}</p>
                        <p className='total'>{this.props.total}</p>
                    </div>
                </div>
                {/* <div className='block2'>
                    <i className='fa-brands fa-facebook-f icon'></i>
                    <p>Facebook</p>
                    <p><small>5,00,000 Likes</small></p>
                </div>
                <div className='block3'>
                    <i className='fa-brands fa-facebook-f icon'></i>
                    <p>Facebook</p>
                    <p><small>5,00,000 Likes</small></p>
                </div>
                <div className='block4'>
                    <i className='fa-brands fa-facebook-f icon'></i>
                    <p>Facebook</p>
                    <p><small>5,00,000 Likes</small></p>
                </div> */}
            </div>
        )
    }
}

export default Block3