import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountrySelector.module.css';
import { fetchCountries } from '../../api';

const CountrySelector = () => {
    const [fetchedCountries, setFetchedCountries] = React.useState([]);

    React.useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector;