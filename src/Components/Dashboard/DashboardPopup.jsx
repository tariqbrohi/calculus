import React from 'react';
import Logo from '../../assets/img/FrameLarge.svg';
import Peter from '../../assets/img/Peter.svg';
import ShareIcon from '../../assets/img/Share-icon.svg';
import CloseIcon from '../../assets/img/CloseIcon.svg';


class DashboardPopup extends React.Component {
    render() {
        return (
            <div className="dashboard-popup">
                <div className="content">
                    <div className="popup-logo">
                        <img src={Logo} alt="logo" />
                        <div className="close-btn" onClick={(e) => document.getElementsByClassName('dashboard-popup')[0].style.display = 'none'}>
                            <img src={CloseIcon} alt="x" />
                        </div>
                    </div>
                    <div className="heading">
                        Calculus Account Summary
                    </div>
                    <div className="user">
                        User: <img className="user-image" src={Peter} alt="userimage" /> Peterxr
                    </div>
                    <div className="plvi-target">
                        PLVI Target: 20%
                    </div>
                    <div className="xrrt-token">
                        VERIFIED XRRT TOKEN: 200,000
                    </div>
                    <div className="capital">
                        Capital: $200
                    </div>
                    <div className="time-left">
                        Time Left: 21:00:80
                    </div>
                    <div className="percent">
                        <button>50%($20)</button>
                        <button>text</button>
                    </div>
                    <div className="status">
                        <p>Status:</p>
                        <button>PRGRESSING</button>
                        <button>COMPLETED</button>
                        <button>INACTIVE</button>
                    </div>
                    <div className="share">
                        <div className="share-icon-box">
                            <img src={ShareIcon} alt="share icon" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardPopup;