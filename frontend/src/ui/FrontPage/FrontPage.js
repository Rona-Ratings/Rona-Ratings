
import React from "react";
import {Container} from "react-bootstrap";
import "./FrontPage.css";

export const FrontPage= () => (

    <>


            <header>
            <div className="container">
                <nav className="nav">
                    <a href="index.html" className="logo-box">
                        <img src="" alt="" className="logo"/>
                      </a>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">List of Restaurants</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">maps</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <section className="landing-page">
            <div className="container-fluid">
                <div className="content">
                    <h1 className="title">Rona Ratings</h1>
                    <p className="description"> Welcome to Rona Ratings! Are you in search of a popular Albuquerque restaurant and are concerned about
                        Covid-19 infections in the area? Enter your zipcode below! </p>



                    <div className="search">
                        <div className="search">
                            <label>
                                <input type="text" className="search-bar" placeholder="Enter Your zip code" />

                                <input className="button" type="button" value="Search" />
                            </label>
                        </div>
                    </div>



                    <div className="sm-list">
                        <a href="#" className="sm-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="sm-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="sm-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                    </div>
                    <div className="image-group">
                        <img src="" alt="" className="mask"/>
                    </div>
                </div>
            </div>

        </section>







    </>
)