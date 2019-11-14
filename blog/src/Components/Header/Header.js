import React, {Component} from 'react';
import './Header.css';
import { Button } from 'antd';

const avatar = require('../../static/avatar.jpg');
class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="avatar" src={avatar} alt="my avatar"/>
                <h1>Kevin's Blog</h1>
                <div className="button_container">
                    <Button type="primary" onClick={()=>{this.props.history.push(`/admin/PostArticles`)}}>后台管理</Button>
                </div>
            </div>
        )
    }
};

export default Header;