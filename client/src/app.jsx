import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './routes/HomePage';
import DetailPage from './routes/DetailPage';
import UpdatePage from './routes/UpdatePage';

const app = () => {
    return <div>
        <Router>
            <Routes>
            <Route exact path = "/" component ={HomePage}/>
            <Route exact path = "/restaurant/id" component ={DetailPage}/>
            <Route exact path = "/restaurant/id/update" component ={UpdatePage}/>
            </Routes>
        </Router>
    </div>;
}

export default app;