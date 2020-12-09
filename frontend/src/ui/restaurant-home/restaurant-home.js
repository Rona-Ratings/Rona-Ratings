import React from "react";
import {Button, Form} from "react-bootstrap";
import "./restaurant-home.css";
import Logo from './logo-ws.png'
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCategories} from "../../store/categories";
import {SearchFormContent} from "../searchForm/SearchFormContent";
import {SearchForm} from "../searchForm/SearchForm";

export const RestaurantHome = () => {







    return(
        <>


            <div className="body">

                <div className="container">
                    <div className="col-lg-12">
                        <div className="row">


                        </div>
                        <div className="row d-flex justify-content-center">
                            <img className="mt-4" src={Logo} alt="placeholder" id="logo"/>

                            <p className="description"> Welcome to Rona Ratings! Are you in search of a popular Albuquerque
                                restaurant
                                and have concern about
                                Covid-19 infections in the area? </p>

                        </div>
                        <div className=
                                 "row d-flex justify-content-center">
                            <div className="col-lg-6">


                                <SearchForm />

                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>)
}














