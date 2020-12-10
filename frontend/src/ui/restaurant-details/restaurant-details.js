import React from "react";
import "./restaurant-details.css"
import {Button} from "react-bootstrap";

// import {Badge, Container} from "react-bootstrap";
import restaurantDetails from"../restaurant-details/restaurant-details.module.css"

import TacoPlaceHolder from '../restaurant-listings/tacos-placeholder.jpg'
import styles from "../restaurant-listings/restaurant-listings.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchRestaurantByRestaurantId} from "../../store/restaurants";
import {RestaurantCard} from "../restaurant-listings/RestaurantCard";

export const RestaurantDetails = ({match}) => {

    const restaurantId=match.params.restaurantId
    const dispatch = useDispatch ()
    const initialEffect = () =>{dispatch(fetchRestaurantByRestaurantId(restaurantId))}
    React.useEffect(initialEffect,[dispatch,restaurantId])
    const restaurant = useSelector(({restaurants}) => {
        return restaurants.find(restaurant => restaurant.restaurantId === restaurantId)
    })


    return (

        <>
        <div className="body">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 px-0">
                        {restaurant !== null && <RestaurantCard restaurant = {restaurant} key ={restaurant.restaurantId} />}

                </div>
            </div>


                <div className="card mb-3">
                    <div className="card-header">
                        <h2 className={restaurantDetails}>Rona Ratings</h2>
                    </div>
                    <div className="col-md-12 mt-2">
                        <div className="row d-flex">
                            <div className="col-md-4 d-flex justify-content-center">
                                <fieldset className="star-rating">


                                    <div className={restaurantDetails.rating}>
                                        <input className={restaurantDetails.rating} type="radio" name="rating" value="1"
                                               id="rating-1"/>

                                        <input className={restaurantDetails.rating} type="radio" name="rating" value="2"
                                               id="rating-2"/>

                                        <input className={restaurantDetails.rating} type="radio" name="rating" value="3"
                                               id="rating-3"/>

                                        <input className={restaurantDetails.rating} type="radio" name="rating" value="4"
                                               id="rating-4"/>

                                        <input className={restaurantDetails.rating} type="radio" name="rating" value="5"
                                               id="rating-5"/>

                                    </div>
                                </fieldset>
                            </div>

                            <div className="col-md-4 d-flex justify-content-center">
                            <div className={restaurantDetails.rating}>
                                <h4 className="d-flex justify-content-center"><b>Safe Takeout</b></h4>
                                <span></span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                            </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center">
                            <div className={restaurantDetails.rating}>
                                <h4 className="d-flex justify-content-center"><b>6ft Rule</b></h4>
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                            </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <Button variant="primary">Submit Rating</Button>
                        </div>
                    </div>
                </div>
            </div>
            </div>



        </>
    )
}