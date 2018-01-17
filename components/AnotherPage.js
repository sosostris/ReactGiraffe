import React from 'react';
import Hi from './Hi';
import About from './About';

export default class Page extends React.Component {

    render () {
        return (
            <div>
                <div className="cong">阿囡头是大葱</div>
                <div className="cong">阿囡头是大葱</div>
                <div className="cong">阿囡头是大葱</div>
                <div className="cong">阿囡头是大葱</div>
                <div className="cong">阿囡头是大葱</div>
                <div className="cong">阿囡头是大葱</div>
                <div className="cong">阿囡头是大葱</div>
                <div id="dacong"><Hi></Hi></div>
                <div id="dabian"><About></About></div>
            </div>
        );
    }

    componentDidMount () {
        this.scrollToFocus();
    }

    componentDidUpdate () {
        this.scrollToFocus();
    }

    scrollToFocus () {
        var focus = this.props.focus;
        if (focus) {
            var element = document.getElementById(focus);
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
        }
    }
}