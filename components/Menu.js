import React from 'react';
import ReactDOM from "react-dom";
import MenuItem from './MenuItem';
import Page from './Page';
import AnotherPage from './AnotherPage';


export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.renderMenuItem = this.renderMenuItem.bind(this);

        this.state = {

            menuItems: [
                {
                    name: "Miao",
                    link: <Page />,
                    underline: false,
                },
                {
                    name: "Wang",
                    link: <AnotherPage/>,
                    underline: false,
                },
                {
                    name: "About",
                    link: <AnotherPage focus="dabian"/>,
                    underline: false,
                },
                {
                    name: "Hi",
                    link: <AnotherPage focus="dacong"/>,
                    underline: false,
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
        ReactDOM.render(obj.link, document.getElementById('mainContent'));
        this.setState({menuItems : array});
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