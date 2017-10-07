import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

//===============================================================================================//

class StandardPhotoModal extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Additional photos of our Standard rooms:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel className="carouselLanding" autoPlay={true} dynamicHeight width={"100%"} useKeyboardArrows={false} showStatus={false} infiniteLoop={true}>
                            <div>
                                <img alt="standardBed" src="https://i.imgur.com/6Rw90rg.jpg" />
                                <p className="legend">Bed arrangement</p>
                            </div>
                            <div>
                                <img alt="standardRoom" src="https://i.imgur.com/2s42qzN.jpg" />
                                <p className="legend">Room layout</p>
                            </div>
                            <div>
                                <img alt="standardLivingArea" src="https://i.imgur.com/zQvhotf.jpg" />
                                <p className="legend">Living area</p>
                            </div>
                            <div>
                                <img alt="standardBathroom" src="https://i.imgur.com/7txbfGG.jpg" />
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

export default StandardPhotoModal;