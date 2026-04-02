import React from 'react'
import { Link } from 'react-router-dom'


const DemoPage = () => {


    return (
        <div className="theme-container">
            <div className="demo-content">
                <h1>Demo Page</h1>


            </div>

            <Link to="/darklight">
                Back to Controls
            </Link>
        </div>
    );
};

export default DemoPage