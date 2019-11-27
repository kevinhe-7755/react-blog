import React, {Component} from 'react';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import './Homepage.css'

const URL = 'http://localhost:5000/api/gettest'
const HEADER = {'Accept': 'application/json'}


class Homepage extends Component {
    constructor(props){
        super(props);
        this.state={
            articles:[]
        };
    }

componentDidMount(){
    fetch(URL,HEADER)
    .then((res) => res.json())
    .then((res)=>{console.log(res)
        this.setState({ articles: res});
    })
};
    render() {
        return (
            <div className="h_container">
                <Header history={this.props.history}/>
                    <div className="h_main">
                        <ArticleList articles={this.state.articles}                     history={this.props.history}/>
                    </div>
            </div>
        )
    }
};

export default Homepage;