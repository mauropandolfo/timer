import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { FaGithub, FaLinkedin, FaPager } from "react-icons/fa";
import { PlayBtn } from './btn/PlayBtn';
import { PauseBtn } from './btn/PauseBtn';
import { SettingsBtn } from './btn/SettingsBtn';
import { useContext, useState, useEffect, useRef} from 'react';
import SettingsContext from '../context/SettingsContext';
import 'react-circular-progressbar/dist/styles.css';

export const Timer = () => {
    const settingsInfo = useContext(SettingsContext);
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work'); // work/break/null
    const [secondsLeft, setSecondsLeft] = useState(0);
    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }
    useEffect(() => {
        function switchMode() {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
            setMode(nextMode);
            modeRef.current = nextMode;
            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
        }
        secondsLeftRef.current = settingsInfo.workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);
        const interval = setInterval(() => {
            if (isPausedRef.current) return;
            if (secondsLeftRef.current === 0)return switchMode();
                tick();
        },100);
        return () => clearInterval(interval);
    }, [settingsInfo]);
    const totalSeconds = mode === 'work'? settingsInfo.workMinutes * 60: settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);
    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if(seconds < 10) seconds = '0'+seconds;
    return (
        <div>
            <CircularProgressbar
                value={percentage}
                text={minutes + ':' + seconds}
                styles={buildStyles({
                textColor:'#ffffff',
                pathColor:mode === 'work' ? '#03A9F4' : '#CDDC39',
                tailColor:'#CFD8DC',
            })} />
            <div>
                {
                    isPaused
                    ? <PlayBtn onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
                    : <PauseBtn onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />
                }
            </div>
            <div>
                <SettingsBtn onClick={() => settingsInfo.setShowSettings(true)} />
            </div>
            <div>
                <a href="https://www.mauropandolfo.com.ar"><FaPager/></a> <a href="https://github.com/mauropandolfo"><FaGithub/></a> <a href="https://www.linkedin.com/in/mauro-pandolfo-21b665206/"><FaLinkedin/></a>
            </div>
        </div>
    );
};
