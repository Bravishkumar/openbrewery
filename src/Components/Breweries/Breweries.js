import React, { useState, useEffect } from 'react';
import BreweriesList from './BreweriesList';
import dataService from '../../Services/DataService';
import BreweryDetails from '../BreweryDetails/BreweryDetails';
import Button from 'react-bootstrap/Button';

function Breweries(props) {
    const [breweries, setBreweries] = useState([]);
    const [breweryDetails, setBreweryDetails] = useState();
    const [page, setPage] = useState('list');
    useEffect(() => {
        dataService.getBreweries()
            .then(resp => setBreweries(resp))
            .catch(err => console.log(err));
    }, []);
    const getDetails = (id) => {
        dataService.getBreweryDetails(id)
            .then(r => {
                setBreweryDetails(r);
                setPage('details');
            })
            .catch(err => console.log(err));
    }
    const backToList = () => {
        setPage('list');
    }
    return <div className="brewery-app">
        {page && page === 'details' &&
            <>
                <Button onClick={backToList} variant="link">Back to List</Button>
                <BreweryDetails brewery={breweryDetails} />
            </>
        }
        {page && page === 'list' &&
            <BreweriesList breweries={breweries} getDetails={getDetails} />
        }
    </div>
}

export default Breweries;