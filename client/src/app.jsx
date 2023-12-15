// setup
// bootstrp
// contextapi
// fetching through axios, cors


import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ReasturantDetail from './routes/ResturantDetail';
import UpdateRestaurant from './routes/UpdateRestaurant';
import { RestaurantsContextProvider } from './Context/RestaurantsContext';

const App = () => {
    return(
    <RestaurantsContextProvider>
        <div className='container'>
        <Router>
            <Routes>
            <Route exact path='/' Component={HomePage}/>
            <Route exact path='/restaurants/:id' Component={ReasturantDetail}/>
            <Route exact path='/restaurants/:id/update' Component={UpdateRestaurant}/>
            </Routes>
        </Router>
    </div>
    </RestaurantsContextProvider>
)};

export default App;