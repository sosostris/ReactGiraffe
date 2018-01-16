import React from 'react';
import MenuItem from './MenuItem';
import Hi from './Hi';
import About from './About';
import ReactDOM from "react-dom";

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.renderMenuItem = this.renderMenuItem.bind(this);

        this.state = {
            menuItems: [
                {
                    name: "Hi",
                    link: <Hi />,
                    underline: false
                },
                {
                    name: "About",
                    link: <About />,
                    underline: false
                },
                {
                    name: "About",
                    link: <About />,
                    underline: false
                }
            ]
        };
    }

    handleClick (obj) {
        var array = this.state.menuItems;
        for (var i=0; i<array.length; i++) {
            if (array[i] === obj) {
                array[i].underline = true;
            } else {
                array[i].underline = false;
            }
        }
        this.setState({menuItems : array});
        ReactDOM.render(obj.link, document.getElementById('mainContent'));
    }

    renderMenuItem (obj, i) {
        let handleClick = this.handleClick.bind(this, obj);

        var style = {
            fontSize: '30px'
        };

        return (
            obj.underline ?
                <div key={i} index={i}>
                    <MenuItem style={style}
                              name={obj.name} link={obj.link}
                              handleClick={handleClick}>
                    </MenuItem>
                </div>
                :
            <div key={i} index={i}>
                <MenuItem style={{fontSize: '10px'}}
                          name={obj.name} link={obj.link}
                          handleClick={handleClick}>
                </MenuItem>
            </div>
        )
    }

    render () {
        return (
            <div>
                {this.state.menuItems.map(this.renderMenuItem)}
            </div>
        );
    }

}