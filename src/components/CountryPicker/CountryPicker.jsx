import React, { useState, useEffect} from 'react'
import {fetchCountries} from '../../api';
import {TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    function onTagsChange(event, values){
       
        handleCountryChange(values);
    }

    return(
            
            <Autocomplete className={styles.countries}
                id="combo-countries"
                onChange={onTagsChange}
                options={fetchedCountries}
                getOptionLabel={(country) => country}
                renderInput={(params) => <TextField {...params} label="Global" variant="outlined" />}
            />
    )
}

export default CountryPicker;