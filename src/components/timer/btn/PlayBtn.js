import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs'
import './Btn.css'

export const PlayBtn = (props) => {
    return (
        <button {...props}>
            <BsFillPlayFill/>
        </button>
    );
};
