import React, { Component } from 'react';
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

class App extends Component {

    state = {
        data: {},
        coutry: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        console.log(country);
    }

    render() {
        const { data } = this.state;

        return(
            <div className={styles.container}>
                <Cards data={data} />
                <CountrySelector handleCountryChange={this.handleCountryChange()} />
                <Chart />
            </div>
        )
    }
}

export default App;