import React from "react";
import PropTypes from "prop-types";

const red = {color: "red"};
const green = {color: "green"};
const costCheck = (num) => {
    if (num > 100) {
        return red;
    } else {
        return green;
    }
};

function KegDetail(props){
    const { keg, onClickingDelete } = props;
    return(
        <React.Fragment>
        <h1>{keg.name} Detail</h1>
        <p style={costCheck(keg.price)}>$ {keg.price}</p>
        <h5>{keg.brewery}</h5>
        <h3>{keg.flavor}</h3>
        <h3>{keg.brewery} - {keg.alcoholContent} %</h3>
        <p><em>Pints Left: {keg.pints}</em></p>
        <button onClick={ props.onClickingEdit }>Update Keg Info</button>
        <button onClick={ props.onClickingDecrement }>Decrement Pint</button>
        <button onClick={()=> onClickingDelete(keg.id)}>Delete Keg</button>
        <hr/>
        </React.Fragment>
    );
}

KegDetail.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onClickingDecrement: PropTypes.func
};

export default KegDetail;