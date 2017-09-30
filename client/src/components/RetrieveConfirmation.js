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
            email: '',
            getReservation: false,
            deleteReservation: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myTest = this.myTest.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/itinerarySearch')
            .then(res => {
                const posts = res.data.getItinerary;
                console.log('*******');
                console.log(posts);

                //this.setState({ posts });
            });
    }



    handleChange(event) {
        if (event.target.name === 'confirmationNum') {
            this.setState({confirmationNum: event.target.value});
        }
        if (event.target.name === 'email') {
            this.setState({email: event.target.value});
        }
    }

    handleSubmit() {
        console.log('keeps disappearing after props dispatch');
        if (this.state.getReservation) {
            console.log('time to get reservation');
            //const confirmationNum = this.state.confirmationNum;
            this.props.dispatch(searchExistingItinerary());
        }

        if (this.state.deleteReservation) {
            alert(this.state.confirmationNum);
            alert(this.state.email);
        }
    }

    myTest() {
        let testConfirmationNum = '3A12FU9484';
        this.props.dispatch(searchExistingItinerary(testConfirmationNum));
    }

    renderResults() {
        return (
            <div>
                itinerary
            </div>
        );
    }



    render() {
        return (
            <div className="container">

                <Button bsStyle="primary" onClick={this.myTest}>
                    test button
                </Button>


                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <ControlLabel>Confirmation number:</ControlLabel>
                        <FormControl type="text" name="confirmationNum" value={this.state.confirmationNum} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email used:</ControlLabel>
                        <FormControl type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </FormGroup>
                    I would like to.....
                    <br />
                    <Button bsStyle="success" type="submit" value="getReservation" onClick={() => this.setState({ getReservation: true })}>
                        Get my reservation
                    </Button>
                    {' '}
                    <Button bsStyle="danger" type="submit" value="deleteReservation" onClick={() => this.setState({ deleteReservation: true })}>
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