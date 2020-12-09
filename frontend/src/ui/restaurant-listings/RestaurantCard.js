import React from "react"
import styles from "./restaurant-listings.module.css";
import TacoPlaceHolder from "./tacos-placeholder.jpg";
import {App} from "../App";
import {useHistory} from "react-router";

export function RestaurantCard(props) {
    const {restaurant} = props
   const history = useHistory()
    const handelClick = () => {
        history.push (`/restaurant-details/${restaurant.restaurantId}`)
    }

    return (


        <>
            <div className="card">
                <div className={styles.cardHeader}>
                    <div className="card-header">
                        {restaurant.restaurantName}
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center">
                            <img src={restaurant.restaurantImage} className="card-img" onClick={handelClick} alt="placeholder" />
                        </div>
                        <div className="col-lg-8">
                            <div className="card-body">
                                <h2 className="card-title">Restaurant Information:</h2>
                                <p className="card-text d-flex align-items-center">
                                    <h4>
                                        <ul>
                                            <li><b> Restaurant Address : </b>{restaurant.restaurantAddress}</li>
                                            <li><b>Phone Number : </b>{restaurant.restaurantPhone}</li>
                                            <li><b>Delivery Options : </b>{restaurant.restaurantServices}</li>
                                            <li><b>Restaurant Ratings : </b>{restaurant.restaurantYelpRating}</li>
                                        </ul>
                                    </h4>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )

}



