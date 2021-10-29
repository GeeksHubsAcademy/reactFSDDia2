
import React from 'react';

import './BotonHobbies.css';

const BotonHobbies = (props) => {

    return (
        <div className="hobbies">
            <div className="hobbieList">{props.hobbie1}</div>
            <div className="hobbieList">{props.hobbie2}</div>
        </div>
    )
}

export default BotonHobbies;