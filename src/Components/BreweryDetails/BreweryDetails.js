import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import BreweryLoc from './BreweryLoc';
import Button from 'react-bootstrap/Button';
import './BreweryDetails.scss';

function BreweryDetails(props) {
    const [displayMap, setDisplayMap] = useState(false);
    const {brewery} = props;
    const showMap = () => {
        setDisplayMap(true);
    }
    return <div className="d-flex details-page">
            <div>
                <Card
                    bg="info"
                    text={brewery.name}
                    style={{ width: '18rem' }}
                    className="mb-2 card"
                >
                    <Card.Header>{brewery.brewery_type}</Card.Header>
                    <Card.Body>
                    <Card.Title>{brewery.name} </Card.Title>
                    <Card.Text>
                        {brewery.street},<br />
                        {brewery.city} {brewery.state}<br />
                        {brewery.country} {brewery.postal_code} <br />
                        <Button onClick={showMap} variant="primary" disabled={(brewery.latitude && brewery.longitude)? false: true}>
                            Locate on Map
                        </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                {displayMap && <BreweryLoc name={brewery.name}
                            latitude={brewery.latitude}
                            longitude={brewery.longitude} />
                }
            </div>
        </div>
}

BreweryDetails.propTypes = {
    brewery: PropTypes.object.isRequired
}

export default BreweryDetails;