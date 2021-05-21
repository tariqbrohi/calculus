import React from 'react';
import graph from '../../assets/img/Group.svg';

class Statistics extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div className="statistics">
                <div className="active_user">
                    Active User: {this.props.activeUsers}
                </div>
                <div className="graph">
                    <img src={graph} alt="Graph" />
                </div>
                <div className="data">
                    <ul>
                        <li>Trading Capital: ${this.props.tradingCapitals} </li>
                        <li>Aggregate Asset Volume: ${this.props.aggregateAsset} </li>
                        <li>Margin: (50%) $2,50,000</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Statistics;