import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

//===============================================================================================//

class ThriftyPhotoModal extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Additional photos of our Thrifty rooms:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel className="carouselLanding" autoPlay={true} dynamicHeight width={"100%"} useKeyboardArrows={false} showStatus={false} infiniteLoop={true}>
                            <div>
                                <img alt="expressBed" src="https://i.imgur.com/B5NCCYV.jpg" />
                                <p className="legend">Bed arrangement</p>
                            </div>
                            <div>
                                <img alt="expressRoomLayout" src="https://i.imgur.com/qqwTTt6.jpg" />
                                <p className="legend">Room layout</p>
                            </div>
                            <div>
                                <img alt="expressHallway" src="https://i.imgur.com/E1ipL8n.jpg" />
                                <p className="legend">Hallway</p>
                            </div>
                            <div>
                                <img alt="expressBatroom" src="https://i.imgur.com/wrLkvHx.jpg" />
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

export default ThriftyPhotoModal;