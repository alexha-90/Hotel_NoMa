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
                                <img alt="mardiLivingArea" src="https://cdn.pixabay.com/photo/2016/11/14/02/29/apartment-1822410_960_720.jpg" />
                                <p className="legend">Bed arrangement</p>
                            </div>
                            <div>
                                <img alt="mardiLivingArea" src="https://static.pexels.com/photos/237371/pexels-photo-237371.jpeg" />
                                <p className="legend">Living area</p>
                            </div>
                            <div>
                                <img alt="mardiFamilyArea" src="https://static.pexels.com/photos/276551/pexels-photo-276551.jpeg" />
                                <p className="legend">Family Area</p>
                            </div>
                            <div>
                                <img alt="mardiBathroom" src="https://static.pexels.com/photos/280209/pexels-photo-280209.jpeg" />
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