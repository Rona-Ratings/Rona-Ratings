import React from "react";

import "./restaurant-home.css";
import Logo from './logo-ws.png'

import Card from "react-bootstrap/cjs/Card";
export const RestaurantHome= () => (
<>
    <>


      <div class="body">

        <div class="container">
            <div class="col-lg-12">
            <div class="row">



                </div>
                <div class="row d-flex justify-content-center">
                    <img src={Logo} alt="placeholder" id="logo"/>

                    <p class="description"> Welcome to Rona Ratings! Are you in search of a popular Albuquerque restaurant
                        and have concern about
                        Covid-19 infections in the area?  </p>

                </div>
                <div className="row d-flex justify-content-center">
                    <div class="col-lg-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Enter Zipcode or Food Type</b> </label>
                                <input type="category" className="form-control" id="categoryId"/>
                                <button type="submit" className="btn-btn-primary">Search!</button>
                            </div>
                    </form>








                </div>
            </div>


                </div>
            </div>
      </div>

</>


</>)














