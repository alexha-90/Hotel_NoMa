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
                                <img alt="sanctuaryBed" src="https://i.imgur.com/5RUIngv.jpg" />
                                <p className="legend">Bed arrangement area</p>
                            </div>
                            <div>
                                <img alt="sanctuaryLivingArea" src="https://i.imgur.com/kkNpxln.jpg" />
                                <p className="legend">Living area</p>
                            </div>
                            <div>
                                <img alt="sanctuaryGift" src="https://i.imgur.com/EeOj3X7.jpg" />
                                <p className="legend">Gift towels</p>
                            </div>
                            <div>
                                <img alt="sanctuaryBathroom" src="https://i.imgur.com/Drnza7e.jpg" />
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