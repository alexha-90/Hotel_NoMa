import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

//===============================================================================================//

class ExcaliburPhotoModal extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Additional photos of our Excalibur suites:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel className="carouselLanding" autoPlay={true} dynamicHeight width={"100%"} useKeyboardArrows={false} showStatus={false} infiniteLoop={true}>
                            <div>
                                <img alt="excaliburView" src="https://i.imgur.com/yiLu7Pc.jpg" />
                                <p className="legend">Hallway</p>
                            </div>
                            <div>
                                <img alt="excaliburView" src="https://i.imgur.com/Fr9aLUn.jpg" />
                                <p className="legend">City view</p>
                            </div>
                            <div>
                                <img alt="excaliburFamilyRoom" src="https://i.imgur.com/zDv19Vr.jpg" />
                                <p className="legend">Family room</p>
                            </div>
                            <div>
                                <img alt="excaliburBathroom" src="https://i.imgur.com/SYGKtBc.jpg" />
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

export default ExcaliburPhotoModal;