import React from 'react';

const Button = () => {
    return (
        <button
            onClick={(event) => {
                event.preventDefault();
                status();
            }}
        >
       
        </button>

    )


}

export default Button