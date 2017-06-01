import React, { Component } from 'react'

class Post extends Component {
    handlePClick (e) {
        let height = e.target.getBoundingClientRect().height;
        console.log(height);
    }

    render () {
        let {content} = this.props;
        return (<p onClick={this.handlePClick.bind(this)}>{content}</p>)
    }
}

export default Post;
