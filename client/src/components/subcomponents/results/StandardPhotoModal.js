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
                                <img alt="standardBed" src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
                                <p className="legend">Bed arrangement</p>
                            </div>
                            <div>
                                <img alt="standardRoom" src="https://static.pexels.com/photos/271619/pexels-photo-271619.jpeg" />
                                <p className="legend">Room layout</p>
                            </div>
                            <div>
                                <img alt="standardLivingArea" src="https://static.pexels.com/photos/271624/pexels-photo-271624.jpeg" />
                                <p className="legend">Living area</p>
                            </div>
                            <div>
                                <img alt="standardBathroom" src="https://static.pexels.com/photos/262005/pexels-photo-262005.jpeg" />
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