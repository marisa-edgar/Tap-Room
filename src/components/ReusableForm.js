import React from "react";
import PropTypes from "prop-types";

function Form(props){
    return(
        <React.Fragment>
            <form onSubmit = {props.formSubmissionHandler}>
            <input
                type='text'
                name='name'
                placeholder='Keg Name' />
            <input
                type='number'
                name='price'
                placeholder = 'Price'/>
            <input
                type='text'
                name='brewery'
                placeholder='Brewery'/>
            <input
                type='text'
                name='flavor'
                placeholder ='Flavor'/>
            <button type='submit'>{props.buttonText}</button>
            </form>
            </React.Fragment>
        );
}

Form.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default Form;