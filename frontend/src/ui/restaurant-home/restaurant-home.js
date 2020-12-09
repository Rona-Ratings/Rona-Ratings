import React from "react";
import {Button, Form} from "react-bootstrap";
import "./restaurant-home.css";
import Logo from './logo-ws.png'

export const RestaurantHome = () => (
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
                            <Form>
                                <Form.Group controlId="Category">
                                    <Form.Label>Restaurant Type</Form.Label>
                                    <Form.Control type="text" placeholder="Restaurant Type"/>
                                </Form.Group>
                                <Form.Group controlId="Zipcode">
                                    <Form.Label>Zipcode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Zipcode"/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>


                        </div>
                    </div>


                </div>
            </div>
        </div>


    </>)














