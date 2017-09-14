import React, { Component }from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Amenities extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <div className="amenityTextBox">
                        <Row className="">
                            <Col sm={4} md={3} id="leftAmenityImage">
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={8} md={9}>
                                <h3>Highlight 1</h3>
                                <p>
                                    Think beyond the toothbrush, travel-size toothpaste and deodorant, and tote these life-enhancing items:
                                    Eyedrops: These will help ensure you’re bright-eyed for the 7 a.m. breakfast meeting.
                                    Hand-sanitizer: Ward off potential germs from a long day of travel and all the meeting-and-greeting at the reception.
                                    Facial wipes: For a quick re-boot, facial wipes let you easily freshen up between your last meeting and your client dinner.
                                    Reusable water bottle: Buy a bottle with a built-in filter to help the earth and save money.
                                    Prepare for the Unexpected
                                    Even if you’re just heading out of town for an overnight trip, you will want to be ready for a last-minute change in plans:
                                    Swimsuit: Your last sales call of the day got canceled? That means there’s time to take a dip in the pool — or swim some laps — provided you brought your swimsuit.
                                    Snack bag: When you have to power through your emails before you can go to dinner, you will be glad you brought a Ziploc stocked with nuts, dried fruit, granola or other favorite snacks.
                                    Sweater/light jacket: Because air-conditioning inside the convention center or the office you’re visiting could make it feel like winter — even in August.
                                    Stain-remover pen: With on-the-go food and coffee, spills are almost guaranteed, making this an essential item and especially helpful if you’re packing light.
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div className="amenityTextBox">
                        <Row className="">
                            <Col sm={8} md={9}>
                                <h3>Highlight 2</h3>
                                <p>
                                    Think beyond the toothbrush, travel-size toothpaste and deodorant, and tote these life-enhancing items:
                                    Eyedrops: These will help ensure you’re bright-eyed for the 7 a.m. breakfast meeting.
                                    Hand-sanitizer: Ward off potential germs from a long day of travel and all the meeting-and-greeting at the reception.
                                    Facial wipes: For a quick re-boot, facial wipes let you easily freshen up between your last meeting and your client dinner.
                                    Reusable water bottle: Buy a bottle with a built-in filter to help the earth and save money.
                                    Prepare for the Unexpected
                                    Even if you’re just heading out of town for an overnight trip, you will want to be ready for a last-minute change in plans:
                                    Swimsuit: Your last sales call of the day got canceled? That means there’s time to take a dip in the pool — or swim some laps — provided you brought your swimsuit.
                                    Snack bag: When you have to power through your emails before you can go to dinner, you will be glad you brought a Ziploc stocked with nuts, dried fruit, granola or other favorite snacks.
                                    Sweater/light jacket: Because air-conditioning inside the convention center or the office you’re visiting could make it feel like winter — even in August.
                                    Stain-remover pen: With on-the-go food and coffee, spills are almost guaranteed, making this an essential item and especially helpful if you’re packing light.
                                </p>
                            </Col>
                            <Col sm={4} md={3} id="rightAmenityImage">
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                        </Row>
                    </div>
                    <div className="amenityTextBox">
                        <Row className="">
                            <Col sm={4} md={3} id="leftAmenityImage">
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={8} md={9}>
                                <h3>Highlight 3</h3>
                                <p>
                                    Think beyond the toothbrush, travel-size toothpaste and deodorant, and tote these life-enhancing items:
                                    Eyedrops: These will help ensure you’re bright-eyed for the 7 a.m. breakfast meeting.
                                    Hand-sanitizer: Ward off potential germs from a long day of travel and all the meeting-and-greeting at the reception.
                                    Facial wipes: For a quick re-boot, facial wipes let you easily freshen up between your last meeting and your client dinner.
                                    Reusable water bottle: Buy a bottle with a built-in filter to help the earth and save money.
                                    Prepare for the Unexpected
                                    Even if you’re just heading out of town for an overnight trip, you will want to be ready for a last-minute change in plans:
                                    Swimsuit: Your last sales call of the day got canceled? That means there’s time to take a dip in the pool — or swim some laps — provided you brought your swimsuit.
                                    Snack bag: When you have to power through your emails before you can go to dinner, you will be glad you brought a Ziploc stocked with nuts, dried fruit, granola or other favorite snacks.
                                    Sweater/light jacket: Because air-conditioning inside the convention center or the office you’re visiting could make it feel like winter — even in August.
                                    Stain-remover pen: With on-the-go food and coffee, spills are almost guaranteed, making this an essential item and especially helpful if you’re packing light.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Amenities;