import React,{Component} from 'react';
import Comment from './Comment.js';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    handleDeleteComment(index) {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render () {
        let { comments } = this.props;
        return (
            <div>
                {
                    comments.length > 0 ?
                        comments.map((comment,key) =>
                            <Comment comment={comment} key={key} index={key} onDeleteComment={this.handleDeleteComment.bind(this)}/>
                        ) : null
                }
            </div>
        )
    }
}

export default CommentList;