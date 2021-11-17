import React from 'react';
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';

function BreweryLoc(props) {
    const {latitude, longitude, name} = props;
    const AnyReactComponent = ({ text }) => <div>{name}</div>;
    const defaultProps = {
      center: {
        lat: latitude*1,
        lng: longitude*1
      },
      zoom: 11
    };
    return (
        <div style={{ height: '400px', width: '500px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBRmxd5im9ODiZRXYHOkmIiONFki0A2qVg" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={latitude}
              lng={longitude}
              text={name}
            />
          </GoogleMapReact>
        </div>
      );
}

BreweryLoc.propTypes = {
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default BreweryLoc;