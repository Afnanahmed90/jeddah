import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import Resturants from './Resturants';
import Cafes from './Cafes';
// import Hotels from './Hotels';
// import Places from './Places';
import guide from './DB'



class App extends Component {

  render() {

    const resturants = guide.filter(obj => obj.listName === 'bestResturants')[0].list;
    const cafes = guide.filter(obj => obj.listName === 'bestCafes')[0].list;
    const places = guide.filter(obj => obj.listName === 'bestPlaces')[0].list;
    const hotels = guide.filter(obj => obj.listName === 'bestHotels')[0].list;


    return (
      <Router>
        <div className='logo'>
          <img className='appLogo' src={logo}></img>
        </div>
        <div>
          <nav>
            <Link to="/">Home</Link>{" "}
            <Link to="/resturants">Resturants</Link>{" "}
            <Link to="/cafes">Cafe's</Link>{" "}
            <Link to="/places">Places</Link>{" "}
            <Link to="/hotels">Hotels</Link>
          </nav>

        </div>
        {/* <Route path="/resturants" component={() => <Resturants list={resturants} />} /> */}
        <Route path="/cafes" component={() => <Cafes list={cafes} />} />
        {/* <Route path="/places" component={() => <Places list={places} />} />
        <Route path="/hotels" component={() => <Hotels list={hotels} />} /> */}

      </Router>

    )
  }

}

export default App;
