import React from 'react';

export default class MenuItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            checked: true
        };
    };

    render () {
        if (this.state.checked) {
            return (
                <div>
                    <button onClick={this.props.onClick}>ooooooooo</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.props.onClick}>{this.props.name}</button>
                </div>
            )
        }
    }
}
