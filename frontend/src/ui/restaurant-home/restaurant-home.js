import React from "react";

import "./restaurant-home.css";
import Logo from './logo-ws.png'
export const RestaurantHome= () => (

    <>
    <header>
        <div class="container">
            <nav class="nav">




                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">List of Restaurants</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">About us</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>


    <section class="landing-page">
        <div class="container">
            <div class="col-lg-12">
            <div class="row">
            <div class="content">
                <div class="content-details">

                    <img src={Logo} alt="placeholder" id="logo"/>
                </div>
                <div class="row">
                    <h1 class="title">Rona Ratings</h1>
                    <p class="description"> Welcome to Rona Ratings! Are you in search of a popular Albuquerque restaurant
                        and are concerned about
                        Covid-19 infections in the area? Enter your zipcode below! </p>
                </div>
            </div>





                    <div class="search">

                        <input type="text" class="search-bar" placeholder="zip code"/>

                            <input class="button" type="button" value="Search"/>

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
        </div>




    </section>











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