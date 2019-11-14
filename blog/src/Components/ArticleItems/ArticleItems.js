import React, {Component} from 'react';
import './ArticleItems.css'

class ArticleItems extends Component {
    render() {
        return (
            <div className="li_container" onClick={
                ()=>{
                    this.props.history.push(`/detail/${this.props.data._id.$oid}`,{id:this.props.data._id.$oid})
                }
            }>
                <div className="li_content">
                    <div className="title">
                        <h2>{this.props.data.title}</h2>
                    </div>
                    <div className="summary">
                    </div>
                    <div className="li_info">
                        <h2>{this.props.data.time}</h2>
                    </div>
                </div>
            </div>
        )
    }
};

export default ArticleItems;