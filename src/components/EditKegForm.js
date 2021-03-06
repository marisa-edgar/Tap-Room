import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
    const { keg } = props;

    function handleEditKegFormSubmission(event) {
        event.preventDefault();
        props.onEditKeg({name: event.target.name.value, price: event.target.price.value, brewery: event.target.brewery.value, flavor: event.target.flavor.value, alcoholContent: event.target.alcoholContent.value, pint: props.pint, id: keg.id});
    }

    return (
        <React.Fragment>
        <ReusableForm 
            formSubmissionHandler={handleEditKegFormSubmission}
            buttonText="Update Keg" />
        </React.Fragment>
    );
}

EditKegForm.propTypes = {
    onEditKeg: PropTypes.func
};

export default EditKegForm;