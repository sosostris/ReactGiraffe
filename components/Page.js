import React from 'react';
import Scroll from './Scroll';
import Hi from './Hi';
import About from './About';

export default class Page extends React.Component {
    render () {
        return (
            <div>
                <div className="bian">老婆婆是大便</div>
                <div className="bian">老婆婆是大便</div>
                <div className="bian">老婆婆是大便</div>
                <div className="bian">老婆婆是大便</div>
                <div className="bian">老婆婆是大便</div>
                <div className="bian">老婆婆是大便</div>
                <div className="bian">老婆婆是大便</div>
                <div id="miao" style={{height:'300px'}}><Scroll/></div>
                <div style={{height:'500px'}}>wow</div>
            </div>
        );
    }
}