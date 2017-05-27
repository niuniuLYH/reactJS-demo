import React, { Component } from 'react'

class Computer extends Component {
    constructor () {
        super();
        this.state = {
            status: false
        }
    }

    static defaultProps = {
        statusOff: '显示器关了',
        statusOn: '显示器亮了'
    };

    handleClickOnButton () {
        this.setState({
            status: !this.state.status
        })
    }

    render () {
        return (
            <div>
                <Screen showContent={this.state.status ? this.props.statusOn : this.props.statusOff} />
                <button onClick={this.handleClickOnButton.bind(this)}>开关</button>
            </div>
        )
    }
}

class Screen extends Component {
    static defaultProps = {
        showContent: '无数据'
    };

    render () {
        return (
            <div className='screen'>{this.props.showContent}</div>
        )
    }
}

export default Computer;
