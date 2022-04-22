import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

    function handleNewKegFormSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({name: event.target.name.value, price: parseInt(event.target.price.value), brewery: event.target.brewery.value, flavor: event.target.flavor.value, alcoholContent: parseInt(event.target.alcoholContent.value), pintsLeft: 124, id: v4()});
    }

    return (
        <React.Fragment>
            <ReusableForm 
            formSubmissionHandler={handleNewKegFormSubmission}
            buttonText="Help!" />
        </React.Fragment>
    );
}

NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
};

export default NewKegForm;