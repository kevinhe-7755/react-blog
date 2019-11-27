import React, { Component } from 'react';
import Header from '../Header/Header'
import './Detail.css';

class Detail extends Component {
    constructor(props){
        super(props)

        console.log(this.props.location.state)
    }
    render() {
        const data = this.props.location.state;
        const {time,title,article} = data;
        return (
            <div className="d_container">
                <Header />
                <div className="d_main">
                        <div className="d_content">
                            <div className="title">
                                {title}
                            </div>
                            <div className="info">
                                {time}
                            </div>
                            <div className="article">
                                {article}
                            </div>
                        </div> 
                </div>
            </div>
        )
    }
};

export default Detail;