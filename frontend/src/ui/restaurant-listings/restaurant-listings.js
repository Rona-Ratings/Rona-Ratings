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
            <div className="body">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 px-0">
                        {restaurants.map(restaurant => (
                            <RestaurantCard restaurant={restaurant} key={restaurant.restaurantId}/>))
                        }
                    </div>
                </div>
            </div>



            </div>
        </>
    )
}



