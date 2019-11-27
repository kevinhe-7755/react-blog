import React, {Component} from 'react';
import ArticleItems from '../ArticleItems/ArticleItems';
import './ArticleList.css'

class ArticleList extends Component {

    render() {
        return (
            <div className="al-container">
                <div className={ArticleList}>{
                    this.props.articles.map((item) => (
                            <ArticleItems history={this.props.history} key={item._id} data={item}/>
                        ))
                    }
                </div>
            </div>
        )
    }
};

export default ArticleList;