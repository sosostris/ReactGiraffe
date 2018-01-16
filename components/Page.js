import React from 'react';
import Menu from './Menu';

export default class Page extends React.Component {
    render () {
        return (
            <div>
                <Menu></Menu>
                <div id="mainContent">omg</div>
            </div>
        );
    }
}