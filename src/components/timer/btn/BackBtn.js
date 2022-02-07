import React from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import './Btn.css'

export const BackBtn = (props) => {
    return (
        <button {...props}>
            <BsArrowLeft/>
        </button>
    );
};
