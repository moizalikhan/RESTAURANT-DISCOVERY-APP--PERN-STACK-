import React from 'react';

function Addrestaurant() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form action="">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name of Restaurant" />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Location of Restaurant" />
            </div>
            <div className="form-group">
              <select className="custom-select my-1 mr-sm-2">
                <option disabled>Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addrestaurant;
