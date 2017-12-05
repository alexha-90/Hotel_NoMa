import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateCalendarDates } from "../../../actions";

//===============================================================================================//

class InputCalendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            from: null,
            to: null,
            selectedDays: [],
        }
    }

    handleCalendarResetClick = event => {
        event.preventDefault();
        this.setState({
            from: null,
            to: null,
            selectedDays: []
        });
    };

    handleCalendarDayClick = day => {
        if (moment(day).isAfter(moment().utcOffset(-480).add(2, 'months').add(1, 'days'))) {
            return alert('Sorry we only accept reservations two months out from today. You may need to adjust your departure date.');
        }

        if (moment(day).isBefore(moment().utcOffset(-480))) {
            return alert('Sorry that date has already passed. Please select a valid date.');
        }

        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        this.state.selectedDays.push(range);

        // Timeout to prevent retrieving this.state.to value of null. Values will be retrieved as an array and plucked in redux store
        setTimeout(() => {
            let dateConcat = [moment(this.state.from).format("MM/DD/YYYY"), '<--enter | exit-->', moment(this.state.to).format("MM/DD/YYYY")];
            console.log(dateConcat);
            this.props.dispatch(updateCalendarDates(dateConcat));
        }, 1000);
    };


    render() {
        return (
            <div>
                <div className="calendar">

                    <div id="calendarTopText">
                        {!this.state.from && !this.state.to && <p>Interested in lodging with us? Tell us when you plan on visiting...</p>}
                        {this.state.from && !this.state.to && <p>How delightful. Now when do you plan on departing?</p>}
                        {this.state.from &&
                        this.state.to &&
                        <p>
                            Hooray! You will be staying with us from
                            {' '}
                            <strong>{moment(this.state.from).format('L')}</strong>
                            {' '}
                            to
                            {' '}
                            <strong>{moment(this.state.to).format('L')}</strong>
                            . Need to make a
                            {' '}<a href="." onClick={this.handleCalendarResetClick}>(change)</a>
                            ?
                        </p>}
                    </div>

                    <DayPicker
                        numberOfMonths={2}
                        disabledDays={[
                            {
                                before: new Date(moment().utcOffset(-480)),
                                after: new Date(moment().utcOffset(-480).add(2, 'months')),
                            },
                        ]}

                        fromMonth={new Date(moment().utcOffset(-480))}
                        toMonth={new Date(moment().utcOffset(-480).add(2, 'months'))}
                        selectedDays={this.state.selectedDays}
                        onDayClick={this.handleCalendarDayClick}
                        fixedWeeks
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
    };
}

export default connect(mapStateToProps)(InputCalendar);