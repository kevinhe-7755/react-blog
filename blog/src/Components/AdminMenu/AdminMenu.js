import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const menu= [
    { url:'/', name:'首页', iconType:'home' },
    { url:'/manageUsers', name:'用户管理', iconType:'usergroup-delete' },
    { url:'/manageArticles', name:'文章管理', iconType:'edit' },
    { url:'/PostArticles', name:'发表文章', iconType:'file-text' }
];

class AdminMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            url: '/admin'
        }
    }
    render() {
        return (
                <Menu
                    selectedKeys={[this.state.url]}
                    mode="vertical"
                    theme="light"
                    onClick={({key}) => {
                        this.props.history.push(`/admin${key}`)
                        this.setState({url:key});
                    }}
                >
                    {
                        menu.map( (item, index) =>
                            <Menu.Item key={item.url}>
                                <Icon type={item.iconType} />
                                <span>{item.name}</span>
                            </Menu.Item>
                        )
                    }
                </Menu>
        )
    }
}

export default AdminMenu;

