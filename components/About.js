import React from 'react';

export default class About extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props.onClick}>Hi I'm a about component</button>
            </div>
        )
    }
}
