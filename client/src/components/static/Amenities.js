import React, { Component }from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
//===============================================================================================//

class Amenities extends Component {
    render() {
        window.scrollTo(0, 0);

        return (
            <div>
                <br />
                <br />
                <br />

                <div id="AmenitiesSpacing">
                    <Grid>
                        <Row>
                            <Col sm={2} md={4}><hr /></Col>
                            <Col sm={8} md={4}>
                                <div id="centeredHeading">
                                    <h3>Amenities</h3>
                                </div>
                            </Col>
                            <Col sm={2} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>
                <br />

                <img id="amenitiesPhoto" src="https://i.imgur.com/bkSu5QJ.jpg" alt="bigPhoto"/>

                <br />

                <div className="amenitiesContainer">
                    <div id="leftImage">
                        <img src="https://png.icons8.com/classroom/dusk/120" alt="meetingRooms" title="Classroom" />
                    </div>

                    <div id="rightText">
                        <h3>Highlight 1</h3>
                        <p>
                            Cras et porttitor justo. Aenean vel vestibulum ligula. Praesent finibus lacus at fermentum eleifend. Morbi
                            lobortis erat sit amet eros scelerisque consequat at ac nunc. In pulvinar, arcu dignissim fermentum varius,
                            justo augue tincidunt metus, ut feugiat libero nisi sit amet eros. Etiam in hendrerit magna. Fusce vel dui
                            nec risus hendrerit mattis id nec elit. Fusce sed molestie ligula, nec dapibus augue.
                            Aenean vel fermentum neque. Phasellus massa justo, bibendum in mattis vitae, cursus nec eni.
                            Donec lacinia turpis nec pharetra commodo. Cras ac ultricies urna. Fusce vel erat tristique, vehicula
                            metus quis, vehicula turpis. Suspendisse potenti. Praesent ac laoreet augue. Curabitur est magna, suscipit
                            vel feugiat ac, iaculis vitae neque. Aenean luctus maximus ullamcorper. Pellentesque habitant morbi tristique
                            senectus et netus et malesuada fames ac turpis egestas. In mattis nisl et lorem gravida aliquam. Nulla non
                            velit ante. In fermentum commodo odio, a tempor lacus faucibus et.
                        </p>
                    </div>
                </div>

                <div className="amenitiesContainer">
                    <div id="rightImage">
                        <img alt="bed" src="https://png.icons8.com/sleeping-in-bed/dusk/120" title="Sleeping in Bed" />
                    </div>

                    <div id="leftText">
                        <h3>Highlight 2</h3>
                        <p>
                            Cras ligula urna, rhoncus in malesuada a, convallis ac ligula. Maecenas consectetur euismod ultricies.
                            Cras tempus metus elit, non aliquet dui elementum faucibus. Sed quis ultrices nulla. Nam rhoncus ante sit
                            amet ligula elementum luctus. Proin faucibus purus quis ligula aliquet, id blandit lectus placerat. Phasellus
                            vel finibus leo, sed commodo dui. Curabitur placerat, turpis at consectetur sollicitudin, neque massa elementum
                            lorem, sed molestie orci nunc ut dui. Duis cursus vel diam et viverra. Duis felis erat, lobortis ornare sodales
                            id, auctor nec felis. Maecenas id est non leo finibus accumsan. Etiam fermentum vitae massa eget ornare. Cras eu
                            dolor quis mauris bibendum elementum. Morbi felis ante, gravida eu enim quis, auctor lacinia massa. Vivamus arcu
                            dolor, scelerisque vel nulla et, blandit gravida arcu. Quisque vehicula, nulla in tincidunt fringilla, eros ante
                            euismod lectus, id aliquam sapien mauris eu sem.
                        </p>
                    </div>
                </div>

                <div className="amenitiesContainer">
                    <div id="leftImage">
                        <img src="https://png.icons8.com/bench-press/color/120" alt="exercise" title="Bench Press" />
                    </div>

                    <div id="rightText">
                        <h3>Highlight 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur ex vel cursus imperdiet. Duis
                            commodo sodales tortor ut porta. Ut sit amet molestie magna. Ut laoreet urna vitae mauris placerat, eget rutrum
                            sapien tristique. Phasellus quis suscipit enim, vitae faucibus nisi. Aliquam erat volutpat. Suspendisse et urna
                            vitae libero suscipit eleifend et ut mauris. Vestibulum eu sapien a lacus eleifend placerat. Cras enim massa,
                            hendrerit aliquet pellentesque in, ornare quis mi. Proin quam urna, vehicula in ante ut, tincidunt sodales elit.
                            Nam vulputate blandit urna ac maximus. Cras pulvinar feugiat neque, a mollis arcu euismod ac. Curabitur volutpat
                            tincidunt turpis, id luctus quam lobortis maximus. Integer accumsan gravida nibh et dapibus. Nulla vel nunc dui.
                            Nullam consectetur et neque a rutrum. Praesent pellentesque lectus in dui viverra faucibus. Mauris non nulla
                            purus. Quisque eu ex eget purus aliquam vestibulum nec ut elit.
                        </p>
                    </div>
                </div>









            </div>
        );
    }
}

export default Amenities;