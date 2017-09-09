import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

//import { Link } from 'react-router-dom';

// https://stackoverflow.com/questions/28511207/react-js-onclick-event-handler


/*
calendar references:
https://github.com/airbnb/react-dates/tree/master/examples
https://www.npmjs.com/package/react-dates
http://airbnb.io/react-dates/?selectedKind=DateRangePicker
 */


class Landing extends Component {

    // temporary room type retrieval
    excal(event) {
        alert('can\'t get data yet, excalibur');
    }
    nugg(event) {
        alert('can\'t get data yet, nugget');
    }

    // initial state for calendar
    constructor(props) {
        super(props);
        this.state = {
            focused: props.autoFocus,
            date: props.initialDate,
        };

        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDateChange(date) {
        this.setState({ date });
        alert("test");
    }

    onFocusChange({ focused }) {
        this.setState({ focused });
    }


    render() {
        return (
            <div>
                <h3>Info needed: # of guests, dates of stay</h3>

                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />

                <h2>Room type:</h2>
                <Button
                    id="excalibur"
                    name="excalibur"
                    value="testval"
                    className="btn btn-primary"
                    onClick={this.excal.bind(this)}
                    >Excalibur
                </Button>
                <Button
                    id="nugget"
                    name="nugget"
                    value="testval"
                    className="btn btn-success"
                    onClick={this.nugg.bind(this)}
                    >Nugget
                </Button>

                <Jumbotron>
                    <h1>Hotel banner jumbotron</h1>
                    <p>We have the best amenities</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>


            </div>
        );
    }
}

export default Landing;
