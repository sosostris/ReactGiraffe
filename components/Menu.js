import React from 'react';
import MenuItem from './MenuItem';
import ReactDOM from 'react-dom';
import Hi from './Hi';
import About from './About';

export default class Menu extends React.Component {

    render () {
        const aboutElement = <About />;
        const hiElement = <Hi />;
        return (
            <div>
                <div>{this.props.children}</div>
                <MenuItem name="About" onClick={this.show(aboutElement)}/>
                <MenuItem name="Hi" onClick={this.show(hiElement)}/>
            </div>
        );
    }

    show (element) {
        return () => ReactDOM.render(element, document.getElementById('mainContent'));
    }

}