import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRoomType} from '../actions';
import { Redirect } from 'react-router';
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap';


import ExcaliburPhotoModal from './subcomponents/results/resultsExcaliburModal';
import NuggetPhotoModal from './subcomponents/results/resultsNuggetModal';

//import { Link } from 'react-router-dom';

// vector images courtesy of: https://icons8.com

// expand bg beyond container: http://www.modusagency.com/css-trick-expanding-a-div-beyond-a-parent-container/
// add loading. Like https://stackoverflow.com/questions/33097064/react-delayed-rendering
//to-do: define number of rooms available per day, see if available. If conditions not met, remove from results
//to-do: link checkout action to pressing room button
//to-do: change grammar if 1 night
//to-do: functional modify search button
//to-do: image carousel and/or modal


//===============================================================================================//



class ListResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandExcaliburView: false,
            expandNuggetView: false,
            excaliburShow: false,
            nuggetShow: false

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
    componentDidMount() {
        if (this.props.itinerary.numAdults > 3) {
            console.log('need to remove smaller room options');
        }
    }
    */

    handleSubmit(event) {
        event.preventDefault();
        let roomSelection = event.target.value;
        this.props.dispatch(updateRoomType(roomSelection));
        this.setState({redirect: true});
        //temporary. Just to test if room type is successfully updating
        //{alert(this.props.itinerary.roomType)}
    }


    render () {
        // Use this to see if panels are collapsed or not: console.log(this.state);

        // Using react-router to navigate to checkout after room type selected
        if (this.state.redirect) {
            return <Redirect push to="/checkout" />;
        }

        let excaliburClose = () => this.setState({ excaliburShow: false });
        let nuggetClose = () => this.setState({ nuggetShow: false });



        return (
            <div>

                <h3>Results that match {this.props.itinerary.numAdults} adult guest
                    from {this.props.itinerary.enterDate} to {this.props.itinerary.exitDate}.
                    Your total stay is {this.props.itinerary.numNights} night(s).
                </h3>
                <Button bsStyle="primary">Modify Search</Button>

                <div id="resultContainer">
                    <Grid>
                        <Row className="resultsGrid">
                            <Col id="thumbResult" sm={4} md={4}>
                                <div className="thumbPhoto">
                                    <img alt="excaliburPreview" onClick={()=>this.setState({ excaliburShow: true })} src="https://secure.fourseasons.com/content/dam/fourseasons/images/web/CFS/CFS_1208_aspect16x9.jpg/jcr:content/renditions/cq5dam.web.468.263.jpeg" />
                                    <ExcaliburPhotoModal show={this.state.excaliburShow} onHide={excaliburClose} />
                                </div>
                            </Col>
                            <Col id="highlightResult" sm={8} md={8}>
                                <div>
                                    <p className="alignLeft">Excalibur Suites</p>
                                    <p className="alignRight">From ${(this.props.pricing.familyAccommodation).toFixed(2)}/night</p>
                                </div>
                                <div style={{clear: 'both', textAlign: 'center'}}>
                                    <Grid>
                                        <Row className="amenityText">
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="wifi" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADKUlEQVRoQ+2YjW0UMRBGv1QAHUAHhAoIFUAHkApIKgAqACoAOoAKAhUAHZAOkg7QW3lOPsde/yfhtCOdbnW3tud5vvHYPtKB2NGBcGgDuW+R3CKyRWTSDIyS1rGkJ5IeS+L5offtu34l6bck+/4r6Y/7rQuxFQRHX0h6KenEOd7jCGA/JH2T9N2BVvVXC4LTbxxA1UCVLwP0ycEVNS0FeSXpzMmlqONBLyHDj5K+5vrLgRCBD3cAEPoN0PlahFIg5MDnW5BQbqLD/5HcaSyHYiAkMBDA3EdjYQAGqJ2FIMiIXPgfjNxBbosZyAgpUQ9YQqkNaNrqhT8p1BmrNXyTg9SfVttJDRAgLhoT+qekLy7MhLzFGB85v5b0rKEDJuw5IDjC8lpjLIfv3OzXtMu9S5Tot9ofiwiSKAkxVZccQj4zDSBygN1DzpD0iZ8jhOhRotWlCz3AKUMiSIO9lm1bePbN8oZ+eEaaa5KkHxSz5hdjXPmrFj8wwINgcKKAflMDIgM0zqfFSFg+qerNBAETRufaTRgTcuOoG8K8d5qNOfjWASKDEYZccZgxY0buMCa2BxED4TeDIRfoODRmnnozCiDsHyAKXkzGKIPcQXJLJMzWtiihlAgxM3JbBXOv4Hk+48cNmec2jda+p9b0yG6pESXnkxIQpMbeK1yBehysaQsMUtuTUthBCQi6BOQuDZBYvmZzJHS6BoYCxaD+2dwWETvL019JAaZdFiK1aqVmPgdDHWAhKN1zAUVCr21HiiBqQXg/BkN15vfWbQvLOBEMN4zFEC0gIQwXBKOWY6LDxUaxnErqSC6xiQAWS0D/qsjOHrxLzhC1tSuftX5XfSpZtXJQ/v9WMHPHZPKICKS2IzVjLu+OAmktmMUFL0c2AgT5/Oq4rCA6TzsWi6ERaTll2iSzbFtu5CY++f+IiFjnLTBDIEbmSAvMMIgZIPTJOSJ3G8Kps/VEGZXXSGnZAKxga5cZy2VBxVamKG9mgDBwCmYKxCxppSIzDWI2iB8ZnofLacReq0i37iXbrpRu72v63r07K0eanOlptIH0zN6MtltEZsxqT58HE5F/ymme8w1tcMEAAAAASUVORK5CYII=" />
                                                <p>Wifi</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="pool" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADl0lEQVRoQ+3Yj3FNURAG8E0FqAAVoAJUgAroABWQClABKkAFqEB0QAWiAuaXOWtOTs67//JuxmTuzry5ybvn7O73fbt7TnIQl8QOLgmO2ID8b0puimyKrMTAVlorEbvY7abIYupW2rgpMkDs44h4EhH3IuJHRDyPiI8rCfHP7T4VAeBlRNzoJP1obTD7ANIC+BkRz0rinq8i4jgibpbnKuKcB0gPAEXeNZl+iYi7BRhlVrElQKYCyISV2lFEXImI+xEB2N5tDpC5AOpks8Q0/501SmwKkNsR8aFqYj3QKyGJY/9pmVqmVV1mVLkVEW9KD+1ShY8XEfEwIq4W0KbeYZmC3X1jQIzQz2XnGADBjd20tsER8q283FVi4iENgNb402Pd0hwDIrAEsEGF1gTOcyPfvS+JPOg0OB8AU0eJ1UYJ8YD4VOJZJ759/AFjnxI9ZWNA/pTV7ToAJORZAxBQkKEG9/56hxxliBQglFVrygsYRNXKn6wbA5J1LUGqGKNqn0P2OyJel15oWUr2fe8MSavL1fe571dRA+Pi9tRX5lS5NlcRzKjZ1hIAEBzvsiSiLU37DAX1rl/YLvVr3zvXjCnCCQaxS43vRQEyDwFQ5xLNvmrLxXtKOFsonIT4fUwRJJ4ZBlOADBDefUVF15K8cxm3ALXAU+1sYGv0CJJ6NwCVYc+iHpkDQuJvqwFAPQfh0EmeDexJmbwB5LmRUyvPFWqYYrOn1lQgAkma5IJhV7mMmfWSNcWyV4BQYr2+pMiic2QsEf1DhSwjsgM01D+tT6OUjywZvhAhaYAQA1yO9m5OS3sEk4LnvHfqS2jJhZAvo7c7VseYzPeA5LVBg52pvY6jnEZZRkqod+pPzSGBWL+U2JONOesxIiFTpmfKyDTSbMxIVUZTwPf8KSEjnaq9k5y6cpKfn78OMQMIRrBq9DGJAaRmmfcA5LXgPGWEBHEk3vuTeChXoPSKDxJPWS0lxt13TJAE5PecRr5zQo+d5m2MmvU6+WxijOcnhwTygLbeE/DMK3OTB7JP9vRqEvMUqTdaS15s5D2olVpQezx9EFNfKvmgJh8I6t2nhhThU24+mRsQAB0ONZck8t86LaihgO07ByMSliS/Kw6FVAq12dHUKUFewFLuZL8OhG39lQ2aTTrnTJlDkLXZDsdTgcwNcOHrNyAXTvlIwE2RTZGVGNhKayViF7vdFFlM3UobN0VWInax20ujyF9FfdrSUbxTMgAAAABJRU5ErkJggg==" />
                                                <p>Pool</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="view" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACnElEQVRoQ+2Zi7FMQRCG/5sBESACRIAMiIAMEAEiQAZEQAaIABEgAjKgvlvTVVOz597TjzlLrTNVW7v37jz6m7+7p3fOmU6knZ0Ih3aQf03JYyjyuUHf3hL+GCC/G8Cma206eQPYQSKu+F8qcl3S98guTXCtK5J+edb0KgIE2QeQe97JCyAAfJDEuldngjDXF0k323sEhnG0Wx6DJBkE/b96x3kVwQYW+JiEcTIcQNz1qh8B2RpmVMINgWFRkK1gShBZkBHmxkI2w78ft2C12CBWSBavW5z17kZQf2sxEVLCJskoMhrQp2SMeOkIUKCetpiz+bLp/Xx8FaSHQoFX7R8/2meSQ5+1AH0i6Vrrx2cUKrdZIM8lPWvWsNMGdJGBAKAc7YUkxpfaDJD7kt41KyjVTYE1w4gdK/EfSHq/NuCy72eAEKT4t0eJ0RZThjgjaaRbFcTUICaAyTQgiJmSKlWQN5IeJtUwaFPlraRHmZ1gTBUEH8fXI7Ex2mqxQmylfw6PIJyw+DzvS21cbNavv3GeqB0HijABxlqeH2HGanRLkIgdZdey0n6Ga7lL9iVXqcbIyQS7pd/KOWDn0F9Nv6hs50DlQKycQ+eeVnUt5jiZEgUYikSqX5qnou0rZapfxpTaDEXMgB4Gd+PvT0MZf6cZbeXMFIhZrtXvJG4GwEXnkPUlJlChVPH2C2cVWbt3AogX5QdXSDTOCc4djF8C+Jm8N0sHe+reyREA2XuzFEj5tuMSoNK9WcS1toQwvjSMF6QCEX1ilYLxglTunTIVcg+zdG924KFeEAYCwxW/65q/WykDwnBgeLkeZURAHIlnsUsWJLTeDhLYrl2RwGZNKePX1os+sVqbb/H7Y8RIyrDooB0kumNb9z8ZRf4AU/StM5dPhtMAAAAASUVORK5CYII=" />
                                                <p>View</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="fitnessCenter" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAChklEQVRoQ+2ZjzEEMRTGv+tAB0YFdIAOqAAVoAMqQAWoABWgAnSgA1TAfDeJyWXzsskm+7J3c5kxc+5uc++X7/1LMsOKjNmKcGANMjUlp6TIBoAHAHsArgGcm8Xi+1cADgB8ArgDcOMvpCYIDbo1Br0AOATw7Rj7DGDHMZAGn5j/+frI+YyQhP0fmiBvnqHvAPYNDFebavhDgqEyWy1Azox7+Ia6MMdGsRSYHwBUWF0RCYSGDIHhcwRXB+HqMS62hWyXC8P5bHzNp9SMkdowC2uiCcIfHg1GG6QWDOsI4049RvzQqKHMgggtFLFQJTCvpgNorkgJzIeBaJa1XPeiGqcALjMTADsApvEFCO3066pg+yrbguS4WbAUaccIDZaawyIYTZAQhF1duthFpps1KYgxCD94+5RhjLBrVgfJgUjNZh1PGtu1hkD0wdz7ne/YWasEQoIJ1pAxQWpAuDDce7B2MF0PSr/cJ9MoytkpQsKcNSEkuzvvSzHiG+NufGKTN4GIuRYPAtgOuKMPphlEDORXWHYJpilEDIRFZzcRpjlEDKSvuqacSYmpMjmCM74YK4g5MP6ZlCpESh0ZAqMO0edaPEx+zOxIxY1PhpcM+mrItdzg5SEyq2mOMoMMKX0oBMKND9WwYylgQiChGjJ5mBAI7x14MOCPScNI6de/WJm8m8XqyFLBSFmLCtj+373ymqwyIRAqwXsMey1Wqkznvq801YaeD4F8mbrh9lMlMM1AeNG4aahTYHg7K3UAbFfcm9oxxJjPGVLEv++LwYTOpAjFLcCTOe1I3SIXQUpZizD8Y2tCw/jaGmTrDI/22VupGNpHOfa5Vt/vV/t8DVJtKStNtDKK/AF6++4zHDv+LAAAAABJRU5ErkJggg==" />
                                                <p>Gym</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="parking" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACTklEQVRoQ+2Z61HdMBCFv1sBUEGggoQOSAWQCkgqIFQAVADpIFQAVBBKIBUAFUAHMIfxMh5je7XX8gOP9cczV9Jqz559SXfFTMZqJjhYgEyNyYWRqTLyMjXFgvqszLVmB+SzxYwR8IGRWQN5R13xW+93z82rRvPk1Rk5xEj0gNR4GxyIZ9kx50OMjKmod3YjEG/jVOfnV0fM0k2BPTUmPuiZmjkWID1ZYGGkJ8OuLbYXRjaBI+AA+BZU7Q64Bv4Az4G92YFI8StgO6BE3VIB+gXomzKyA/kH7AH/gZ8BRUxZGeIv8BW4Bb6noACyApEriY3HwqUirlHWV64pJr4APwpX8/BkBSLf3geOgQvvZGf+N3AO3BSx5onLBkQxcV+cthUM1DolxcpTMbEDPDhIsgE5BU6AyyI2PAumzCtWDoEzQPLbRhYgClAFuayo4FSQ5hhKGpKrWJPctgzWGYiUl0vpm5MNM4SxIjBysaYE0hmIHaR0Gy1+qayJCaXjNkN1BiI2FOi7a9SMVCCW1hXwYqVudAYy1H3FOyc7EMteKZmmiZE6GYMDKT/9lC9p3pNQ09rqE27Tg+FgjESATIKR1ACOrhvctaIKpq5fgJilIpZQr6UKr+qrImZVWG291/SpFqlt15AMFVd9tVeddESPNyHR56DyAV5Ap7pRdZ10GgWIaohZ1SysFqNtqMUxBo1NMWzG7R2IDt8oaShX6HpfN3ER2Z3riFptNY7yb4HQPT1nG58q2wWyrl+Pvu+z/WfYaLAFyOi+VFFgYWRqjLwCrDS5M57Mh6cAAAAASUVORK5CYII=" />
                                                <p>Parking</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="laundry" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADFklEQVRoQ+2YjXHUMBBGv1QAqQCoIFABUAGkApIKgAqACiAVQCqADggVECoIqYBQAcy72c+j+Hz2WZbtu4w1c3MeS5b27Z9WOtAdaQd3hEMLyK5ZcrHIYpGRNLC41kiKzZ52sUi26kb6cLHISIrNnnaIRR5L+irpYfbqzR/eSLqU5P8LST+61hgC8k3Si64FCvX/lvRJ0nkArk07BISJX0v6IOl9IYE9zbOwNFZ/KelBdGClY0lY6VYbAsJi32O2J+EOhXmq6YB5I+lpvHkbFqoGDAFhEluFZ6yCdfo04gv3RFAUQ8ONiBFcF1dKG2u8ixenkr64cygI8zDZq0QIBOD3t8FKaPS+JFwGwS38Jnig0D7zuZ1I+lz3hBIgzIlAWOeojzliLFo3PK8MiSs5NlAWFnCzZYiV57wsBeIFEAKN8Y/m62BOowhg92ljB+ZjDDiLOPF4rAUoIBelQTIM0vlJ6koroeMLv19ZZR9AkNuuhBXJkG7/4uFwX0CQ166UpnpvysdTghAzpE5cgud6Y7MjqEnhPNebU30aK46hsylB0j2nLTDqQe2x3oBJGE7b1bspQf6EJTZVAWS6n2GNwwZS96dxMguIA7NNeV1j6v24KAq6Gcsi7ODpzu19pTPX5g4oCYKwVMME8+StBAiaJxulddOvKDt8QForuwuSrtxtCAiVK8WbAa6j3iK3k/OnaoNAcB9qIIINAHbeqqSeiiDWyQJBcAAcB1SubEpNG9hUPL1BgOBESFBz1gAmPSdMJXh9nV4gKQSBDASB3NaIHR+AOEukAZ/b17Te1iAENZbgHwiE2MaVrpKrIoL/USJFbl82SN0S20KwILD3YmUSQnr/lduXBTIEggWBdibDFeuuldOXBYJ/I0Afd5oj4FtjxHU+2QnNdgX2HABecyOIy2UGcqu3Cym2TVGNIMQFZwICc4yr0DEs1wjC7Tq3fnvX0qIRAED2shkEl2KT4n/tgnjHyW65lu9v04P9jstfiVeB+ABPqiVjTXmWKKGsCiSte0pMPMcc18QIm13OLfocAjetSR138h+mnree0ySHhAAAAABJRU5ErkJggg==" />
                                                <p>Laundry</p>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                                <Button bsStyle="success" block onClick={ ()=> this.setState({ expandExcaliburView: !this.state.expandExcaliburView })}>
                                    See available rooms
                                </Button>
                                <Panel collapsible expanded={this.state.expandExcaliburView}>
                                    <div>
                                        <h1>Executive Suite (Room size: 986 sq) ${(this.props.pricing.executiveSuite).toFixed(2)}/night</h1>
                                        <Button bsStyle="success" value="executiveSuite" onClick={this.handleSubmit}>Book now</Button>
                                        <p>One king bed, city view. Pictures TBD</p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                    <hr />
                                    <div>
                                        <h1>Family Accommodation (Room size: 700 sq) ${(this.props.pricing.familyAccommodation).toFixed(2)}/night</h1>
                                        <Button bsStyle="success" value="familyAccommodation" onClick={this.handleSubmit}>Book now</Button>
                                        <p>Two Double beds, swimming pool view. Pictures TBD</p>
                                        Number of form groups, we recommend building a higher-level component encapsulating a complete field
                                        group that renders the label, the control, and any other necessary components. We don't provide this
                                        out-of-the-box.
                                    </div>
                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div id="resultContainer">
                    <Grid>
                        <Row className="resultsGrid">
                            <Col id="thumbResult" sm={4} md={4}>
                                <div className="thumbPhoto">
                                    <img alt="excaliburPreview" onClick={()=>this.setState({ nuggetShow: true })} src="https://secure.fourseasons.com/content/dam/fourseasons/images/web/CFS/CFS_1208_aspect16x9.jpg/jcr:content/renditions/cq5dam.web.468.263.jpeg" />
                                    <NuggetPhotoModal show={this.state.nuggetShow} onHide={nuggetClose} />
                                </div>
                            </Col>
                            <Col id="highlightResult" sm={8} md={8}>
                                <div>
                                    <p className="alignLeft">Den Guest Rooms</p>
                                    <p className="alignRight">From ${(this.props.pricing.frugalTraveler).toFixed(2)}/night</p>
                                </div>
                                <div style={{clear: 'both', textAlign: 'center'}}>
                                    <Grid>
                                        <Row className="amenityText">
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="wifi" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADKUlEQVRoQ+2YjW0UMRBGv1QAHUAHhAoIFUAHkApIKgAqACoAOoAKAhUAHZAOkg7QW3lOPsde/yfhtCOdbnW3tud5vvHYPtKB2NGBcGgDuW+R3CKyRWTSDIyS1rGkJ5IeS+L5offtu34l6bck+/4r6Y/7rQuxFQRHX0h6KenEOd7jCGA/JH2T9N2BVvVXC4LTbxxA1UCVLwP0ycEVNS0FeSXpzMmlqONBLyHDj5K+5vrLgRCBD3cAEPoN0PlahFIg5MDnW5BQbqLD/5HcaSyHYiAkMBDA3EdjYQAGqJ2FIMiIXPgfjNxBbosZyAgpUQ9YQqkNaNrqhT8p1BmrNXyTg9SfVttJDRAgLhoT+qekLy7MhLzFGB85v5b0rKEDJuw5IDjC8lpjLIfv3OzXtMu9S5Tot9ofiwiSKAkxVZccQj4zDSBygN1DzpD0iZ8jhOhRotWlCz3AKUMiSIO9lm1bePbN8oZ+eEaaa5KkHxSz5hdjXPmrFj8wwINgcKKAflMDIgM0zqfFSFg+qerNBAETRufaTRgTcuOoG8K8d5qNOfjWASKDEYZccZgxY0buMCa2BxED4TeDIRfoODRmnnozCiDsHyAKXkzGKIPcQXJLJMzWtiihlAgxM3JbBXOv4Hk+48cNmec2jda+p9b0yG6pESXnkxIQpMbeK1yBehysaQsMUtuTUthBCQi6BOQuDZBYvmZzJHS6BoYCxaD+2dwWETvL019JAaZdFiK1aqVmPgdDHWAhKN1zAUVCr21HiiBqQXg/BkN15vfWbQvLOBEMN4zFEC0gIQwXBKOWY6LDxUaxnErqSC6xiQAWS0D/qsjOHrxLzhC1tSuftX5XfSpZtXJQ/v9WMHPHZPKICKS2IzVjLu+OAmktmMUFL0c2AgT5/Oq4rCA6TzsWi6ERaTll2iSzbFtu5CY++f+IiFjnLTBDIEbmSAvMMIgZIPTJOSJ3G8Kps/VEGZXXSGnZAKxga5cZy2VBxVamKG9mgDBwCmYKxCxppSIzDWI2iB8ZnofLacReq0i37iXbrpRu72v63r07K0eanOlptIH0zN6MtltEZsxqT58HE5F/ymme8w1tcMEAAAAASUVORK5CYII=" />
                                                <p>Wifi</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="pool" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADl0lEQVRoQ+3Yj3FNURAG8E0FqAAVoAJUgAroABWQClABKkAFqEB0QAWiAuaXOWtOTs67//JuxmTuzry5ybvn7O73fbt7TnIQl8QOLgmO2ID8b0puimyKrMTAVlorEbvY7abIYupW2rgpMkDs44h4EhH3IuJHRDyPiI8rCfHP7T4VAeBlRNzoJP1obTD7ANIC+BkRz0rinq8i4jgibpbnKuKcB0gPAEXeNZl+iYi7BRhlVrElQKYCyISV2lFEXImI+xEB2N5tDpC5AOpks8Q0/501SmwKkNsR8aFqYj3QKyGJY/9pmVqmVV1mVLkVEW9KD+1ShY8XEfEwIq4W0KbeYZmC3X1jQIzQz2XnGADBjd20tsER8q283FVi4iENgNb402Pd0hwDIrAEsEGF1gTOcyPfvS+JPOg0OB8AU0eJ1UYJ8YD4VOJZJ759/AFjnxI9ZWNA/pTV7ToAJORZAxBQkKEG9/56hxxliBQglFVrygsYRNXKn6wbA5J1LUGqGKNqn0P2OyJel15oWUr2fe8MSavL1fe571dRA+Pi9tRX5lS5NlcRzKjZ1hIAEBzvsiSiLU37DAX1rl/YLvVr3zvXjCnCCQaxS43vRQEyDwFQ5xLNvmrLxXtKOFsonIT4fUwRJJ4ZBlOADBDefUVF15K8cxm3ALXAU+1sYGv0CJJ6NwCVYc+iHpkDQuJvqwFAPQfh0EmeDexJmbwB5LmRUyvPFWqYYrOn1lQgAkma5IJhV7mMmfWSNcWyV4BQYr2+pMiic2QsEf1DhSwjsgM01D+tT6OUjywZvhAhaYAQA1yO9m5OS3sEk4LnvHfqS2jJhZAvo7c7VseYzPeA5LVBg52pvY6jnEZZRkqod+pPzSGBWL+U2JONOesxIiFTpmfKyDTSbMxIVUZTwPf8KSEjnaq9k5y6cpKfn78OMQMIRrBq9DGJAaRmmfcA5LXgPGWEBHEk3vuTeChXoPSKDxJPWS0lxt13TJAE5PecRr5zQo+d5m2MmvU6+WxijOcnhwTygLbeE/DMK3OTB7JP9vRqEvMUqTdaS15s5D2olVpQezx9EFNfKvmgJh8I6t2nhhThU24+mRsQAB0ONZck8t86LaihgO07ByMSliS/Kw6FVAq12dHUKUFewFLuZL8OhG39lQ2aTTrnTJlDkLXZDsdTgcwNcOHrNyAXTvlIwE2RTZGVGNhKayViF7vdFFlM3UobN0VWInax20ujyF9FfdrSUbxTMgAAAABJRU5ErkJggg==" />
                                                <p>Pool</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="fitnessCenter" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAChklEQVRoQ+2ZjzEEMRTGv+tAB0YFdIAOqAAVoAMqQAWoABWgAnSgA1TAfDeJyWXzsskm+7J3c5kxc+5uc++X7/1LMsOKjNmKcGANMjUlp6TIBoAHAHsArgGcm8Xi+1cADgB8ArgDcOMvpCYIDbo1Br0AOATw7Rj7DGDHMZAGn5j/+frI+YyQhP0fmiBvnqHvAPYNDFebavhDgqEyWy1Azox7+Ia6MMdGsRSYHwBUWF0RCYSGDIHhcwRXB+HqMS62hWyXC8P5bHzNp9SMkdowC2uiCcIfHg1GG6QWDOsI4049RvzQqKHMgggtFLFQJTCvpgNorkgJzIeBaJa1XPeiGqcALjMTADsApvEFCO3066pg+yrbguS4WbAUaccIDZaawyIYTZAQhF1duthFpps1KYgxCD94+5RhjLBrVgfJgUjNZh1PGtu1hkD0wdz7ne/YWasEQoIJ1pAxQWpAuDDce7B2MF0PSr/cJ9MoytkpQsKcNSEkuzvvSzHiG+NufGKTN4GIuRYPAtgOuKMPphlEDORXWHYJpilEDIRFZzcRpjlEDKSvuqacSYmpMjmCM74YK4g5MP6ZlCpESh0ZAqMO0edaPEx+zOxIxY1PhpcM+mrItdzg5SEyq2mOMoMMKX0oBMKND9WwYylgQiChGjJ5mBAI7x14MOCPScNI6de/WJm8m8XqyFLBSFmLCtj+373ymqwyIRAqwXsMey1Wqkznvq801YaeD4F8mbrh9lMlMM1AeNG4aahTYHg7K3UAbFfcm9oxxJjPGVLEv++LwYTOpAjFLcCTOe1I3SIXQUpZizD8Y2tCw/jaGmTrDI/22VupGNpHOfa5Vt/vV/t8DVJtKStNtDKK/AF6++4zHDv+LAAAAABJRU5ErkJggg==" />
                                                <p>Gym</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img alt="parking" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACTklEQVRoQ+2Z61HdMBCFv1sBUEGggoQOSAWQCkgqIFQAVADpIFQAVBBKIBUAFUAHMIfxMh5je7XX8gOP9cczV9Jqz559SXfFTMZqJjhYgEyNyYWRqTLyMjXFgvqszLVmB+SzxYwR8IGRWQN5R13xW+93z82rRvPk1Rk5xEj0gNR4GxyIZ9kx50OMjKmod3YjEG/jVOfnV0fM0k2BPTUmPuiZmjkWID1ZYGGkJ8OuLbYXRjaBI+AA+BZU7Q64Bv4Az4G92YFI8StgO6BE3VIB+gXomzKyA/kH7AH/gZ8BRUxZGeIv8BW4Bb6noACyApEriY3HwqUirlHWV64pJr4APwpX8/BkBSLf3geOgQvvZGf+N3AO3BSx5onLBkQxcV+cthUM1DolxcpTMbEDPDhIsgE5BU6AyyI2PAumzCtWDoEzQPLbRhYgClAFuayo4FSQ5hhKGpKrWJPctgzWGYiUl0vpm5MNM4SxIjBysaYE0hmIHaR0Gy1+qayJCaXjNkN1BiI2FOi7a9SMVCCW1hXwYqVudAYy1H3FOyc7EMteKZmmiZE6GYMDKT/9lC9p3pNQ09rqE27Tg+FgjESATIKR1ACOrhvctaIKpq5fgJilIpZQr6UKr+qrImZVWG291/SpFqlt15AMFVd9tVeddESPNyHR56DyAV5Ap7pRdZ10GgWIaohZ1SysFqNtqMUxBo1NMWzG7R2IDt8oaShX6HpfN3ER2Z3riFptNY7yb4HQPT1nG58q2wWyrl+Pvu+z/WfYaLAFyOi+VFFgYWRqjLwCrDS5M57Mh6cAAAAASUVORK5CYII=" />
                                                <p>Parking</p>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                                <Button bsStyle="primary" block onClick={ ()=> this.setState({ expandNuggetView: !this.state.expandNuggetView })}>
                                    See available rooms
                                </Button>
                                <Panel collapsible expanded={this.state.expandNuggetView}>
                                    <div>
                                        <h1>Den (Room size: 650 sq) ${(this.props.pricing.den).toFixed(2)}/night</h1>
                                        <Button bsStyle="success" value="den" onClick={this.handleSubmit}>Book now</Button>
                                        <p>One queen bed, city view. Pictures TBD</p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                    <hr />
                                    <div>
                                        <h1>Frugal Traveler (Room size: 500 sq) ${(this.props.pricing.frugalTraveler).toFixed(2)}/night</h1>
                                        <Button bsStyle="success" value="frugalTraveler" onClick={this.handleSubmit}>Book now</Button>
                                        <p>One Double bed, swimming pool view. Pictures TBD</p>
                                        Number of form groups, we recommend building a higher-level component encapsulating a complete field
                                        group that renders the label, the control, and any other necessary components. We don't provide this
                                        out-of-the-box.
                                    </div>
                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <a href="https://icons8.com">Icon pack by Icons8</a>
                <a href="https://pexels.com">Great place for images. No attribution required.</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
        pricing: state.pricingReducer
    };
}

export default connect(mapStateToProps)(ListResults);



/*
        setTimeout(() => {
            return (
                alert('delayed  test')
            )
        }, 1000);

                                                <Link to="/checkout" role="button" value="executiveSuite" onClick={this.handleSubmit}>Test linkbutton</Link>


 */