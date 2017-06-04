import React, { Component, PropTypes } from 'react'

export const connect = (WrappedComponent) => {
    class Connect extends Component {
        static contextTyes = {
            store: PropTypes.object
        }

        render() {
            return (
                <WrappedComponent/>
            )
        }
    }
    return Connect;
};