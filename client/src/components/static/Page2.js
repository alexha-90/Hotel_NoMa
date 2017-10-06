import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//===============================================================================================//

class BlankPageTemplate extends Component {
    render() {
        return (
            <div className="backgroundTest">
                <img id="splashImageTest" alt="backgroundSplash" src="https://static.pexels.com/photos/61111/pexels-photo-61111.jpeg" />
                <div className="calendarPicker">
                    Blank page template. Ignore me!
                </div>
            </div>
        );
    }
}

export default BlankPageTemplate;


/*


                <FullScreen>
                    <img style={{marginLeft: '-29%' }} alt="backgroundSplash" src="https://static.pexels.com/photos/61111/pexels-photo-61111.jpeg" />
                </FullScreen>

import React, { Component } from 'react';

class BlankPageTemplate extends Component {
    render() {
        return (
            <div id="landing-header">
                <h1>Blank page template. Ignore me!</h1>

                <ul className="slideshow">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <div className="coverOver">
                    <h1>Blank page template. Ignore me!</h1>


                    <Jumbotron>
                        <h2>The best amenities. Hands down.</h2>
                        <p>Our hotel features a world-class auditorium, newly remodeled fitness facility, and the best downtown views of San Francisco's historic Market Street. Fantastic restaurants are plentiful and only short walks away. Public transportation via BART and MUNI are very accessible.</p>
                        <div className="learnMoreButton">
                            <Link to="/amenities"><Button bsStyle="success">Learn more</Button></Link>
                        </div>
                    </Jumbotron>
                </div>

            </div>




            </div>
        );
    }
}

export default BlankPageTemplate;

 */