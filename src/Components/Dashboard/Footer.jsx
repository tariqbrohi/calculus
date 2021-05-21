import React from 'react';
import Logo from '../../assets/img/logo1.svg';
import Logo1 from '../../assets/img/logo2.svg';
import Logo2 from '../../assets/img/logo3.svg';
import Logo3 from '../../assets/img/logo4.svg';
import Logo4 from '../../assets/img/logo5.svg';
import Logo5 from '../../assets/img/logo6.svg';
import Logo6 from '../../assets/img/logo7.svg';
import Logo7 from '../../assets/img/logo8.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="txt">
                    <FontAwesomeIcon icon={faHandPointRight} />
                    Exchange To Be Supporte
                </div>
                <div className="exchanges">
                    <img src={Logo} alt="" className="exchange" />
                    <img src={Logo1} alt="" className="exchange" />
                    <img src={Logo2} alt="" className="exchange" />
                    <img src={Logo3} alt="" className="exchange" />
                    <img src={Logo4} alt="" className="exchange" />
                    <img src={Logo5} alt="" className="exchange" />
                    <img src={Logo6} alt="" className="exchange" />
                    <img src={Logo7} alt="" className="exchange" />
                </div>
            </div>
        );
    }
}

export default Footer;