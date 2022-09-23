import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const BeerDetails = () => {
    const [beer, setBeer] = useState({});

    const API_URL = "https://ih-beers-api2.herokuapp.com/beers"
    
    const params = useParams();
    console.log('params', params.beerId);

    useEffect(() => {
        axios.get(`${API_URL}/${params.beerId}`)
        .then(response => 
            // console.log(response.data))
            setBeer(response.data))
        .catch(err => console.error(err))
        // eslint-disable-next-line
    }, [])

    if (Object.keys(beer).length === 0) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>Beer Details</h1>
            <br />
            <img src={beer.image_url} alt="single beer" />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetails;