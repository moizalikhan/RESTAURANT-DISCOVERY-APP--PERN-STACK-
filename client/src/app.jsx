import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ReasturantDetail from './routes/ReasturantDetail';
import UpdateRestaurant from './routes/UpdateRestaurant';

const App = () => {
    return <div>
        <Router>
            <Routes>
            <Route exact path='/' Component={HomePage}/>
            <Route exact path='/restaurants/:id' Component={ReasturantDetail}/>
            <Route exact path='/restaurants/:id/update' Component={UpdateRestaurant}/>
            </Routes>
        </Router>
    </div>;
};

export default App;