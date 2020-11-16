import React from "react";
import './ListingPage.css'

import TacoPlaceHolder from './tacos-placeholder.jpg'


export const ListingPage = () => {


        return (
            <>

        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 bg-primary mt-3 mb-3"><h1 className="d-flex justify-content-center">Listing Cards</h1>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    FriendsCafe
                                </div>

                                <div className="col-lg-12">
                                    <img src={TacoPlaceHolder} className="float-left" alt="placeholder" />
                                        <div className="card-body ">

                                            <div><p>Rona-Ratings</p></div>
                                            <div><p>Location: 12365 Fake Drive NE</p></div>
                                            <div><p>dine in</p></div>
                                        </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            </>
        )
}



