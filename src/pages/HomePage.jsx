import { Link } from 'react-router-dom';
import BeersImage from '../assets/beers.png';
import RandomBeerImage from '../assets/random-beer.png'
import NewBeerImage from '../assets/new-beer.png'

export const HomePage = () => {
    return (
        <div>
            <Link to="/beers" >
                <img src={BeersImage} alt="beers" style={{width: "100vh"}}/>
                <h3>All Beers</h3>
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer ultricies dolor eu faucibus vestibulum. Nunc non elementum
                eros. 
            </p>
            <br />
            <Link to="/random" >
                <img src={RandomBeerImage} alt="random-beer" style={{width: "100vh"}}/>
                <h3>Random Beer</h3>
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer ultricies dolor eu faucibus vestibulum. Nunc non elementum
                eros.
            </p>
            <br />
            <Link to="/new" >
                <img src={NewBeerImage} alt="new-beer" style={{width: "100vh"}}/>
                <h3>New Beer</h3>
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer ultricies dolor eu faucibus vestibulum. Nunc non elementum
                eros.
            </p>
        </div>
  )
}

export default HomePage;
