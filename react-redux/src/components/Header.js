import React, { Component, PropTypes } from 'react';

class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    };

    render () {
        return (
            <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
        )
    }
}

export default Header