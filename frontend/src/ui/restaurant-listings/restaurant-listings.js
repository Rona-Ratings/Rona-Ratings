import './restaurant-listings.css'
import React from "react";
import {Badge} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRestaurants} from "../../store/restaurants";
import {RestaurantCard} from "./RestaurantCard";


export const RestaurantListings = () => {
    const restaurants = useSelector((store) => {

        return store.restaurants ? store.restaurants : []
    })
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchAllRestaurants())
    }
    React.useEffect(initialEffects, [dispatch])


    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 px-0">
                        {restaurants.map(restaurant => (
                            <RestaurantCard restaurant={restaurant} key={restaurant.restaurantId}/>))
                        }
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1 className="logo-text"><span>Rona</span> Ratings</h1>
                        <p>We are in this together! Here at Rona Ratings we are here to help you ease into the "New
                            Norm". Whether
                            you are looking for a new restaurant or just curious about the safety we are here to serve
                            you! </p>
                        <div className="contact">
                            <span><i className="fas fa-phone"></i>505-555-5555</span>
                            <span><i className="fas fa-envelope"></i>Ronaratings@gmail.com</span>
                        </div>
                        <div className="socials">
                            <a href="#"><i className="fab fa-twitter"></i>
                            </a> <a href="#"><i className="fab fa-instagram"></i>
                        </a>
                            <a href="#"><i className="fab fa-facebook-f"></i>
                            </a>

                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2> Quick Links </h2>
                        <br/>
                        <ul>
                            <a href="#">
                                <li>Home</li>
                            </a>
                            <a href="#">
                                <li>Restaurants</li>
                            </a>
                            <a href="#">
                                <li>Maps</li>
                            </a>
                            <a href="#">
                                <li>About-Us</li>
                            </a>
                        </ul>
                    </div>

                    <div className="footer-section contact-form">
                        <h2> Contact us</h2>
                        <br/>
                        <form action="index.html" method="post">
                            <input type="email" name="email" className="text-input contact-input"
                                   placeholder="Your email address.."/>
                            <textarea name="message" className="text-input contact-input"
                                      placeholder="Your message.."/>
                        </form>
                        <button type="submit" className="btn btn-big contact-btn">
                            <i className="fas fa-envelope">
                                Send</i>
                        </button>


                        <h3>About Us</h3>
                        <div className="footing">
                            <div className="col-row mb-4">
                                <p><b>CNM Students</b></p>
                                <p>Joshua Little, Brett Gobel, Juan Hernandez</p>
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
                                <div className="footer-bottom">
                                    &copy; Covid-9-Team|Deep Dive Coding

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}



