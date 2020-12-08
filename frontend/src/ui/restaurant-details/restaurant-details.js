import React from "react";
import "./restaurant-details.css"

// import {Badge, Container} from "react-bootstrap";
import restaurantDetails from"../restaurant-details/restaurant-details.module.css"

import TacoPlaceHolder from '../restaurant-listings/tacos-placeholder.jpg'
import styles from "../restaurant-listings/restaurant-listings.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchRestaurantByRestaurantId} from "../../store/restaurants";

export const RestaurantDetails = ({match}) => {

    const restaurantId=match.params.restaurantId
    const dispatch = useDispatch ()
    const initialEffect = () =>{dispatch(fetchRestaurantByRestaurantId(restaurantId))}
    React.useEffect(initialEffect,[dispatch,restaurantId])
    const restaurant = useSelector(({restaurants}) => {
        return restaurants.find(restaurant => restaurant.restaurantId === restaurantId)
    })
    console.log(restaurant)
    return (

        <>

            <div id="target">

            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 px-0">
                        <div className="card">
                            <div className={styles.cardHeader}>
                                <div className="card-header">
                                    Taco Juan's Taco Shop
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 d-flex justify-content-center">
                                        <img src={TacoPlaceHolder} className="card-img" alt="placeholder" />
                                    </div>
                                    <div className="col-lg-9 d-flex align-items-center">
                                        <div className="card-body">
                                            <h3 className="card-title">Restaurant Information:</h3>
                                            <p className="card-text">
                                                <h4>Address and Hours:UNM Carri Tingley Hospital -</h4>
                                                <p>1127 University Blvd, NE Albuquerque, NM 87102 Friday 8:00am - 2:00pm</p>
                                                <h4>contact Information:</h4>
                                                <ul>
                                                    <li>Phone Number:505-319-5619</li>
                                                    <li>Delivery Option: Yes with a perches of $20.00 or more.</li>
                                                    <li>Patio Option: Yes</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-0">
                <div className="card border-dark mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <h2 className={restaurantDetails}>Rona Ratings</h2>
                            <div className={restaurantDetails.rating}>
                                <span className={1}>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                                <p>: Wearing Mask</p>
                            </div>
                            <div className={restaurantDetails.rating}>
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                                <p>: Clean Sitting Area</p>
                            </div>
                            <div className={restaurantDetails.rating}>
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                                <p>: 6ft Rule</p>
                            </div>
                            <div className={restaurantDetails.rating}>
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                                <p>: Safe Takeout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="container">*/}
            {/*    <div className="footer">*/}
            {/*        <div className="footer-content">*/}
            {/*            <div className="footer-section about">*/}
            {/*                <h1 className="logo-text"><span>Rona</span> Ratings</h1>*/}
            {/*                <p>We are in this together! Here at Rona Ratings we are here to help you ease into the "New*/}
            {/*                    Norm". Whether*/}
            {/*                    you are looking for a new restaurant or just curious about the safety we are here to serve*/}
            {/*                    you! </p>*/}
            {/*                <div className="contact">*/}
            {/*                    <span><i className="fas fa-phone"></i>505-555-5555</span>*/}
            {/*                    <span><i className="fas fa-envelope"></i>Ronaratings@gmail.com</span>*/}
            {/*                </div>*/}
            {/*                <div className="socials">*/}
            {/*                    <a href="#"><i className="fab fa-twitter"></i>*/}
            {/*                    </a> <a href="#"><i className="fab fa-instagram"></i>*/}
            {/*                </a>*/}
            {/*                    <a href="#"><i className="fab fa-facebook-f"></i>*/}
            {/*                    </a>*/}

            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="footer-section links">*/}
            {/*                <h2> Quick Links </h2>*/}
            {/*                <br/>*/}
            {/*                <ul>*/}
            {/*                    <a href="#">*/}
            {/*                        <li>Home</li>*/}
            {/*                    </a>*/}
            {/*                    <a href="#">*/}
            {/*                        <li>Restaurants</li>*/}
            {/*                    </a>*/}
            {/*                    <a href="#">*/}
            {/*                        <li>Maps</li>*/}
            {/*                    </a>*/}
            {/*                    <a href="#">*/}
            {/*                        <li>About-Us</li>*/}
            {/*                    </a>*/}
            {/*                </ul>*/}
            {/*            </div>*/}

            {/*            <div className="footer-section contact-form">*/}
            {/*                <h2> Contact us</h2>*/}
            {/*                <br/>*/}
            {/*                <form action="index.html" method="post">*/}
            {/*                    <input type="email" name="email" className="text-input contact-input"*/}
            {/*                           placeholder="Your email address.."/>*/}
            {/*                    <textarea name="message" className="text-input contact-input"*/}
            {/*                              placeholder="Your message.."/>*/}
            {/*                </form>*/}
            {/*                <button type="submit" className="btn btn-big contact-btn">*/}
            {/*                    <i className="fas fa-envelope">*/}
            {/*                        Send</i>*/}
            {/*                </button>*/}
            {/*                <h3>About Us</h3>*/}
            {/*                <div className="footing">*/}
            {/*                    <div className="col-row mb-4">*/}
            {/*                        <p><b>CNM Students</b></p>*/}
            {/*                        <p>Joshua Little, Brett Gobel, Juan Hernandez</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="d-flex justify-content-center">*/}
            {/*                        <Badge pill variant="warning">*/}
            {/*                            Home page*/}
            {/*                        </Badge>{' '}*/}
            {/*                        <Badge pill variant="light">*/}
            {/*                            Restaurant List*/}
            {/*                        </Badge>{' '}*/}
            {/*                        <Badge pill variant="danger">*/}
            {/*                            Search Bar*/}
            {/*                        </Badge>{' '}*/}
            {/*                        <div className="footer-bottom">*/}
            {/*                            &copy; Covid-9-Team|Deep Dive Coding*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}