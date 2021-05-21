import React from 'react';
import ActiveUserLogTable from './ActiveLogTable';
import Header from './Header';
import MainSlider from './MainSlider';
import Notes from './Notes';
import Statistics from './Statistics';
import Accordion from './Accordion';
import AccordionContent from './AccorionContent';
import Footer from './Footer';

// list of time duration options
const durationOptions = [
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Day', label: 'Day' },
    { value: 'Hourly', label: 'Hourly' }
];

// Active user log table data
const tableData = [
    {
        user: {
            img: '../../assets/img/person1.svg',
            name: 'Tariq'
        },
        capital: 200,
        exchange: 'Binance',
        noOfToken: {
            value: 10000,
            verified: 'verified'
        },
        algo: 'symbol',
        target: {
            value: 100,
            progress: 'up'

        },
        margin: {
            value: 100,
            progress: 'up'

        },
        age: {
            value: 100,
            progress: 'up'

        }
    },
    {
        user: {
            img: '../../assets/img/person2.svg',
            name: 'Tariq'
        },
        capital: 200,
        exchange: 'Binance',
        noOfToken: {
            value: 10000,
            verified: 'verified'
        },
        algo: 'symbol',
        target: {
            value: 100,
            progress: 'up'

        },
        margin: {
            value: 100,
            progress: 'up'

        },
        age: {
            value: 100,
            progress: 'up'

        }
    },
    {
        user: {
            img: '../../assets/img/person3.svg',
            name: 'Tariq'
        },
        capital: 200,
        exchange: 'Binance',
        noOfToken: {
            value: 10000,
            verified: 'verified'
        },
        algo: 'symbol',
        target: {
            value: 100,
            progress: 'up'

        },
        margin: {
            value: 100,
            progress: 'up'

        },
        age: {
            value: 100,
            progress: 'up'

        }
    },
    {
        user: {
            img: '../../assets/img/sampeImage.jpg',
            name: 'Tariq'
        },
        capital: 200,
        exchange: 'Binance',
        noOfToken: {
            value: 10000,
            verified: 'verified'
        },
        algo: 'symbol',
        target: {
            value: 100,
            progress: 'up'

        },
        margin: {
            value: 100,
            progress: 'up'

        },
        age: {
            value: 100,
            progress: 'up'

        }
    }

]

// populating table


class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <Header />
                <MainSlider />
                <Statistics activeUsers={500} tradingCapitals={500000} aggregateAsset={2000000} />
                <ActiveUserLogTable options={durationOptions} tableData={tableData} label="User Active Log" />
                <ActiveUserLogTable options={durationOptions} tableData={tableData} label="Symbols Trading Log" />
                <Notes note_text="Note: How it works" content="content" />
                <ActiveUserLogTable options={durationOptions} tableData={tableData} label="Pricing" />
                <div className="accordion-group">
                    <AccordionContent />
                    <Accordion />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;