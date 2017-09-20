import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import moment from 'moment';

//to-do: account for PST timezone. http://momentjs.com/docs/#/parsing/string-format/

//===============================================================================================//

class Landing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numAdults: '1',
            enterDate: moment().format("MM/DD/YYYY"),
            exitDate: moment().add(1, 'days').format("MM/DD/YYYY"),
            numNights: (moment().add(1, 'days')).diff(moment(), 'days')  //use this for next page. not needed here
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            numAdults: event.target.value
        });
    }


    render() {
        // Information needed for results component
        console.log(this.state);

        return (
            <div className="landingMain">
                { /* User input required: start of stay, end of stay, # of adults */ }
                <div className="userInput">
                    <div className="formArea">
                        <h4>A worthwhile rendezvous. Tell us about your stay...</h4>

                        <form onSubmit={this.handleChange}>
                            <select name="numAdults" value={this.state.numAdults} onChange={this.handleChange}>
                                <option value="1">1 Adult</option>
                                <option value="2">2 Adults</option>
                                <option value="3">3 Adults</option>
                                <option value="4">4 Adults</option>
                            </select>
                             <Button type="submit" bsStyle="success" id="homeSearchButton">Go!</Button>
                        </form>
                        <hr />
                        Local time. Local temperature is {this.state.numAdults}
                    </div>

                </div>

                <Jumbotron>

                    <h3>The best amenities. Hands down.</h3>
                    <p>World class meeting rooms, restaurant, and fitness facilities all on-site and complimentary for our guests.</p>
                    <p><Button bsStyle="primary"><Link to="/amenities">Learn more</Link></Button></p>
                </Jumbotron>
                <div className="threeBlurbs">

                    <Grid>
                        <Row className="landingHighlights">
                            <Col sm={6} md={4}>
                                <h3>Hourly SFO shuttle service</h3><br/><p>We are at the heart of San Francisco. Market Street, close to BART. You can't beat us.Donec hendrerit tempor tellus. t, convallis nec, purus</p>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={6} md={4}>
                                <h3>Complementary breakfast</h3><br/><p>ndrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis</p>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={6} md={4}>
                                <h3>Automatic late checkout</h3><br/><p>amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam</p>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('current mapStateToProps is: ' + state);
    return {
        numAdults: state.numAdults
    }
}

export default connect(mapStateToProps)(Landing);





/*
        //this.onSubmit = this.onSubmit.bind(this);

Temporary. Used to explicitly print form inputs
// helpful link: https://stackoverflow.com/questions/43695128/input-elements-should-not-switch-from-controlled-to-uncontrolled-reactjs-error/43695213#43695213
onSubmit(event) {
    event.preventDefault();
    alert('Number of adults is: ' + this.state.numAdults);
    //window.location.replace("/results");  //temporary
}


        let currentDate = [today.getFullYear(), today.getMonth(), today.getDate()];
*/