import React, { Component } from 'react'
import './App.css'
class ReactChildren extends Component {
    render () {
        return (
            <div>
                {this.props.children.map((el) => {
                    return <div className="border">{el}</div>
                })}
            </div>
        )
    }
}

export default ReactChildren;
