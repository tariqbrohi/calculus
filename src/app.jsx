import React from 'react';
import './assets/css/App.scss';
import Dashboard from './Components/Dashboard';

class App extends React.Component {
    render() {
        return(
            <div className="app">
                <Dashboard />
            </div>
        );
    }
}

export default App;