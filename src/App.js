import React, { Component } from 'react';
import { Cards, Chart, CountrySelector } from './components';

class App extends Component {

    render() {
        return(
            <div>
                <Cards />
                <CountrySelector />
                <Chart />
            </div>
        )
    }
}

export default App;