import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Col, Grid, Row } from 'react-bootstrap';
//===============================================================================================//

class ContactUs extends Component {


    handleSubmit(event) {
        event.preventDefault();
        let contactUsTextInput = event.target.value;
        alert(contactUsTextInput);
        // alert your message has been sent
    }


    render() {
        const replyEmail = 'hotelnoma@example.com';
        let emailRef = 'mailto:' + replyEmail + '?subject=My question about Hotel NoMa';
        window.scrollTo(0, 0);

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
                    <form>
                        <FormGroup controlId="contactUsTextField">
                            <ControlLabel>Textarea</ControlLabel>
                            <FormControl type="text" placeholder="Enter text here" value={this.state.text} onChange={this.handleChange}/>
                        </FormGroup>
                        <Button id="submitContactForm" bsStyle="success" value="submitContactForm"
                                onClick={this.handleSubmit}>
                            Submit!
                        </Button>
                    </form>
                </div>

            </div>
        );
    }
}

export default ContactUs;