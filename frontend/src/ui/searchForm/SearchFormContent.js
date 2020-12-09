import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormDebugger} from "../FormDebugger";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCategories} from "../../store/categories";

export const SearchFormContent = (props) => {
    const {

        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;


    const categories = useSelector((store) => {

        return store.categories ? store.categories : []
    })
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchAllCategories())
    }
    React.useEffect(initialEffects, [dispatch])


    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}
                <div className="form-group">
                    <label htmlFor="categoryType">Restaurant Category</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="envelope"/>
                            </div>
                        </div>


                        {/*<Form.Group controlId="exampleForm.ControlSelect1">*/}
                        {/*    <Form.Label>Example select</Form.Label>*/}
                        {/*    <Form.Control as="select">*/}
                        {/*        <option>1</option>*/}
                        {/*        <option>2</option>*/}
                        {/*        <option>3</option>*/}
                        {/*        <option>4</option>*/}
                        {/*        <option>5</option>*/}
                        {/*    </Form.Control>*/}
                        {/*</Form.Group>*/}


                        <input onChange={handleChange} onBlur={handleBlur} className="form-control" type="text" name="categoryType" list="categoryList"/>
                            <datalist id="categoryList">
                                {categories.map(category => <option value={category.categoryType}/>) }

                            </datalist>

                    </div>
                    {
                        errors.categoryType && touched.categoryType && (
                            <div className="alert alert-danger">
                                {errors.categoryType}
                            </div>
                        )

                    }
                </div>
                {/*controlId must match what is defined by the initialValues object*/}
                <div className="form-group">
                    <label htmlFor="restaurantZip">Restaurant Zip</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="key"/>
                            </div>
                        </div>
                        <input name="restaurantZip" className="form-control" type="text" placeholder="Restaurant Zip" value={values.restaurantZip} onChange={handleChange} onBlur={handleBlur}
                        />
                    </div>
                    {errors.restaurantZip && touched.restaurantZip && (
                        <div className="alert alert-danger">{errors.restaurantZip}</div>
                    )}
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mb-2" type="submit">Submit</button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </div>



            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>


    )
};