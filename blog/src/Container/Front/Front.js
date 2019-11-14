import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../../Components/Homepage/Homepage';
import Detail from '../../Components/Detail/Detail';


class Front extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        const {url}= this.props.match;
        return(
            <div>
                <Switch>
                    <Route exact path={url} component={Homepage}></Route>
                    <Route path={`/detail/:id`} component={Detail}></Route>
                </Switch>
            </div>
        )
    }
};

export default Front;