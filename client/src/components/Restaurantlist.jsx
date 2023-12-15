import React, {useEffect} from "react";
import RestaurantFinder from "../RestaurantFinderApi/RestaurantFinder";//api

// const Restaurantlist = () => {useEffect( async ()=> {
//     try{
//     const response_ofapi = await RestaurantFinder.get("/");
//     console.log(response_ofapi);
//   }catch(err){}
//   },[]);
  const Restaurantlist = () => {
    useEffect(async () => {
      try {
        const response_ofapi = await RestaurantFinder.get("/");
        console.log(response_ofapi);
      } catch (err) {
      }
    }, []); // Empty dependency array means this effect will run once when the component mounts
    
    

  return (
    
    <div> 
      <div className="list-group">
        <table class="table table-hover table-dark">
          
          <thead>
            <tr className="bg-primary">
              <th scope="col">Restaurant</th>
              <th scope="col">Location</th>
              <th scope="col">Price Range</th>
              <th scope="col">Ratings</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Mcdonalds</td>
              <td>Newyork</td>
              <td>$$</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
              <button className="btn btn-danger">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Mcdonalds</td>
              <td>Newyork</td>
              <td>$$</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
              <button className="btn btn-danger">Delete</button>
              </td>
            </tr>


            <tr>
              <td>Mcdonalds</td>
              <td>Newyork</td>
              <td>$$</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
              <button className="btn btn-danger">Delete</button>
              </td>
            </tr>


            <tr>
              <td>Mcdonalds</td>
              <td>Newyork</td>
              <td>$$</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
              <button className="btn btn-danger">Delete</button>
              </td>
            </tr>


            <tr>
              <td>Mcdonalds</td>
              <td>Newyork</td>
              <td>$$</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
              <button className="btn btn-danger">Delete</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Restaurantlist;
