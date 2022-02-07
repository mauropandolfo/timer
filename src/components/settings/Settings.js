import React from 'react';
import  ReactSlider from 'react-slider' 
import { useContext } from 'react';
import SettingsContext from '../context/SettingsContext';
import './Settings.css'
import { BackBtn } from '../timer/btn/BackBtn';

export const Settings = () => {
    const settingsInfo = useContext(SettingsContext)
    return (
        <div className='settings'>
            <label>Minutos de trabajo: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                track={'track'}
                value={settingsInfo.workMinutes}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                max={120}
            />
            <label>Minutos de descanzo: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                track={'track'}
                value={settingsInfo.breakMinutes}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                max={120}
            />
            <BackBtn onClick={()=> settingsInfo.setShowSettings(false)}/>
        </div>
    );
};
