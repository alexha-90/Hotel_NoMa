import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

//===============================================================================================//

class MardiGrasPhotoModal extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Additional photos of our Mardi Gras suites:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel className="carouselLanding" autoPlay={true} dynamicHeight width={"100%"} useKeyboardArrows={false} showStatus={false} infiniteLoop={true}>
                            <div>
                                <img alt="mardiLivingArea" src="https://i.imgur.com/2bh5ZWF.jpg" />
                                <p className="legend">Bed arrangement</p>
                            </div>
                            <div>
                                <img alt="mardiLivingArea" src="https://i.imgur.com/aWXFvRA.jpg" />
                                <p className="legend">Living area</p>
                            </div>
                            <div>
                                <img alt="mardiFamilyArea" src="https://i.imgur.com/wA2vSay.jpg" />
                                <p className="legend">Family Area</p>
                            </div>
                            <div>
                                <img alt="mardiBathroom" src="https://i.imgur.com/foraGYw.jpg" />
                                <p className="legend">Bathroom</p>
                            </div>
                        </Carousel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MardiGrasPhotoModal;