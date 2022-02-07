import './App.css';
import { Settings } from './components/settings/Settings';
import { Timer } from './components/timer/Timer';
import { useState } from 'react'
import SettingsContext from './components/context/SettingsContext';



function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(60)
  const [breakMinutes, setBreakMinutes] = useState(10)

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings? <Settings/>:<Timer/>  }
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
