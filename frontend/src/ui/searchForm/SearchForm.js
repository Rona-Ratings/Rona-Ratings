import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {httpConfig} from "../../utils/httpConfig";
import {SearchFormContent} from "./SearchFormContent";
import {useHistory} from "react-router";

export const SearchForm = (props) => {


    const search = {
        categoryType: "",
        restaurantZip: ""
    };
    const history = useHistory()
    const validator = Yup.object().shape({

        categoryType: Yup.string()
            .required('Restaurant Type is Required'),
        restaurantZip: Yup.string()
            .required("Valid Zip Code is required"),

    });

    const submitSearch = (values, {resetForm, setStatus}) => {
        console.log(values)
        history.push("/restaurant-listings", values)

    };

console.log(props)
    return (

        <Formik
            initialValues={search}
            onSubmit={submitSearch}
            validationSchema={validator}
        >

            {SearchFormContent}
        </Formik>

    )
};