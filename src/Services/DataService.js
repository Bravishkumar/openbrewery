function getBreweries() {
    return window.fetch('https://api.openbrewerydb.org/breweries')
        .then(r => r.json());
}

function getBreweryDetails(id) {
    return window.fetch(`https://api.openbrewerydb.org/breweries/${id}`)
        .then(r => r.json());
}

export default {
    getBreweries,
    getBreweryDetails
}