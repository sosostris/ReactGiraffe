import React from 'react';

export default class MenuItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <button style={this.props.style} onClick={this.props.handleClick}>{this.props.name}</button>
            </div>
        )
    }

}
