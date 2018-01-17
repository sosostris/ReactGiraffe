import React from 'react';
import Menu from './Menu';

export default class App extends React.Component {
    render () {

        var fixed = {
            height: '100px',
            position: 'fixed',
            top: '0',
            backgroundColor: 'black',
            width: '100%'
        };

        return (
            <div>
                <div style={fixed}><Menu></Menu></div>
                <div id="mainContent"></div>
            </div>
        );
    }
}