import React from 'react';
import { BsFillGearFill } from 'react-icons/bs'
import './Btn.css'

export const SettingsBtn = (props) => {
    return (
        <button {...props}>
            <BsFillGearFill/>
        </button>
    )
};
