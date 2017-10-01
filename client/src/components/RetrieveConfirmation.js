import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { searchExistingItinerary } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

// to-do: add modal to confirm delete see: https://react-bootstrap.github.io/components.html?#modals-contained
// to-do: refactor with validation instead of alerts

class RetrieveConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmationNum: '',
            getReservation: false,
            deleteReservation: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleGetReservation = this.handleGetReservation.bind(this);
    }

    /*
    componentDidMount() {
    }
    */



    handleChange(event) {
        if (event.target.name === 'confirmationNum') {
            this.setState({confirmationNum: event.target.value});
        }
    }


    handleGetReservation() {
        //3A12FU9484
        this.setState({ getReservation: true});
        this.props.dispatch(searchExistingItinerary(this.state.confirmationNum));
        console.log('loading... replace me');
        // if response from server = Array(0).... no results.  if .length = 0. or undefined
        setTimeout(() => {
            console.log('test ends here. Cant get res yet');

            console.log(this.props.itinerary);
            console.log('full above');
            console.log(this.props.itinerary.numAdults);
        }, 1000);
    }

    //tbd: handle delete


    render() {
        return (
            <div className="container">

                <Form>
                    <FormGroup>
                        <ControlLabel>Confirmation number:</ControlLabel>
                        <FormControl type="text" name="confirmationNum" value={this.state.confirmationNum} onChange={this.handleChange}/>
                    </FormGroup>
                    I would like to.....
                    <br />
                    <Button bsStyle="success" value="getReservation"
                            onClick={this.handleGetReservation}>
                        Get my reservation
                    </Button>
                    {' '}
                    <Button bsStyle="danger" value="deleteReservation" onClick={() => this.setState({ deleteReservation: true })}>
                        Delete my reservation
                    </Button>
                </Form>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
    };
}

export default connect(mapStateToProps)(RetrieveConfirmation);



/*



class RetrieveConfirmation extends Component {
    state = { confirmationNum: ''};

    handleFetch(event) {
        this.setState({confirmationNum: event.target.value});
        if (this.state.confirmationNum === '') {
            return alert('Please enter a valid confirmation number');
        }

        alert(this.state.confirmationNum);
        this.props.dispatch(fetchItinerary());
    }


    handleDelete() {
        alert('test 2');
        //this.props.dispatch(updateNumAdults(inputNumAdults));
    }


    render() {
        return (
            <div className="container">

                <Form>
                    <FormGroup>
                        <ControlLabel>Confirmation number:</ControlLabel>
                        <FormControl value={this.state.confirmationNum} onChange={this.handleFetch} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email used:</ControlLabel>
                        <FormControl type="text" placeholder="Email address" />
                    </FormGroup>
                    I would like to.....
                    <br />
                    <Button bsStyle="success" onClick={this.handleFetch.bind(this)}>
                        Get my reservation
                    </Button>
                    {' '}
                    <Button bsStyle="danger" onClick={this.handleDelete.bind(this)}>
                        Delete my reservation
                    </Button>
                </Form>


            </div>
        );
    }
}

 */