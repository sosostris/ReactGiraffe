import React from 'react';
import Menu from './Menu';

export default class Page extends React.Component {
    render () {
        return (
            <div>
                <Menu>Hi hi th</Menu>
                <Menu>Oh</Menu>
                <div id="mainContent">omg</div>
            </div>
        );
    }
}