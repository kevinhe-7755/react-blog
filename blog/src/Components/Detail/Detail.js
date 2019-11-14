import React, { Component } from 'react';
import Header from '../Header/Header'
import './Detail.css';

const articleContent = "文章内容";

class Detail extends Component {
    render() {
        return (
            <div className="d_container">
                <Header />
                <div className="d_main">
                        <div className="d_content">
                            <div className="title">
                                <h1>标题</h1>
                            </div>
                            <div className="info">
                                文章信息
                            </div>
                            <div className="article">
                                {articleContent}
                            </div>
                        </div> 
                </div>
            </div>
        )
    }
};

export default Detail;