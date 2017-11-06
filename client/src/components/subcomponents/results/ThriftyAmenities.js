import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
//===============================================================================================//

export function thriftyAmenities(pricing) {
    return (
        <div>
            <div>
                <p className="alignLeft">Thrifty</p>
                <p className="alignRight">From ${(pricing.expressThrifty).toFixed(2)}/night</p>
            </div>
            <div className="resultsThumbs">
                <Grid>
                    <Row className="amenityText">
                        <Col id="thumbResult" sm={6} md={4} lg={2}>
                            <img alt="wifi" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADKUlEQVRoQ+2YjW0UMRBGv1QAHUAHhAoIFUAHkApIKgAqACoAOoAKAhUAHZAOkg7QW3lOPsde/yfhtCOdbnW3tud5vvHYPtKB2NGBcGgDuW+R3CKyRWTSDIyS1rGkJ5IeS+L5offtu34l6bck+/4r6Y/7rQuxFQRHX0h6KenEOd7jCGA/JH2T9N2BVvVXC4LTbxxA1UCVLwP0ycEVNS0FeSXpzMmlqONBLyHDj5K+5vrLgRCBD3cAEPoN0PlahFIg5MDnW5BQbqLD/5HcaSyHYiAkMBDA3EdjYQAGqJ2FIMiIXPgfjNxBbosZyAgpUQ9YQqkNaNrqhT8p1BmrNXyTg9SfVttJDRAgLhoT+qekLy7MhLzFGB85v5b0rKEDJuw5IDjC8lpjLIfv3OzXtMu9S5Tot9ofiwiSKAkxVZccQj4zDSBygN1DzpD0iZ8jhOhRotWlCz3AKUMiSIO9lm1bePbN8oZ+eEaaa5KkHxSz5hdjXPmrFj8wwINgcKKAflMDIgM0zqfFSFg+qerNBAETRufaTRgTcuOoG8K8d5qNOfjWASKDEYZccZgxY0buMCa2BxED4TeDIRfoODRmnnozCiDsHyAKXkzGKIPcQXJLJMzWtiihlAgxM3JbBXOv4Hk+48cNmec2jda+p9b0yG6pESXnkxIQpMbeK1yBehysaQsMUtuTUthBCQi6BOQuDZBYvmZzJHS6BoYCxaD+2dwWETvL019JAaZdFiK1aqVmPgdDHWAhKN1zAUVCr21HiiBqQXg/BkN15vfWbQvLOBEMN4zFEC0gIQwXBKOWY6LDxUaxnErqSC6xiQAWS0D/qsjOHrxLzhC1tSuftX5XfSpZtXJQ/v9WMHPHZPKICKS2IzVjLu+OAmktmMUFL0c2AgT5/Oq4rCA6TzsWi6ERaTll2iSzbFtu5CY++f+IiFjnLTBDIEbmSAvMMIgZIPTJOSJ3G8Kps/VEGZXXSGnZAKxga5cZy2VBxVamKG9mgDBwCmYKxCxppSIzDWI2iB8ZnofLacReq0i37iXbrpRu72v63r07K0eanOlptIH0zN6MtltEZsxqT58HE5F/ymme8w1tcMEAAAAASUVORK5CYII=" />
                            <p>Wifi</p>
                        </Col>
                        <Col id="thumbResult" sm={6} md={4} lg={2}>
                            <img alt="parking" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACTklEQVRoQ+2Z61HdMBCFv1sBUEGggoQOSAWQCkgqIFQAVADpIFQAVBBKIBUAFUAHMIfxMh5je7XX8gOP9cczV9Jqz559SXfFTMZqJjhYgEyNyYWRqTLyMjXFgvqszLVmB+SzxYwR8IGRWQN5R13xW+93z82rRvPk1Rk5xEj0gNR4GxyIZ9kx50OMjKmod3YjEG/jVOfnV0fM0k2BPTUmPuiZmjkWID1ZYGGkJ8OuLbYXRjaBI+AA+BZU7Q64Bv4Az4G92YFI8StgO6BE3VIB+gXomzKyA/kH7AH/gZ8BRUxZGeIv8BW4Bb6noACyApEriY3HwqUirlHWV64pJr4APwpX8/BkBSLf3geOgQvvZGf+N3AO3BSx5onLBkQxcV+cthUM1DolxcpTMbEDPDhIsgE5BU6AyyI2PAumzCtWDoEzQPLbRhYgClAFuayo4FSQ5hhKGpKrWJPctgzWGYiUl0vpm5MNM4SxIjBysaYE0hmIHaR0Gy1+qayJCaXjNkN1BiI2FOi7a9SMVCCW1hXwYqVudAYy1H3FOyc7EMteKZmmiZE6GYMDKT/9lC9p3pNQ09rqE27Tg+FgjESATIKR1ACOrhvctaIKpq5fgJilIpZQr6UKr+qrImZVWG291/SpFqlt15AMFVd9tVeddESPNyHR56DyAV5Ap7pRdZ10GgWIaohZ1SysFqNtqMUxBo1NMWzG7R2IDt8oaShX6HpfN3ER2Z3riFptNY7yb4HQPT1nG58q2wWyrl+Pvu+z/WfYaLAFyOi+VFFgYWRqjLwCrDS5M57Mh6cAAAAASUVORK5CYII=" />
                            <p>Parking</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
}