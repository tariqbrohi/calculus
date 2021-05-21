import React from 'react';
import Select from 'react-select';
import DashboardPopup from './DashboardPopup';
class ActiveUserLogTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: this.props.options[0]
        }

    }

    tableData = this.props.tableData;
    populatedTable = (tableData) => {
        return tableData.map(data => {
            return (
                <tbody key={data.user.img}>
                    <tr onClick={this.tableRowHandler}>
                        <td>
                            <img src={data.user.img} alt="img"></img>
                            {data.user.name}
                        </td>
                        <td>
                            {data.capital}
                        </td>
                        <td>
                            {data.exchange}
                        </td>
                        <td>
                            {data.noOfToken.value}
                            <br />
                            {data.noOfToken.verified}
                        </td>
                        <td>
                            {data.algo}
                        </td>
                        <td>
                            {data.target.progress}
                            {data.target.value}
                        </td>
                        <td>
                            {data.margin.progress}
                            {data.margin.value}

                        </td>
                        <td>
                            {data.age.progress}
                            {data.age.value}
                        </td>
                    </tr>
                </tbody>
            );
        });
    }

    handleOptionChange = (selectedOption) => {
        this.setState({ selectedOption: selectedOption });
        console.log(this.tableData);
    }
    tableRowHandler = (e) => {
        let popup = document.getElementsByClassName('dashboard-popup')[0];
        console.log(popup);
        popup.style.display = 'block';
    }
    render() {
        return (
            <div className="active_user_log_table">
                <div className="top">
                    <p> {this.props.label} </p>
                    <Select className="duration-options"
                        value={this.state.selectedOption}
                        onChange={this.handleOptionChange}
                        options={this.props.options}
                    />
                </div>
                <div className="log_table">
                    <table className="log-table">
                        <tbody>
                            <tr>
                                <th>User</th>
                                <th>Capital</th>
                                <th>Exchange</th>
                                <th>No Of Token</th>
                                <th>Algo</th>
                                <th>Target</th>
                                <th>Margin</th>
                                <th>Age</th>
                            </tr>
                        </tbody>
                        {this.populatedTable(this.tableData)}
                    </table >
                </div>
                <div className="popup">
                    <DashboardPopup />
                </div>
            </div>

        );
    }
}

export default ActiveUserLogTable;