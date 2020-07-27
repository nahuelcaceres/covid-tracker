import React, { useState, useEffect} from 'react'
import {fetchCountries} from '../../api';
import {FormControl, TextField} from '@material-ui/core';
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
            <FormControl className={styles.formControl}>
                {/* <NativeSelect defaultValue="" onChange={(e) => (handleCountryChange(e.target.value))}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect> */}
                <Autocomplete
                    id="combo-countries"
                    onChange={onTagsChange}
                    options={fetchedCountries}
                    getOptionLabel={(country) => country}
                    renderInput={(params) => <TextField {...params} label="Global" variant="outlined" />}
                />
            </FormControl>
    )
}

export default CountryPicker;