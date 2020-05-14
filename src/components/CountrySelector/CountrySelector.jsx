import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountrySelector.module.css';
import { fetchCountries } from '../../api';

const CountrySelector = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = React.useState([]);

    React.useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector;