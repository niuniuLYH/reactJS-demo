import React,{Component} from 'react';
import Comment from './Comment.js';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };
    render () {
        let { comments } = this.props;
        return (
            <div>
                {
                    comments.length > 0 ?
                        comments.map((comment,key) =>
                            <Comment comment={comment} key={key} />
                        ) : null
                }
            </div>
        )
    }
}

export default CommentList;