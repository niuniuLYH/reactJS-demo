import React, { Component } from 'react'

class Input extends Component {
    constructor () {
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        });
        if(this.props.onChange) {
           this.props.onChange(e.target.value);
        }
    }

    render () {
        return (
            <div>
                <input type="number" onChange={this.handleInputChange.bind(this)} value={this.state.inputValue}/>
            </div>
        )
    }
}

class PercentageShower extends Component {
    constructor () {
        super();
    }

    render () {
        let { inputValue } = this.props;
        let inputValue2 = (inputValue * 100).toFixed(2) + '%';
        return (
            <div>
                <span>{inputValue2}</span>
            </div>
        )
    }
}

class PercentageApp extends Component {
    constructor () {
        super();
        this.state ={
            inputValue: ''
        }
    }

    handleChange (value) {
        this.setState({
            inputValue: value
        })
    }

    render () {
        return (
            <div>
                <Input onChange={this.handleChange.bind(this)}/>
                <PercentageShower inputValue={this.state.inputValue}/>
            </div>
            )
    }
}

export default PercentageApp;
