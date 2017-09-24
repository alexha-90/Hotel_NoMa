import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

//===============================================================================================//

class NuggetPhotoModal extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Additional photos of our Nugget guest rooms:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel className="carouselLanding" autoPlay={true} dynamicHeight width={"100%"} useKeyboardArrows={false} showStatus={false} infiniteLoop={true}>
                            <div>
                                <img alt="frugalTravelerBed" src="https://www.goodnewsnetwork.org/wp-content/uploads/2016/05/Room-released-Amazon.jpg" />
                                <p className="legend">Bed arrangement (single king bed)</p>
                            </div>
                            <div>
                                <img alt="familyRoom" src="https://storage.googleapis.com/cdncontent/web2/crestonbarkly/images/slider/crest-on-barkly-hotel-room-st-kilda-06.jpg" />
                                <p className="legend">Bed arrangement (family room)</p>
                            </div>
                            <div>
                                <img alt="excaliburRoomLayout" src="https://storage.googleapis.com/cdncontent/web2/crestonbarkly/images/slider/crest-on-barkly-hotel-room-st-kilda-08.jpg" />
                                <p className="legend">Room layout</p>
                            </div>
                            <div>
                                <img alt="excaliburBathroom" src="https://www.proremodeler.com/sites/default/files/styles/pr_main_image/public/PR%20Design%20Awards_Michael%20Nash%20Design%20Build_Gold_hero_0915.png?itok=YyzcVE1P" />
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

export default NuggetPhotoModal;