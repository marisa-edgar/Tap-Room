import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
    return (
        <React.Fragment>
            <hr/>
            {props.kegList.map((keg)=>
                <Keg
                whenKegClicked = {props.onKegSelection}
                name = {keg.name}
                price = {keg.price}
                brewery= {keg.brewery}
                flavor = {keg.flavor}
                alcoholContent = {keg.alcoholContent}
                pintsLeft = {keg.pintsLeft}
                id={keg.id}
                key={keg.id}/>
            )}
        </React.Fragment>
        );
}

KegList.propTypes ={
    kegList: PropTypes.array,
    onKegSelection: PropTypes.func
};

export default KegList;