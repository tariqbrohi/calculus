import React from 'react';

class MainSlider extends React.Component {
    render() {
        return (
            <div className="main-slider">
                <a className="prev" href="/">&#10094;</a>
                <div className="current-text">
                    Token Power Futures Trading
                </div>
                <a className="next" href="/">&#10095;</a>
            </div>
        );
    }
}

export default MainSlider;