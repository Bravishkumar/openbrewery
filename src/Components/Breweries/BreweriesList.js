import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BreweriesList(props) {
    return <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Website URL</th>
                </tr>
                </thead>
                <tbody>
                {props.breweries && props.breweries.map(p => 
                <tr key={p.id}>
                    <td><Button onClick={()=>props.getDetails(p.id)} variant="link">{p.name}</Button></td>
                    <td>{p.brewery_type}</td>
                    <td>{p.street}, {p.city} {p.state} - {p.postal_code}</td>
                    <td><a target="_blank"  rel="noreferrer" href={p.website_url}>{p.website_url}</a></td>
                </tr>
                )}
                </tbody>
            </Table>
        </>
}

BreweriesList.propTypes = {
    breweries: PropTypes.array.isRequired,
    getDetails: PropTypes.func.isRequired
}

export default BreweriesList;