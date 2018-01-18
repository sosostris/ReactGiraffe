import React from 'react';

export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.parseJson = this.parseJson.bind(this);

        this.state = {
            data: []
        }
    }

    parseJson() {
        // var data = require('../resources/json/sample.json');
        // var data = require('../resources/json/test.json');
        var data = require('../resources/json/firstEntry.json');
        this.setState({data: data});
    }

    renderEmpty() {
        return (
            <div>
                <button onClick={this.parseJson}>parse</button>
            </div>
        );
    }

    renderList() {
        var meetings = this.state.data.meetings;
        var startTimesAM = [];
        var startTimesPM = [];
        var endTimesAM = [];
        var endTimesPM = [];
        for (var i = 0; i < meetings.length; i++) {
            var startDate = new Date(meetings[i].starttime * 1000);
            var endDate = new Date(meetings[i].endtime * 1000);
            if (startDate.getHours() < 12) {
                startTimesAM.push(startDate.getHours() + ":" + startDate.getMinutes());
            } else {
                startTimesPM.push(startDate.getHours() + ":" + startDate.getMinutes());
            }
            // endTimes.push(endDate.getHours() + ":" + endDate.getMinutes());
        }
        var listStartHoursAM = startTimesAM.map((time) => <li>{time}</li>);
        var listStartHoursPM = startTimesPM.map((time) => <Li>{time}</Li>);
        // var listEndHours = endTimes.map((time) => <li>{time}</li>);
        return (
            <div>
                {listStartHoursAM}
                {listStartHoursPM}
            </div>
        );
    }

    renderObject() {
        return (
            <div>
                {JSON.stringify(this.state.data, null, 2)}
            </div>
        )
    }

    render() {
        if (this.state.data.length === 0) {
            return this.renderEmpty();
        } else {
            return this.renderList();
        }
    }

    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    renderListOfObjects() {
        const data = [{"name": "test1"}, {"name": "test2"}];
        const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

        return (
            <div>
                {listItems}
            </div>
        );
    }

}