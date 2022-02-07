import React from 'react';
import { BsFillPauseFill } from 'react-icons/bs'
import './Btn.css'

export const PauseBtn = (props) => {
    return (
        <button {...props}>
            <BsFillPauseFill/>
        </button>
    );
};
