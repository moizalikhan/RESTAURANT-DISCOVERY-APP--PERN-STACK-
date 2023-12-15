import axios from 'axios';

// /api/v1/restaurants
// /api/v1/restaurants/:id
// /api/v1/restaurants/

export default axios.create({
    baseURL: "http://localhost:3001/api/v1/restaurants",
});
