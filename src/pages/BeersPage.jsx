import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export const BeersPage = () => {
    const [beers, setBeers] = useState([]);
    const API_URL = "https://ih-beers-api2.herokuapp.com";
  
    useEffect(() => {
        axios.get(`${API_URL}/beers`)
            .then(response => 
                // console.log(response.data)
                setBeers(response.data))
            .catch(err => console.error(err))
            // eslint-disable-next-line
    }, [])

    if (beers.length === 0){
        return  <>
                 <h3>List of Beers</h3>
                 <p>Loading...</p>
                </>
    }

    return (
        <div>
            <h1>List of Beers</h1>
            {beers.map((beer) => (
                <div key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt="beer" style={{height: "400px"}}/>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <h4>Created by: {beer.contributed_by}</h4>
                    </Link>
                </div>
            ))}
        </div>
  )
}

export default BeersPage;