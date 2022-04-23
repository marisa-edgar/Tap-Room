import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
    return(
        <React.Fragment>
            <form onSubmit = {props.formSubmissionHandler}>
            <input
                type='text'
                name='name'
                placeholder='Keg Name' />
            <input
                type='text'
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
            <input
                type='text'
                name='alcoholContent'
                placeholder='alcoholContent'/>
            <button type='submit'>{props.buttonText}</button>
            </form>
            </React.Fragment>
        );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;