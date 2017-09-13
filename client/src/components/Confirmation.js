import React, { Component } from 'react';

// test from bucky roberts tutorial
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectUser} from "../actions/index"

class Confirmation extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.id[0]}
                    onClick={() => this.props.selectUser(user)}
                >
                    { user.name } { user.month } { user.day }
                </li>

            );
        });
    }

    render() {
        return (
            <div>
                {this.createListItems()}
            </div>
        );
    }
}

// from bucky tutorial
function mapStateToProps(state) {
    return {
      users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Confirmation);


//export default Confirmation;
/*
                <h1>Your reservation has been booked! Your stay confirmation number is #134234. Please contact us at (555) 555-5555 if you have any
                    questions or concerns. A receipt has been sent to your email (testuser@example.com). Your stay details: 12/25/2017 to 12/31/2017. $765.23.
                    To cancel and receive a full refund for your stay, please cancel by 12/24/2017. Thank you! We look forward to your stay.
                </h1>
 */