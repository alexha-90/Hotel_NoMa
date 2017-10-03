import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

//===============================================================================================//

class SanctuaryPhotoModal extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Additional photos of our Sanctuary rooms:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel className="carouselLanding" autoPlay={true} dynamicHeight width={"100%"} useKeyboardArrows={false} showStatus={false} infiniteLoop={true}>
                            <div>
                                <img alt="sanctuaryBed" src="https://static.pexels.com/photos/164595/pexels-photo-164595.jpeg" />
                                <p className="legend">Bed arrangement area</p>
                            </div>
                            <div>
                                <img alt="sanctuaryLivingArea" src="https://static.pexels.com/photos/189333/pexels-photo-189333.jpeg" />
                                <p className="legend">Living area</p>
                            </div>
                            <div>
                                <img alt="sanctuaryGift" src="https://static.pexels.com/photos/67723/pexels-photo-67723.jpeg" />
                                <p className="legend">Gift towels</p>
                            </div>
                            <div>
                                <img alt="sanctuaryBathroom" src="https://static.pexels.com/photos/271631/pexels-photo-271631.jpeg" />
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

export default SanctuaryPhotoModal;