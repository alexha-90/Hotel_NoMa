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
                                <img alt="expressBed" src="https://images.pexels.com/photos/189293/pexels-photo-189293.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
                                <p className="legend">Bed arrangement</p>
                            </div>
                            <div>
                                <img alt="expressRoomLayout" src="https://images.unsplash.com/photo-1453967854176-7e6e8270b0b8?dpr=1&auto=compress,format&fit=crop&w=1650&h=&q=80&cs=tinysrgb&crop=" />
                                <p className="legend">Room layout</p>
                            </div>
                            <div>
                                <img alt="expressHallway" src="https://static.pexels.com/photos/154143/pexels-photo-154143.jpeg" />
                                <p className="legend">Hallway</p>
                            </div>
                            <div>
                                <img alt="expressBatroom" src="https://images.unsplash.com/photo-1414452110837-9dab484a417d?dpr=1&auto=compress,format&fit=crop&w=1655&h=&q=80&cs=tinysrgb&crop=" />
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