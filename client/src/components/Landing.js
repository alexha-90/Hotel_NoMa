import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// https://stackoverflow.com/questions/28511207/react-js-onclick-event-handler

class Landing extends Component {
    excal(event) {
        alert('can\'t get data yet, excalibur');
    }

    nugg(event) {
        alert('can\'t get data yet, nugget');
    }


    render() {
        return (
            <div>
                <h2>Room type:</h2>
                <button
                    id="excalibur"
                    name="excalibur"
                    value="testval"
                    className="btn btn-primary"
                    onClick={this.excal.bind(this)}
                    >Excalibur
                </button>
                <button
                    id="nugget"
                    name="nugget"
                    value="testval"
                    className="btn btn-success"
                    onClick={this.nugg.bind(this)}
                    >Nugget
                </button>
            </div>
        );
    }
}

export default Landing;
