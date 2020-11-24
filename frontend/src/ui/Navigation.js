import React from "react";
import  {FormControl} from "react-bootstrap";

import {Form} from "formik";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const  Navigation = () => (

<>
    <Navbar bg="dark" variant="dark">
        <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Restaurants</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>

            <br />
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                {/*<Form inline>*/}
                {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                {/*    <Button variant="outline-light">Search</Button>*/}
                {/*</Form>*/}
            </Navbar>

            <br />
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                {/*<Form inline>*/}
                {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                {/*    <Button variant="outline-primary">Search</Button>*/}
                {/*</Form>*/}
            </Navbar>
        </Nav>
    </Navbar>

    </>)
