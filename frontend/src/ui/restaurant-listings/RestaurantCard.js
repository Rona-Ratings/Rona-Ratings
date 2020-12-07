import React from "react"
import styles from "./restaurant-listings.module.css";
import TacoPlaceHolder from "./tacos-placeholder.jpg";

export function RestaurantCard(props) {
    const {restaurant} = props
    console.log(restaurant)
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

        </>


    )

}