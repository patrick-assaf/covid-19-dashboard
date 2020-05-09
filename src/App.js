import React, { Component } from 'react';
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

class App extends Component {

    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }

    render() {
        return(
            <div className={styles.container}>
                <Cards />
                <CountrySelector />
                <Chart />
            </div>
        )
    }
}

export default App;