import React, {Component} from 'react';
import './ArticleItems.css'

class ArticleItems extends Component {
constructor(props){
    super(props)
    this.state={
            path : {
            pathname:`/detail/${this.props.data._id.$oid}`,
            state:this.props.data,
        }
    }   
}
    render() {

        return (
            <div className="li_container" onClick={
                ()=>{
                    this.props.history.push(this.state.path);
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