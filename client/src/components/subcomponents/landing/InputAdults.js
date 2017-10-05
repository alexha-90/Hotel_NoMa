import React from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// arguments received: this.props, this.handleNumAdultChange.bind(this)
// this function outputs the JSX form for number of adults staying
//===============================================================================================//

export function inputAdults(props, handleNumAdultChange) {
    let resultsURL = '/results';

    return (
        <Form inline onSubmit={handleNumAdultChange}>
            <FormGroup controlId="formControlsSelect" bsSize="large">
                <FormControl name="numAdults" value={props.itinerary.numAdults} onChange={handleNumAdultChange} componentClass="select">
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                </FormControl>
            </FormGroup>
            {' '}
            <Link to={resultsURL}><Button type="submit" bsStyle="success" bsSize="large">Go!</Button></Link>
        </Form>
    );
}