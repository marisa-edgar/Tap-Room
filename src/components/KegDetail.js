import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
    const { keg, onClickingDelete } = props;
    return(
        <React.Fragment>
        <h1>Keg Detail</h1>
        <p><em>Pint Price: $ {keg.price}.00</em></p>
        <h5>{keg.brewery}</h5>
        <h3>{keg.name} - {keg.flavor}</h3>
        <h3>{keg.name} - {keg.alcoholContent}</h3>
        <p><em>Pints Left: {keg.pintsLeft}</em></p>
        <button onClick={()=> onClickingDelete(keg.id)}>Delete Keg</button>
        <hr/>
        </React.Fragment>
    );
}

KegDetail.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default KegDetail;