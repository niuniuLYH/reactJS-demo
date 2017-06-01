import React, { Component } from 'react'

class Post extends Component {
    constructor () {
        super();
        this.state = {
           content: ''
        };
    }

    componentWillMount () {
       this._loadData();
    }

    async _loadData () {
        this.setState ({
            content: '数据加载中...'
        });
        const content = await getPostData();
        this.setState ({
            content: content
        })
    }

    render () {
        return (
            <div>
               <div className='post-content'>
                   {this.state.content}
               </div>
                <button onClick={ () => {this._loadData()}}>
                    刷新
                </button>
            </div>
        )
    }
}


export default Post;
