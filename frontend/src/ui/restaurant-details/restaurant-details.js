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
            {/*<div className="container">*/}
            {/*    <div className="row d-flex justify-content-center">*/}
            {/*        <div className="col-lg-12 px-0">*/}
            {/*            <div className="card">*/}
            {/*                <div className={styles.cardHeader}>*/}
            {/*                    <div className="card-header">*/}
            {/*                        Taco Juan's Taco Shop*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="col-lg-12">*/}
            {/*                    <div className="row">*/}
            {/*                        <div className="col-lg-3 d-flex justify-content-center">*/}
            {/*                            <img src={TacoPlaceHolder} className="card-img" alt="placeholder" />*/}
            {/*                        </div>*/}
            {/*                        <div className="col-lg-9 d-flex align-items-center">*/}
            {/*                            <div className="card-body">*/}
            {/*                                <h3 className="card-title">Restaurant Information:</h3>*/}
            {/*                                <p className="card-text">*/}
            {/*                                    <h4>Address and Hours:UNM Carri Tingley Hospital -</h4>*/}
            {/*                                    <p>1127 University Blvd, NE Albuquerque, NM 87102 Friday 8:00am - 2:00pm</p>*/}
            {/*                                    <h4>contact Information:</h4>*/}
            {/*                                    <ul>*/}
            {/*                                        <li>Phone Number:505-319-5619</li>*/}
            {/*                                        <li>Delivery Option: Yes with a perches of $20.00 or more.</li>*/}
            {/*                                        <li>Patio Option: Yes</li>*/}
            {/*                                    </ul>*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

                <div className="card mb-3">
                    <div className="card-header">
                        <h2 className={restaurantDetails}>Rona Ratings</h2>
                    </div>
                    <div className="col-md-12 mt-2">
                        <div className="row d-flex">
                            <div className="col-md-4 d-flex justify-content-center">
                            <div className={restaurantDetails.rating} >
                                <h4 className="d-flex justify-content-center"><b>Wearing Mask</b></h4>
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                            </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center">
                            <div className={restaurantDetails.rating}>
                                <h4 className="d-flex justify-content-center"><b>Safe Takeout</b></h4>
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
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