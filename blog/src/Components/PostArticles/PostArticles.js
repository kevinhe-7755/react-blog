import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './PostArticles.css';
const { TextArea } = Input;
class PostArticles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            article:'',
        }
    }

    onChange(e) {
        this.setState({ article: e.target.value });
    };

    titleOnChange(e) {
        this.setState({ title: e.target.value });
    };

    postArticle(e) {
        e.preventDefault();
        
    };

    render() {
        return (
                <div className="p_main">
                    <h2>新建文章</h2>
                    <div className="container">
                        <span className="title">标题</span>
                        <Input
                            defaultValue="请输入标题"
                            type="text"
                            value={this.state.title}
                            onChange={this.titleOnChange.bind(this)}
                        />
                        <span className="title">文章内容</span>
                        <TextArea
                            style={{height:"400px"}}
                            size="large"
                            type="text"
                            value={this.state.article}
                            onChange={this.onChange.bind(this)}
                        />
                        <div className="button_container">
                            <Button type="primary" onClick={this.postArticle.bind(this)}>发布</Button>
                        </div>

                    </div>
                </div>
        )
    }
};

export default PostArticles;