import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { sendContactUsEmail } from '../actions/index';

//to-do: timestamp
//===============================================================================================//

class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        if (event.target.name === 'message') {
            this.setState({message: event.target.value});
        }

        if (event.target.name === 'email') {
            this.setState({email: event.target.value});
        }
    }


    handleSubmit() {
        if (this.state.message.length < 20) {
            return alert('Please make sure your message is at least 20 characters long.')
        }

        if (this.state.email.length < 5) {
            return alert('Note: VERY LIMITED validation check here. Please enter a valid email address to see a copy ' +
                'of what staff members would receive. Your information will not be used for any other purpose. ' +
                'A more appropriate production ready approach would probably invoke services such as Zendesk.')
        }

        let formData = [this.state.message, this.state.email];
        this.props.dispatch(sendContactUsEmail(formData));
    }


    render() {
        const replyEmail = 'hotelnoma@example.com';
        let emailRef = 'mailto:' + replyEmail + '?subject=My question about Hotel NoMa';

        return (
            <div className="container">

                <div id="contactUsSpacing">
                    <Grid>
                        <Row>
                            <Col sm={2} md={4}><hr /></Col>
                            <Col sm={8} md={4}>
                                <div id="centeredHeading">
                                    <h3>Contact Us</h3>
                                </div>
                            </Col>
                            <Col sm={2} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>

                Have any questions, comments, or concerns? Please feel free to reach out to us. The staff at Hotel NoMa, San Francisco are dedicated
                to delivering an exceptional experience for each and every customer. You may fill out the form below to send an email
                to our staff. You may also contact us via phone at (555) 415-5104 or by directly by email at <a href={emailRef}>hotelnomaSF@gmail.com</a>.

                <div id="resultContainerContactUs">
                    <br />
                    <form>
                        <div id="contactUsContainer">
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Your message:</ControlLabel>
                                <FormControl placeholder="For testing purposes, please enter your email address to receive a copy of what staff members would see" componentClass="textarea" style={{ height: "300px" }} type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Email address:</ControlLabel>
                                <FormControl type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </FormGroup>
                        </div>
                        <Button id="submitContactFormButton" bsStyle="success" value="submitContactForm"
                                onClick={this.handleSubmit}>
                            Submit!
                        </Button>
                    </form>
                    <br />
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

export default connect(mapStateToProps)(ContactUs);