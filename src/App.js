import React, { Component } from 'react';
import { Cards, Chart, CountrySelector } from './components';
import styles from './App.module.css';

class App extends Component {

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