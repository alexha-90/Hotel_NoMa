import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Iframe from 'react-iframe';

//===============================================================================================//

class GoogleMapModal extends Component {
    render() {
        const googleMapURL='https://www.google.com/maps/embed/v1/place?q=37.788383%2C%20-122.407793&key=' + process.env.REACT_APP_GOOGLE_MAPS_KEY;

        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Body>
                    <div>
                        <Iframe url={ googleMapURL }
                                width="100%"
                                height="700px"
                                position="static"
                                allowFullScreen />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default GoogleMapModal;