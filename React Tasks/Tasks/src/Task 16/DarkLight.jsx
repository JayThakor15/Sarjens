import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'

const DarkLight = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-container">
            <div className="theme-toggle-btns">
                <button onClick={() => toggleTheme('dark')} >Dark Mode</button>
                <button onClick={() => toggleTheme('light')} >Light Mode</button>
            </div>

            <div style={{ marginTop: '30px' }}>
                <h3>Controls Page</h3>
                <p>Use the buttons above to change the theme system-wide.</p>
                <Link to="/demopage">
                    Go to Demo Page &rarr;
                </Link>
            </div>
        </div>
    )
}

export default DarkLight;