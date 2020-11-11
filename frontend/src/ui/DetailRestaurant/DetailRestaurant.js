
import React from "react";
import {Container} from "react-bootstrap";
import {Badge} from "react-bootstrap";
import "./DetailRestaurant.css"

export const DetailRestaurant= () => (

<>

<Container>
<div className= "card border-dark mb-3">
    <h3> Restaurants Name: Los Huaraches de Villa</h3>
    <div className="row no-gutters">
    <div className="col-md-4">
        {/*<img src="logo2.png" className="card-img" alt={"logo2"}/>*/}
    </div>
    <div className=" col-md-4">
        <div className="card-body">
            <h5 className="card-title">Restaurant Information:</h5>
            <p className="card-text">
                <h6>Address and Hours:UNM Carri Tingley Hospital -</h6>
                <p>1127 University Blvd, NE Albuquerque, NM 87102 Friday 8:00am - 2:00pm</p>
            </p>
        </div>
    </div>
</div>
</div>
</Container>
<Container>
    <div className="row no-gutters" id="information">
        <div className="col-md-4">
            <h2>contact Information:</h2>
            <ul className="text">
                <li>Phone Number:505-319-5619</li>
                <li>Delivery Option: Yes with a perches of $20.00 or more.</li>
                <li>Patio Option: Yes</li>
            </ul>
        </div>
    </div>
</Container>
<Container>
    <div className="card border-dark mb-3">
        <div className="row no-gutters">
            <div className="col-md-4">
                <h2>Rona Ratings</h2>
                <div className="rating">
                    <p>Wearing Mask:</p><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="rating">
                    <p>Clea Sitting Area:</p><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    <div className="rating">
                        <p>Social Distance 6ft:</p>
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Container>
    <fotting>
        <Container>
            <h4>About Us</h4>
            <div className="footing">
                <div className="col-row mb-4">
                    <p><b>CNM Students</b></p>
                    <p>Juan Hernandez Juan48mx@gmail.com 505-319-5619</p>
                    <p>Juan Hernandez Juan48mx@gmail.com 505-319-5619</p>
                    <p>Juan Hernandez Juan48mx@gmail.com 505-319-5619</p>
                </div>
                <div className="d-flex justify-content-center">
                        <Badge pill variant="warning">
                            Home page
                        </Badge>{' '}
                        <Badge pill variant="light">
                            Restaurant List
                        </Badge>{' '}
                        <Badge pill variant="danger">
                            Search Bar
                        </Badge>{' '}
                </div>
            </div>
        </Container>
    </fotting>
    </>
    )