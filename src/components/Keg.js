import React from "react";
import PropTypes from 'prop-types';

function Keg(props){
    return(
        <React.Fragment>
            <div onClick = {()=> props.whenKegClicked(props.id)}>
                <h3>{props.name} - {props.flavor}</h3>
                <h3>{props.name} - {props.alcoholContent}</h3>
                <p><em>Pint price : $ {props.price}.00</em></p>
                <p><em>Pints left: {props.pints}</em></p>
                <hr/>
            </div>
        </React.Fragment>
    );
}

Keg.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    brewery: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    alcoholContent: PropTypes.string.isRequired,
    pints: PropTypes.string,
    id: PropTypes.string,
    whenKegClicked: PropTypes.func,
};

export default Keg;