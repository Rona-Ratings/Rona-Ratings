import React from "react";

import "./restaurant-home.css";
import Logo from './logo-ws.png'
export const RestaurantHome= () => (

    <>




        <div class="container">
            <div class="col-lg-12">
            <div class="row">



                </div>
                <div class="row d-flex justify-content-center">
                    <img src={Logo} alt="placeholder" id="logo"/>

                    <p class="description"> Welcome to Rona Ratings! Are you in search of a popular Albuquerque restaurant
                        and are concerned about
                        Covid-19 infections in the area? Enter your zipcode below! </p>

                </div>
                <div className="row d-flex justify-content-center">
                    <div class="column-lg-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"/>
                                   aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                        </div>
                    </form>
                        </div>

                    <div class="col-lg-6">
                        <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Type</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>




                    <div class="sm-list">
                        <a href="#" class="sm-link">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="sm-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="sm-link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>



                    <div class="image-group">
                        <img src="filler1.jpg" alt="" class="gr"/>
                            <img src="filler1.jpg" alt="" class="gr"/>
                                <img src="filler1.jpg" alt="" class="gr"/>
                    </div>



                    <div class="image-group2">
                        <img src="filler1.jpg" alt="" class="dc"/>
                            <img src="filler1.jpg" alt="" class="dc"/>
                                <img src="filler1.jpg" alt="" class="dc"/>


                    </div>
                </div>
            </div>

















<div class="footer">
    <div class="footer-content">
        <div class="footer-section about">
            <h1 class="logo-text"><span>Rona</span> Ratings</h1>
            <p>We are in this together! Here at Rona Ratings we are here to help you ease into the "New Norm". Whether
                you are looking for a new restaurant or just curious about the safety we are here to serve you! </p>
            <div class="contact">
                <span><i class="fas fa-phone"></i>505-555-5555</span>
                <span><i class="fas fa-envelope"></i>Ronaratings@gmail.com</span>
            </div>
            <div class="socials">
                <a href="#"><i class="fab fa-twitter"></i>
                </a> <a href="#"><i class="fab fa-instagram"></i>
            </a>
                <a href="#"><i class="fab fa-facebook-f"></i>
                </a>

            </div>
        </div>
        <div class="footer-section links">
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
                        <li>About-Us</li>
                    </a>

                </ul>
        </div>
        <div class="footer-section contact-form">
            <h2> Contact us</h2>
            <br/>
                <form action="index.html" method="post">
                    <input type="email" name="email" class="text-input contact-input" placeholder="Your email address.."/>
                        <textarea name="message" class="text-input contact-input" placeholder="Your message.."></textarea>
                </form>
                <button type="submit" class="btn btn-big contact-btn">
                    <i class="fas fa-envelope"></i>
                    Send
                </button>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; Covid-9-Team|Deep Dive Coding
    </div>
</div></>)