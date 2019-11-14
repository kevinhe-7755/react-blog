import React, {Component} from 'react';
import ArticleItems from '../ArticleItems/ArticleItems';
import './ArticleList.css'

// const items = [
//     {
//         key:'1',
//         title:'Title1',
//         time:'2019-11-11'
//     },
//     {
//         key:'2',
//         title:'Title2',
//         time:'2019-11-12'
//     },
//     {
//         key:'3',
//         title:'Title3',
//         time:'2019-11-13'
//     }
// ]

class ArticleList extends Component {
    // constructor(props){
    //     super(props)
    //     //this.setState({articles:this.props.articles})
    // }
    render() {
        return (
            <div className="al-container">
                <div className={ArticleList}>{
                    this.props.articles.map((item, index) => (
                            <ArticleItems history={this.props.history} key={index} data={item}/>
                        ))
                    }
                </div>
            </div>
        )
    }
};

export default ArticleList;