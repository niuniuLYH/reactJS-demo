import React, { Component } from 'react'

const getDefalutStyledPost = (defalutStyle) => {
        return (
            class Post extends Component {
                render () {
                    const  style = {...defalutStyle, ...this.props.style};
                    return (
                        <p style = {style}>
                            fdafdafd
                        </p>
                    );
                }

            }
        )
};

const Post = getDefalutStyledPost({color:'#ff0000'});
export default Post;
