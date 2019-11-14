import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostArticles from '../../Components/PostArticles/PostArticles';
import AdminHome from '../../Components/AdminHome/AdminHome';
import AdminMenu from '../../Components/AdminMenu/AdminMenu';
import ManageArticles from '../../Components/ManageArticles/ManageArticles';
import ManageUsers from '../../Components/ManageUsers/ManageUsers';
import './Admin.css';

class Admin extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        const {url}= this.props.match;
        return(
            <div>
                <div className="admin_container">
                    <div className="menu_container">
                        <AdminMenu history={this.props.history}/>
                    </div>
                    <div className="admin_content">
                        <Switch>
                            <Route exact path={url} component={AdminHome}></Route>
                            <Route path={`${url}/manageUsers`} component={ManageUsers}></Route>
                            <Route path={`${url}/postArticles`} component={PostArticles}></Route>
                            <Route path={`${url}/manageArticles`} component={ManageArticles}></Route>
                            {/* <Route path={`${url}/detail`} component={Detail}></Route> */}
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
};

export default Admin;