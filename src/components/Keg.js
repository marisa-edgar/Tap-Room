import React from "react";
import PropTypes from 'prop-types';

function Keg(props){
    return(
        <React.Fragment>
            <div onClick = {()=> props.whenKegClicked(props.id)}>
                <h3>{props.name}-{props.brewery}</h3>
                <hr/>
            </div>
        </React.Fragment>
    );
}

Keg.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    brewery: PropTypes.string,
    flavor: PropTypes.string,
    alcoholContent: PropTypes.string,
    pints: PropTypes.number,
    id: PropTypes.string,
    whenKegClicked: PropTypes.func,
};

export default Keg;