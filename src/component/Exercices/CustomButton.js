import React from 'react';

const CustomButton = (props) => {
    return (
        <div>
            <button className='pure-material-button' onClick={props.action}>{props.text}</button>
        </div>
    );
};

export default CustomButton;